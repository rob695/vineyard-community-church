import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#1e3a5f] mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Drop us a message or come visit us on Sunday!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-600">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <Input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-14 rounded-xl border-gray-200 focus:border-[#d4a853] focus:ring-[#d4a853]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-14 rounded-xl border-gray-200 focus:border-[#d4a853] focus:ring-[#d4a853]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <Textarea
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px] rounded-xl border-gray-200 focus:border-[#d4a853] focus:ring-[#d4a853] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white font-semibold rounded-xl transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#d4a853]" />
                </div>
                <h4 className="font-semibold text-[#1e3a5f] mb-2">Office Address</h4>
                <p className="text-gray-600 text-sm">
                  18A Benbow Close<br />
                  Daventry, Northants<br />
                  NN11 4JP
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#d4a853]" />
                </div>
                <h4 className="font-semibold text-[#1e3a5f] mb-2">Service Times</h4>
                <p className="text-gray-600 text-sm">
                  Sunday: 10:30 AM<br />
                  Kids Church: During Service
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#d4a853]" />
                </div>
                <h4 className="font-semibold text-[#1e3a5f] mb-2">Phone</h4>
                <a href="tel:01327 577850" className="text-gray-600 text-sm hover:text-[#d4a853]">
                  01327 577850
                </a>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#d4a853]" />
                </div>
                <h4 className="font-semibold text-[#1e3a5f] mb-2">Email</h4>
                <a href="mailto:office@vineyardcommunity.org.uk" className="text-gray-600 text-sm hover:text-[#d4a853]">
                  office@vineyardcommunity.org.uk
                </a>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:col-span-2">
                <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-[#d4a853]" />
                </div>
                <h4 className="font-semibold text-[#1e3a5f] mb-2">Meeting Location</h4>
                <p className="text-gray-600 text-sm">
                  The Abbey CE Academy<br />
                  Vicar Lane<br />
                  Daventry<br />
                  NN11 4GD
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200">
              
                                
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d611.8883356871979!2d-1.1571547490826108!3d52.257478132820914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1767103151913!5m2!1sen!2suk"

                
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}