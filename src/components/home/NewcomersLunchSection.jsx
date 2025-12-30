import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Utensils, ArrowRight } from "lucide-react";

export default function NewcomersLunchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1557962048-0dc2a719e2d7"
                alt="People sharing a meal"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#d4a853] rounded-2xl p-6 shadow-xl">
              <Utensils className="w-10 h-10 text-[#1e3a5f]" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#1e3a5f] mb-6 leading-tight">
              Lunch, anyone?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We are often hosting lunch events where all those who are new can take the 
              next step to getting more connected. It's a great opportunity to meet the 
              team, ask questions, and find out more about our church family.
            </p>
            <Link
              to={createPageUrl("NewcomersLunch")}
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#d4a853] transition-colors group"
            >
              See upcoming events
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}