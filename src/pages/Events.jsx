import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { format, addDays, addWeeks } from "date-fns";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";

const staticEvents = [
  {
    title: "Sunday Service",
    date: addDays(new Date(), 0),
    time: "10:30 AM",
    location: "Main Venue",
    description: "Join us for worship, teaching, and community. All are welcome!",
    recurring: true,
    image: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=600&q=80",
  },
  {
    title: "Youth Night",
    date: addDays(new Date(), 5),
    time: "7:00 PM",
    location: "Youth Room",
    description: "Fun, games, and faith for teenagers. Bring your friends!",
    recurring: true,
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
  },
  {
    title: "Community BBQ",
    date: addWeeks(new Date(), 4),
    time: "1:00 PM",
    location: "Church Garden",
    description: "Summer celebration with food, games, and fellowship. Free for all!",
    recurring: false,
    image: "https://images.unsplash.com/photo-1529543544277-750e658c6bf0?w=600&q=80",
  },
  {
    title: "Prayer Meeting",
    date: addDays(new Date(), 3),
    time: "7:30 PM",
    location: "Prayer Room",
    description: "Come and pray together for our church, community, and world.",
    recurring: true,
    image: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?w=600&q=80",
  },
  {
    title: "Women's Breakfast",
    date: addWeeks(new Date(), 3),
    time: "9:00 AM",
    location: "Local Restaurant",
    description: "A morning of food, fellowship, and encouragement for women.",
    recurring: false,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
];

export default function Events() {
  const { data: lunchEvents = [] } = useQuery({
    queryKey: ["lunchEvents"],
    queryFn: () => base44.entities.NewcomersLunchEvent.filter({ is_active: true }, "date"),
  });

  const lunchEventsFormatted = lunchEvents.map(event => ({
    title: event.title,
    date: new Date(event.date),
    time: event.time,
    location: event.location,
    description: event.description,
    recurring: false,
    image: event.image_url || "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&q=80",
  }));

  const upcomingEvents = [...staticEvents, ...lunchEventsFormatted].sort((a, b) => a.date - b.date);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Events"
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
            What's Happening
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            There's always something happening at Vineyard
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
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
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
                  {event.recurring && (
                    <span className="absolute top-4 right-4 bg-[#d4a853] text-[#1e3a5f] text-xs font-semibold px-3 py-1 rounded-full">
                      Weekly
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 text-[#d4a853]" />
                      {format(event.date, "EEEE, MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4 text-[#d4a853]" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 text-[#d4a853]" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Don't miss <span className="text-[#d4a853]">anything</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Stay up to date with all our events and announcements. 
              Get in touch to receive our weekly newsletter.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a853] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#e5b964] transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}