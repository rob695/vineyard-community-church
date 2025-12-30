import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Plus, Pencil, Trash2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import TeamMemberForm from "@/components/team/TeamMemberForm";
import { Button } from "@/components/ui/button";

export default function Team() {
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => setUser(null));
  }, []);

  const { data: teamMembers = [] } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: () => base44.entities.TeamMember.list("order", 100),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.TeamMember.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teamMembers"] });
    },
  });

  const handleEdit = (member) => {
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDelete = async (member) => {
    if (confirm(`Delete ${member.name}?`)) {
      deleteMutation.mutate(member.id);
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingMember(null);
    queryClient.invalidateQueries({ queryKey: ["teamMembers"] });
  };

  const isAdmin = user?.role === "admin";
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80"
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
            Leadership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Meet The Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The passionate people serving our community
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {isAdmin && (
            <div className="mb-8 flex justify-end">
              <Button
                onClick={() => {
                  setEditingMember(null);
                  setShowForm(true);
                }}
                className="bg-[#1e3a5f] hover:bg-[#2a4a6f]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Team Member
              </Button>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
              >
                {isAdmin && (
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button
                      onClick={() => handleEdit(member)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
                    >
                      <Pencil className="w-4 h-4 text-[#1e3a5f]" />
                    </button>
                    <button
                      onClick={() => handleDelete(member)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                )}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-1">{member.name}</h3>
                  <p className="text-[#d4a853] text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {showForm && (
        <TeamMemberForm
          member={editingMember}
          onSuccess={handleFormSuccess}
          onCancel={() => {
            setShowForm(false);
            setEditingMember(null);
          }}
        />
      )}

      {/* Join the Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate people to serve alongside us. Whether you 
              have skills in music, hospitality, administration, or simply a heart to help, 
              there's a place for you on our team.
            </p>
            <a
              href="mailto:hello@vineyardcc.org"
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