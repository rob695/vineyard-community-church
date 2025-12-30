import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WelcomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="welcome" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Welcome
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#1e3a5f] mb-8 leading-tight">
              We're so pleased you've
              <span className="block font-normal">stopped by!</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Vineyard Community Church is a welcoming community where everyone belongs. We are always seeking fresh 
                ways to engage with our culture and to faithfully embody Jesus' life-changing 
                message.
              </p>
              <p>
                Here at the Vineyard, we foster a <span className="text-[#1e3a5f] font-medium">"come as you are"</span> culture 
                where <span className="text-[#d4a853] font-semibold">EVERYONE</span> is <span className="text-[#d4a853] font-semibold">WELCOME</span> to 
                come and <span className="text-[#d4a853] font-semibold">BELONG</span>; that's everyone regardless of their age, 
                gender, nationality, education, employment status, social or political standing, 
                race, religion or background.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80"
                alt="Church community gathering"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/30 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d4a853]/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1e3a5f]/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}