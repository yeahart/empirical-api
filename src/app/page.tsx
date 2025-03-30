"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Guides from "@/components/Guides";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Features />
      <Guides />
      <Footer />
    </main>
  );
}
