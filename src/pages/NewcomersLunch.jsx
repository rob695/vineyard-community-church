import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Utensils, Calendar, Users, MessageCircle, ArrowRight, CheckCircle, Plus, Pencil, Trash2, UserCheck } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import LunchEventForm from "@/components/admin/LunchEventForm";
import SignupForm from "@/components/lunch/SignupForm";

const benefits = [
  "Meet our pastors and leaders",
  "Learn about our vision and values",
  "Find out how to get connected",
  "Ask any questions you have",
  "Meet other newcomers",
  "Enjoy a free lunch!",
];

export default function NewcomersLunch() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
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

  const { data: events = [] } = useQuery({
    queryKey: ["lunchEvents"],
    queryFn: () => base44.entities.NewcomersLunchEvent.filter({ is_active: true }, "date"),
  });

  const { data: allSignups = [] } = useQuery({
    queryKey: ["lunchSignups"],
    queryFn: async () => {
      if (!isAdmin) return [];
      return base44.entities.LunchSignup.list("-created_date");
    },
    enabled: isAdmin,
  });

  const createEventMutation = useMutation({
    mutationFn: (data) => base44.entities.NewcomersLunchEvent.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["lunchEvents"]);
      setShowEventForm(false);
    },
  });

  const updateEventMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.NewcomersLunchEvent.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["lunchEvents"]);
      setShowEventForm(false);
      setEditingEvent(null);
    },
  });

  const deleteEventMutation = useMutation({
    mutationFn: (id) => base44.entities.NewcomersLunchEvent.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["lunchEvents"]);
    },
  });

  const deleteSignupMutation = useMutation({
    mutationFn: (id) => base44.entities.LunchSignup.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["lunchSignups"]);
    },
  });

  const updateSignupMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.LunchSignup.update(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries(["lunchSignups"]);
    },
  });

  const handleSaveEvent = async (data) => {
    if (editingEvent) {
      await updateEventMutation.mutateAsync({ id: editingEvent.id, data });
    } else {
      await createEventMutation.mutateAsync(data);
    }
  };

  const handleDeleteSignup = async (id) => {
    if (confirm("Are you sure you want to delete this signup?")) {
      await deleteSignupMutation.mutateAsync(id);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557962048-0dc2a719e2d7"
            alt="Newcomers lunch"
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
            You're Invited
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Newcomers' Lunch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Your next step to getting connected
          </motion.p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
                What is <span className="text-[#d4a853]">Newcomers' Lunch</span>?
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Newcomers' Lunch is a special event we host for anyone who is new to 
                  Vineyard Community Church. It's a relaxed, informal gathering where you 
                  can meet the team, learn about our church, and take the next step in 
                  getting connected.
                </p>
                <p>
                  Whether you've been visiting for a few weeks or just walked through 
                  our doors for the first time, this lunch is for you. No pressure, 
                  just good food and good conversation.
                </p>
              </div>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d4a853] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69526b0f26e9efd0556a4774/47f7dd183_brunch.png"
                  alt="Lunch gathering"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#d4a853] rounded-2xl p-6 shadow-xl">
                <Utensils className="w-10 h-10 text-[#1e3a5f]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Event */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Save the Date
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Next Newcomers' Lunch
            </h2>
          </motion.div>

          {isAdmin && (
            <div className="mb-8 flex justify-end">
              <Button
                onClick={() => {
                  setEditingEvent(null);
                  setShowEventForm(true);
                }}
                className="bg-[#1e3a5f] hover:bg-[#2a4a6f] gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Event
              </Button>
            </div>
          )}

          {showEventForm && (
            <div className="mb-12">
              <LunchEventForm
                event={editingEvent}
                onSave={handleSaveEvent}
                onCancel={() => {
                  setShowEventForm(false);
                  setEditingEvent(null);
                }}
              />
            </div>
          )}

          {events.length > 0 ? (
            <div className="space-y-8">
              {events.map((event, index) => {
                const eventSignups = allSignups.filter(s => s.event_id === event.id);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                      <div className="grid md:grid-cols-2">
                        <div className="p-10 md:p-12">
                          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">{event.title}</h2>
                          <div className="space-y-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-6 h-6 text-[#d4a853]" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#1e3a5f] mb-1">Date</h3>
                                <p className="text-gray-600">
                                  {new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-[#d4a853]" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#1e3a5f] mb-1">Time & Location</h3>
                                <p className="text-gray-600">{event.time}<br />{event.location}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-6 h-6 text-[#d4a853]" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#1e3a5f] mb-1">RSVP</h3>
                                <p className="text-gray-600">{event.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-3 mt-8">
                            <Button
                              onClick={() => {
                                setEditingEvent(event);
                                setShowSignupForm(true);
                              }}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white font-semibold rounded-full transition-all duration-300"
                            >
                              Sign Up
                              <ArrowRight className="w-5 h-5" />
                            </Button>
                            {isAdmin && (
                              <>
                                <Button
                                  onClick={() => {
                                    setEditingEvent(event);
                                    setShowEventForm(true);
                                  }}
                                  variant="outline"
                                  className="px-6 py-4 rounded-full"
                                >
                                  <Pencil className="w-5 h-5" />
                                </Button>
                                <Button
                                  onClick={async () => {
                                    if (confirm("Are you sure you want to delete this event?")) {
                                      await deleteEventMutation.mutateAsync(event.id);
                                    }
                                  }}
                                  variant="destructive"
                                  className="px-6 py-4 rounded-full"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={event.image_url || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"}
                            alt="Food"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Event Signups for Admin */}
                    {isAdmin && eventSignups.length > 0 && (
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6 bg-gray-50 border-b">
                          <h3 className="text-lg font-semibold text-[#1e3a5f]">
                            Signups ({eventSignups.length})
                          </h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                              <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Allergies/Dietary</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {eventSignups.map((signup) => (
                                <tr key={signup.id} className="hover:bg-gray-50">
                                  <td className="px-6 py-3 text-sm text-gray-900">{signup.full_name}</td>
                                  <td className="px-6 py-3 text-sm text-gray-600">
                                    <a href={`mailto:${signup.email}`} className="hover:text-[#d4a853]">
                                      {signup.email}
                                    </a>
                                  </td>
                                  <td className="px-6 py-3 text-sm text-gray-600">
                                    {signup.allergies || <span className="text-gray-400">None</span>}
                                  </td>
                                  <td className="px-6 py-3">
                                    <select
                                      value={signup.status}
                                      onChange={(e) => updateSignupMutation.mutate({ id: signup.id, status: e.target.value })}
                                      className="text-sm border border-gray-300 rounded px-2 py-1"
                                    >
                                      <option value="pending">Pending</option>
                                      <option value="confirmed">Confirmed</option>
                                      <option value="cancelled">Cancelled</option>
                                    </select>
                                  </td>
                                  <td className="px-6 py-3">
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => handleDeleteSignup(signup.id)}
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-[#1e3a5f] mb-3">No Events Currently Planned</h3>
              <p className="text-gray-600 text-lg mb-2">We're working on scheduling our next Newcomers' Lunch.</p>
              <p className="text-gray-500">Please check back soon for upcoming dates!</p>
              {isAdmin && (
                <Button
                  onClick={() => {
                    setEditingEvent(null);
                    setShowEventForm(true);
                  }}
                  className="bg-[#1e3a5f] hover:bg-[#2a4a6f] gap-2 mt-6"
                >
                  <Plus className="w-5 h-5" />
                  Create First Event
                </Button>
              )}
            </div>
          )}
        </div>
      </section>



      {/* Signup Success Message */}
      {signupSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-light text-[#1e3a5f] mb-2">You're Signed Up!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering. We've sent you a confirmation email and look forward to seeing you at the lunch!
            </p>
            <Button
              onClick={() => setSignupSuccess(false)}
              className="bg-[#1e3a5f] hover:bg-[#2a4a6f]"
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}

      {/* Signup Form Modal */}
      {showSignupForm && editingEvent && (
        <SignupForm
          event={editingEvent}
          onClose={() => {
            setShowSignupForm(false);
            setEditingEvent(null);
          }}
          onSuccess={() => {
            setShowSignupForm(false);
            setEditingEvent(null);
            setSignupSuccess(true);
          }}
        />
      )}
    </div>
  );
}