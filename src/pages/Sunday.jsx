import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Clock, MapPin, Users, Music, Coffee, Baby, Car, CheckCircle } from "lucide-react";

const whatToExpect = [
  {
    icon: Coffee,
    title: "Warm Welcome",
    description: "Grab a coffee at our welcome area. Our friendly team will help you find your way.",
  },
  {
    icon: Music,
    title: "Contemporary Worship",
    description: "Engaging worship that creates space to connect with God through music.",
  },
  {
    icon: Users,
    title: "Relevant Teaching",
    description: "Practical messages from the Bible that speak to everyday life.",
  },
  {
    icon: Baby,
    title: "Kids Program",
    description: "Fun, age-appropriate activities for children during the service.",
  },
];

const faqs = [
  {
    question: "What should I wear?",
    answer: "Come as you are! Most people dress casually – jeans are perfectly fine.",
  },
  {
    question: "How long is the service?",
    answer: "Our services typically run about 75-90 minutes.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we have free parking available at our venue.",
  },
  {
    question: "What about my kids?",
    answer: "We have dedicated programs for children of all ages during the service.",
  },
];

export default function Sunday() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=1920&q=80"
            alt="Sunday gathering"
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
            Join Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Sunday Gathering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Come and experience community, worship, and great teaching
          </motion.p>
        </div>
      </section>

      {/* Service Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-8">
                When & Where
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#d4a853]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Every Sunday</h3>
                    <p className="text-gray-600">10:30 AM</p>
                    <p className="text-gray-500 text-sm mt-1">Doors open at 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4a853]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Location</h3>
                    <p className="text-gray-600">18A Benbow Close</p>
                    <p className="text-gray-600">Daventry, Northants NN11 4JP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-[#d4a853]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Parking</h3>
                    <p className="text-gray-600">Free parking available on site</p>
                  </div>
                </div>
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
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
                  alt="Worship"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Your First Visit
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              What to Expect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              First time visiting can be a bit nerve-wracking. Here's what you can expect when you arrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#1e3a5f]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#d4a853]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Frequently Asked
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#d4a853] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
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
              We can't wait to <span className="text-[#d4a853]">meet you</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Your first visit is just the beginning. Come and discover a community 
              where you can belong, grow, and make a difference.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300"
            >
              Get Directions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}