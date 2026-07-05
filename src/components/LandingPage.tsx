"use client";

import Header from "./Header";
import HeroSection from "./HeroSection";
import BrandsBanner from "./BrandsBanner";
import SolutionsSection from "./SolutionsSection";
import ProcessSection from "./ProcessSection";
import IndustriesSection from "./IndustriesSection";
import ProjectsSection from "./ProjectsSection";
import WhyChooseSection from "./WhyChooseSection";
import FAQSection from "./FAQSection";
import HomeContactSection from "./HomeContactSection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection isLoggedIn={false} />
        
        {/* Brands Trust Banner */}
        <BrandsBanner />

        {/* Intelligent Solutions Section */}
        <SolutionsSection />

        {/* Work Process Section */}
        <ProcessSection />

        {/* Industries We Serve Section */}
        <IndustriesSection />

        {/* Projects Showcase Section */}
        <ProjectsSection />

        {/* Why Choose Incsmart & Testimonials */}
        <WhyChooseSection />

        {/* FAQs Accordion Section */}
        <FAQSection />

        {/* Contact Us — home page only */}
        <HomeContactSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
