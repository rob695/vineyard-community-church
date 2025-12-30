import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Users, Calendar } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Connect with God",
    description: "Experience meaningful worship and encounter God's presence in a welcoming atmosphere.",
  },
  {
    icon: Users,
    title: "Find Community",
    description: "Build lasting friendships with others who are learning to follow Jesus in real ways.",
  },
  {
    icon: Calendar,
    title: "Grow Together",
    description: "Join a Life Group and discover a safe place for your spiritual journey.",
  },
];

export default function ComeAlongSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#1e3a5f] mb-6">
            Come Along
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We warmly invite you to come along and check us out. Stick around and you'll 
            definitely find a place where you can connect with God and others.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#1e3a5f]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a853]/10 transition-colors">
                <feature.icon className="w-8 h-8 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#1e3a5f] rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Our desire is that Vineyard would be a 
                <span className="text-[#d4a853]"> safe and accepting</span> place.
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Wherever you consider yourself to be on your own spiritual journey, 
                you can rest assured, you'll always be very welcome!
              </p>
              <Link
                to={createPageUrl("Sunday")}
                className="inline-flex items-center px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300 w-fit"
              >
                Plan Your Visit
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1723473160682-48…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80"
                alt="Church service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] via-[#1e3a5f]/50 to-transparent lg:block hidden" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}