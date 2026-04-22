"use client";
import { useState } from "react";
import AboutSection from "@/components/pages/AboutSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/pages/Hero";
import LogosBar from "@/components/Logobar";
import MarketingSection from "@/components/pages/Marketingsection";
import CTASection from "@/components/pages/Ctasection";
import ConsultantsSection from "@/components/pages/ConsultantSection";
import BookReachSection from "@/components/pages/BookReachSection";
import ProcedureSection from "@/components/pages/ProcedureSection";
import CounterSection from "@/components/pages/CounterSection";
import BrandSection from "@/components/pages/BrandSection";
import DiscountBannerSection from "@/components/pages/DiscountBannerSection";
import GiveStorySection from "@/components/pages/GiveStorySection";
import PortfolioSection from "@/components/pages/PortfolioSection";
import TestimonialsSection2 from "@/components/pages/TestimonialSection";
import ContactFormSection from "@/components/pages/ContactFormSection";
import FAQSection from "@/components/pages/FaqSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogosBar />
      <AboutSection />
      <CTASection />
      <MarketingSection />
      <BookReachSection />
      <ConsultantsSection />
      <ProcedureSection />
      <CounterSection />
      <BrandSection />
      <DiscountBannerSection />
      <GiveStorySection />
      <PortfolioSection />
      <TestimonialsSection2 />
      <ContactFormSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

