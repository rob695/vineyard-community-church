import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Authentic Community",
    description: "We believe in real relationships where people can be themselves and grow together.",
  },
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    description: "We're committed to teaching the Bible in relevant, practical ways that transform lives.",
  },
  {
    icon: Users,
    title: "Everyone Belongs",
    description: "We welcome all people regardless of background, creating space for everyone to encounter God.",
  },
  {
    icon: Globe,
    title: "Serving Others",
    description: "We're passionate about serving our community and making a difference in the world around us.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80"
            alt="Church community"
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover who we are and what we're all about
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-8">
                How it all <span className="text-[#d4a853]">began</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Vineyard Community Church is led by our founding pastors who have lived in our 
                  community for many years. Our journey began with a simple vision: to create a 
                  place where anyone could come and experience God's love without judgment.
                </p>
                <p>
                  From humble beginnings meeting in living rooms with just a handful of people, 
                  we've grown into a vibrant community of believers who are passionate about 
                  following Jesus and serving others.
                </p>
                <p>
                  Today, we continue to be a church that believes in the power of authentic 
                  community, relevant teaching, and the transformative love of God. We're always 
                  seeking fresh ways to engage with our culture while staying faithful to the 
                  timeless message of the Gospel.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69526b0f26e9efd0556a4774/7bdc42aee_rob_and_ange.jpg"
                  alt="Rob and Ange Gee"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d4a853]/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Beliefs
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              What We Believe
            </h2>

          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">The Bible</h3>
              <p className="text-gray-600">
                We believe the Bible is God's inspired Word, the authoritative guide for faith and life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">Jesus Christ</h3>
              <p className="text-gray-600">
                We believe Jesus is the Son of God who lived, died, and rose again to offer salvation to all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">The Holy Spirit</h3>
              <p className="text-gray-600">
                We believe in the present ministry of the Holy Spirit who empowers believers for life and service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">The Church</h3>
              <p className="text-gray-600">
                We believe the church is the body of Christ, called to worship, grow, and serve together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              OUR PURPOSE
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              At the core of who we are, these beliefs shape everything we do.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 max-w-4xl mx-auto">
              <p className="text-gray-600">
                We are here in Daventry to gather and grow “Everyday people who are called to extend God’s Kingdom, love and life to our communities by following the person and the ‘Way’ of Jesus Christ”
              </p>
              <br/>
              <p className="text-gray-600">
                While he was on the earth, Jesus established his Church - a band of followers who would participate in his mission. And the beautiful thing is, he didn't go out to select those who are the strongest, the fastest and the most professional to play their part in that. He chose the weak and the weary; the last, the least and the lost. Its' the faceless nobodies who God partners with in order to outwork his mission for this world. Defining his mission, Jesus said that God had sent him in to this world to bring Good News to the poor, freedom for the captives, healing for the sick and relief for those who are oppressed.
              </p>
              <br/>
              <p className="text-gray-600">
                So, we believe that our purpose is to embody that message in the context of contemporary culture; to those who live around us. In essence, we are not only to be communicators but also demonstrators of God’s limitless love and grace to the world.
              </p>


          </div>
        </div>
      </section>


      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              What shapes how it looks
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1e3a5f]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#d4a853]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vineyard Movement */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Part of Something Bigger
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                The Vineyard Movement
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                We're part of the Vineyard family of churches – a global movement of over 2,400 
                churches in more than 95 countries. The Vineyard is known for its worship, 
                kingdom theology, and commitment to doing the works of Jesus.
              </p>
              <p className="text-white/60 leading-relaxed">
                Being part of this movement connects us to a rich heritage of faith and a 
                worldwide community of believers passionate about seeing God's kingdom come 
                on earth as it is in heaven.
              </p>
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
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69526b0f26e9efd0556a4774/7fa974bdb_Vineyard_Global.jpg"
                  alt="Vineyard Global Movement"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}