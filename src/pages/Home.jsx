import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import ComeAlongSection from "@/components/home/ComeAlongSection";
import NewcomersLunchSection from "@/components/home/NewcomersLunchSection";
import OurStorySection from "@/components/home/OurStorySection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <ComeAlongSection />
      <NewcomersLunchSection />
      <OurStorySection />
      <ContactSection />
    </div>
  );
}