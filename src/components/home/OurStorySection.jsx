import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#1e3a5f] mb-6 leading-tight">
              How it all began
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Vineyard Community Church is led by Rob & Ange Gee. Both have lived in Daventry for many years – in fact, Rob was born here! Our journey began back in February of 2000 with a simple vision: to create a 
              place where anyone could come and encounter God's love.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From humble beginnings meeting in living rooms, we've grown into a lively 
              community that continues to impact lives and serve our neighborhood with the 
              love of Jesus.
            </p>
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-all duration-300 group"
            >
              Read more
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&q=80"
                  alt="Church gathering"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80"
                  alt="Community service"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
                  alt="Fellowship"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80"
                  alt="Youth group"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}