import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Users, Heart, BookOpen, MessageCircle, ArrowRight, Calendar, Clock, MapPin, Mail, UserCheck } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import SignupModal from "@/components/lifegroups/SignupModal";

const benefits = [
  {
    icon: Users,
    title: "Build Community",
    description: "Form meaningful friendships with people who are on the same journey.",
  },
  {
    icon: BookOpen,
    title: "Grow Spiritually",
    description: "Dive deeper into faith through Bible study and discussion.",
  },
  {
    icon: Heart,
    title: "Find Support",
    description: "Experience care and encouragement during life's ups and downs.",
  },
  {
    icon: MessageCircle,
    title: "Share Life",
    description: "A safe space to ask questions, share struggles, and celebrate wins.",
  },
];

export default function LifeGroups() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const { data: groupsData, isLoading } = useQuery({
    queryKey: ['lifeGroups'],
    queryFn: async () => {
      const response = await base44.functions.invoke('getLifeGroups');
      return response.data.groups || [];
    },
  });

  const groups = groupsData || [];
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
            alt="Life Groups"
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
            Connect
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Life Groups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Life is better together. Find your community.
          </motion.p>
        </div>
      </section>

      {/* What are Life Groups */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
                What are <span className="text-[#d4a853]">Life Groups</span>?
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Life Groups are small gatherings of people who meet regularly to build 
                  authentic relationships, grow in their faith, and support each other 
                  through life's journey.
                </p>
                <p>
                  They're the heartbeat of our church community – a place where real 
                  connection happens, questions are welcomed, and nobody has to do life alone.
                </p>
                <p>
                  Whether you're new to faith or have been following Jesus for years, 
                  there's a Life Group where you'll feel at home.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-[#d4a853]" />
                  </div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Groups */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Find Your Group
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Current Life Groups
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We have groups for every stage of life. Find the one that's right for you.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading groups...</p>
            </div>
          ) : groups.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No life groups available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {group.photo_url && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={group.photo_url}
                        alt={group.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{group.title}</h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {group.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-[#d4a853]" />
                        <span>{group.day_of_week}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-[#d4a853]" />
                        <span>{group.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#d4a853]" />
                        <span>{group.location}</span>
                      </div>
                      {group.leader_name && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-[#d4a853]" />
                          <span>{group.leader_name}</span>
                        </div>
                      )}
                      {group.leader_email && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4 text-[#d4a853]" />
                          <a href={`mailto:${group.leader_email}`} className="hover:text-[#d4a853] truncate">
                            {group.leader_email}
                          </a>
                        </div>
                      )}
                      {group.max_signups && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-[#d4a853]" />
                          <span>{group.current_members || 0}/{group.max_signups} members</span>
                        </div>
                      )}
                    </div>

                    {group.active ? (
                      <button
                        onClick={() => setSelectedGroup(group)}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        Login to Join
                      </button>
                    ) : (
                      <div className="w-full py-3 bg-amber-50 text-amber-700 text-sm font-medium rounded-lg text-center">
                        Sign-ups are currently closed for this group
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to <span className="text-[#d4a853]">connect</span>?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Getting connected to a Life Group is easy. Reach out and we'll help 
              you find the perfect group for your season of life.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300"
            >
              Join a Group
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Signup Modal */}
      <AnimatePresence>
        {selectedGroup && (
          <SignupModal
            group={selectedGroup}
            onClose={() => setSelectedGroup(null)}
            onSuccess={() => {
              setSelectedGroup(null);
              setSignupSuccess(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {signupSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-md text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-light text-[#1e3a5f] mb-2">You're Signed Up!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for joining! The group leader will be in touch with you soon.
              </p>
              <button
                onClick={() => setSignupSuccess(false)}
                className="px-8 py-3 bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white font-semibold rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}