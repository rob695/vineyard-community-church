import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Utensils, Users, MessageCircle, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { format, addWeeks } from "date-fns";

const benefits = [
  "Meet our pastors and leaders",
  "Learn about our vision and values",
  "Find out how to get connected",
  "Ask any questions you have",
  "Meet other newcomers",
  "Enjoy a free lunch!",
];

export default function NewcomersLunch() {
  const nextLunchDate = addWeeks(new Date(), 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1920&q=80"
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
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-[#d4a853]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">Date</h3>
                      <p className="text-gray-600">{format(nextLunchDate, "EEEE, MMMM d, yyyy")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#d4a853]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">Time</h3>
                      <p className="text-gray-600">12:30 PM - 2:00 PM<br />(straight after Sunday service)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#d4a853]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">RSVP</h3>
                      <p className="text-gray-600">Let us know you're coming so we can cater for you!</p>
                    </div>
                  </div>
                </div>
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-all duration-300 mt-8"
                >
                  Sign Up
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Food"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
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
              Can't make it to lunch?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              No problem! Get in touch and we'll find another way to help you get connected. 
              We'd love to hear from you.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}