"use client";
import React from "react";
import { Navbar } from "@/components/NavBar";
import Home from "@/components/Hero";
import FeaturesSection from "@/components/Features";
import FinancialControlSection from "@/components/FinancialControl";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
export const page = () => {
  return (
    <div>
      <Home />
      <FeaturesSection />
      <FinancialControlSection />
      <CTASection />
    </div>
  );
};

export default page;
