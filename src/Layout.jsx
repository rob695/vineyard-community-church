import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen flex flex-col">
      <style>{`
        :root {
          --primary: #1e3a5f;
          --accent: #d4a853;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}