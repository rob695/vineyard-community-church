import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Users, Globe, Sparkles, ArrowRight } from "lucide-react";

const outreachAreas = [
  {
    title: "Local Community",
    description: "We're passionate about serving our neighbors right here in Daventry. From food banks to community events, we're committed to making a difference locally.",
    icon: Users,
  },
  {
    title: "Global Missions",
    description: "We support mission partners around the world, helping to spread the good news and meet practical needs in communities far beyond our own.",
    icon: Globe,
  },
  {
    title: "Social Action",
    description: "We advocate for justice and work to address systemic issues that affect the vulnerable in our society.",
    icon: Sparkles,
  },
  {
    title: "Compassion Ministry",
    description: "We respond to immediate needs in our community with practical help, prayer, and ongoing support.",
    icon: Heart,
  },
];

export default function CommunityOutreach() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
            alt="Community Outreach"
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
            Making a Difference
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Community Outreach
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Living out our faith through service and love
          </motion.p>
        </div>
      </section>

      {/* Our Heart */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
                Our Heart for <span className="text-[#d4a853]">Outreach</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At Vineyard Community Church, we believe that the church exists not just 
                  for itself, but for the world around it. Jesus called us to be salt and 
                  light – to make a tangible difference in the lives of others.
                </p>
                <p>
                  Our outreach isn't just a program or an event – it's at the heart of who 
                  we are. We're passionate about demonstrating God's love through practical 
                  action, meeting real needs, and building genuine relationships.
                </p>
                <p>
                  Whether it's through our local initiatives or supporting global missions, 
                  we're committed to being a church that makes a difference.
                </p>
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
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                  alt="Outreach"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d4a853]/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outreach Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              How We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Areas of Outreach
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {outreachAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1e3a5f]/5 rounded-2xl flex items-center justify-center mb-6">
                  <area.icon className="w-8 h-8 text-[#d4a853]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
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
              Join the <span className="text-[#d4a853]">movement</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              There are so many ways to get involved in our outreach work. Whether you want 
              to volunteer, give, or pray – every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("KindnessProjects")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300"
              >
                See Our Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}