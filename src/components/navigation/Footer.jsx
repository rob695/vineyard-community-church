import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="mb-6">
            <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69526b0f26e9efd0556a4774/8e41f6db6_VineyardLogo1.png"
                alt="Vineyard Community Church"
                className="w-[170px] md:w-[170px]" />

              <span className="text-white font-light tracking-[0.3em] text-xl">
              
        
              </span>
              <p className="text-white/50 text-xs tracking-[0.2em] mt-1">COMMUNITY CHURCH</p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">A welcoming community where everyone belongs.

            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a853] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a853] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a853] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d4a853] font-semibold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
              { label: "About Us", page: "About" },
              { label: "Life Groups", page: "LifeGroups" },
              { label: "Events", page: "Events" },
              { label: "Contact", page: "Contact" }].
              map((link, index) =>
              <li key={index}>
                  <Link
                  to={createPageUrl(link.page)}
                  className="text-white/70 hover:text-[#d4a853] transition-colors text-sm">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-[#d4a853] font-semibold mb-6 tracking-wide">Service Times</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4a853] mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Sunday Service</p>
                  <p className="text-white/60 text-sm">10:30 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4a853] mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Kids Church</p>
                  <p className="text-white/60 text-sm">During Sunday Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#d4a853] font-semibold mb-6 tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a853] mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  18A Benbow Close<br />
                  Daventry, Northants<br />
                  NN11 4JP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4a853]" />
                <a href="tel:01327 577850" className="text-white/70 hover:text-[#d4a853] text-sm transition-colors">
                  01327 577850
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4a853]" />
                <a href="mailto:office@vineyardcommunity.org.uk" className="text-white/70 hover:text-[#d4a853] text-sm transition-colors">
                  office@vineyardcommunity.org.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Vineyard Community Church. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>);

}