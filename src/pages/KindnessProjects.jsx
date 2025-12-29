import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Users, Home, ShoppingBag, Coffee, Utensils, ArrowRight } from "lucide-react";

const projects = [
  {
    icon: ShoppingBag,
    title: "Food Bank Support",
    description: "We partner with local food banks to collect and distribute food to families in need throughout our community.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
  },
  {
    icon: Home,
    title: "Debt Help (CAP)",
    description: "Through Christians Against Poverty, we offer free debt counseling and support to help people become debt-free.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    icon: Coffee,
    title: "Community Café",
    description: "A warm, welcoming space where anyone can drop in for a cuppa and a chat. Building connections one coffee at a time.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80",
  },
  {
    icon: Users,
    title: "Elderly Support",
    description: "Regular visits, practical help, and companionship for elderly members of our community who may be isolated.",
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=600&q=80",
  },
  {
    icon: Utensils,
    title: "Community Meals",
    description: "Free hot meals served regularly to anyone who needs a good feed and some friendly company.",
    image: "https://images.unsplash.com/photo-1559482214-71f99cd073c7?w=600&q=80",
  },
  {
    icon: Heart,
    title: "Random Acts of Kindness",
    description: "Spontaneous acts of love and generosity throughout our community – because kindness is contagious!",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
  },
];

export default function KindnessProjects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
            alt="Kindness"
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
            Serving Others
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Kindness Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Loving our community through practical action
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Faith in <span className="text-[#d4a853]">Action</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We believe that faith without action is incomplete. That's why we're committed 
              to serving our community through practical projects that make a real difference 
              in people's lives. From food banks to debt help, we're here to show God's love 
              in tangible ways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#d4a853] rounded-xl flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Make a Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Get Involved
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                There are so many ways you can be part of what God is doing in our community. 
                Whether you have time to volunteer, resources to share, or skills to offer – 
                we'd love to have you join us.
              </p>
              <div className="space-y-4">
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300"
                >
                  Volunteer With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Volunteers"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}