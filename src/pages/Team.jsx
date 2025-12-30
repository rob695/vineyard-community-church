import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Plus, Pencil, Trash2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import TeamMemberForm from "@/components/admin/TeamMemberForm";

export default function Team() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await base44.auth.me();
      setUser(currentUser);
      setIsAdmin(currentUser?.role === "admin");
    } catch (error) {
      setUser(null);
      setIsAdmin(false);
    }
  };

  const { data: teamMembers = [], isLoading } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: () => base44.entities.TeamMember.list("order"),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.TeamMember.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["teamMembers"]);
      setShowForm(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.TeamMember.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["teamMembers"]);
      setShowForm(false);
      setEditingMember(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.TeamMember.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["teamMembers"]);
    },
  });

  const handleSave = async (data) => {
    if (editingMember) {
      await updateMutation.mutateAsync({ id: editingMember.id, data });
    } else {
      await createMutation.mutateAsync(data);
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this team member?")) {
      await deleteMutation.mutateAsync(id);
    }
  };

  const handleAdd = () => {
    setEditingMember(null);
    setShowForm(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/70 to-[#1e3a5f]/90" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Meet the Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The people who make it all happen
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {isAdmin && (
            <div className="mb-8 flex justify-end">
              <Button
                onClick={handleAdd}
                className="bg-[#1e3a5f] hover:bg-[#2a4a6f] gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Team Member
              </Button>
            </div>
          )}

          {showForm && (
            <div className="mb-12">
              <TeamMemberForm
                member={editingMember}
                onSave={handleSave}
                onCancel={() => {
                  setShowForm(false);
                  setEditingMember(null);
                }}
              />
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading team members...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                >
                  {isAdmin && (
                    <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        onClick={() => handleEdit(member)}
                        className="bg-white/90 hover:bg-white"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(member.id)}
                        className="bg-red-500/90 hover:bg-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#d4a853] font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Join Our <span className="text-[#d4a853]">Team</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We're always looking for passionate people to join our team. If you feel called to serve
              and want to make a difference in our community, we'd love to hear from you.
            </p>
            <a
              href="mailto:office@vineyardcommunity.org.uk"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}