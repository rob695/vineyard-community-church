import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import AdminAuthButton from "@/components/admin/AdminAuthButton";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", page: "Home" },
  {
    label: "I'm New",
    children: [
      { label: "About", page: "About" },
      { label: "Meet The Team", page: "Team" },
      { label: "Newcomers' Lunch", page: "NewcomersLunch" },
    ],
  },
  {
    label: "Get Connected",
    children: [
      { label: "Life Groups", page: "LifeGroups" },
      { label: "Listen Again", page: "ListenAgain" },
      { label: "Sunday Gathering", page: "Sunday" },
    ],
  },
  { label: "Events", page: "Events" },
  {
    label: "What We Do",
    children: [
      { label: "Kindness Projects", page: "KindnessProjects" },
      { label: "Community Outreach", page: "CommunityOutreach" },
    ],
  },
  { label: "Contact", page: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1e3a5f]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-[#d4a853] transition-colors text-sm font-medium">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={createPageUrl(item.page)}
                    className="px-4 py-2 text-white/90 hover:text-[#d4a853] transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[200px] overflow-hidden"
                    >
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={createPageUrl(child.page)}
                          className="block px-5 py-3 text-[#1e3a5f] hover:bg-[#1e3a5f]/5 hover:text-[#d4a853] transition-colors text-sm"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Admin Login/Logout */}
          <div className="hidden lg:block ml-auto">
            <AdminAuthButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                        className="flex items-center justify-between w-full py-3 text-white/90 text-sm font-medium"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === index ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                to={createPageUrl(child.page)}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-white/70 hover:text-[#d4a853] text-sm"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={createPageUrl(item.page)}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-white/90 hover:text-[#d4a853] text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}