import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Users, Heart, BookOpen, MessageCircle, ArrowRight } from "lucide-react";

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

const groups = [
  {
    name: "Young Adults",
    day: "Tuesdays",
    time: "7:30 PM",
    location: "Various homes",
    description: "For those in their 20s and 30s navigating life, faith, and everything in between.",
  },
  {
    name: "Couples",
    day: "Wednesdays",
    time: "7:00 PM",
    location: "Church building",
    description: "Grow together as couples while building friendships with others.",
  },
  {
    name: "Women's Group",
    day: "Thursdays",
    time: "10:00 AM",
    location: "Various homes",
    description: "A supportive community for women to connect, grow, and encourage one another.",
  },
  {
    name: "Men's Group",
    day: "Saturdays",
    time: "8:00 AM",
    location: "Local café",
    description: "Brotherhood, accountability, and growth for men of all ages.",
  },
  {
    name: "Mixed Group",
    day: "Thursdays",
    time: "7:30 PM",
    location: "Various homes",
    description: "Open to everyone – individuals, couples, families. All welcome!",
  },
  {
    name: "Seniors",
    day: "Wednesdays",
    time: "2:00 PM",
    location: "Church building",
    description: "Fellowship, study, and friendship for our older members.",
  },
];

export default function LifeGroups() {
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">{group.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{group.day}</span> at {group.time}
                  </p>
                  <p className="text-sm text-gray-500">{group.location}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{group.description}</p>
              </motion.div>
            ))}
          </div>
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
    </div>
  );
}