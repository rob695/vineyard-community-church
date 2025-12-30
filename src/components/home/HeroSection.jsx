import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80"
          alt="Community gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/70 to-[#1e3a5f]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69526b0f26e9efd0556a4774/8e41f6db6_VineyardLogo1.png"
            alt="Vineyard Community Church"
            className="w-[200px] md:w-[300px] mx-auto"
          />
          <div class="h-px w-32 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mx-auto my-4"></div>
          <span class="text-white/80 text-sm tracking-[0.3em]">COMMUNITY CHURCH</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#d4a853] text-2xl md:text-3xl lg:text-4xl font-light italic mb-8"
        >
          "No perfect people allowed"
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ paddingTop: '100px' }}
        >
          <a
            href="#welcome"
            className="px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}