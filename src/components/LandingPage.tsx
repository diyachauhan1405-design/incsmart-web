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
import CTASection from "./CTASection";
import Footer from "./Footer";

interface LandingPageProps {
  onSignInSuccess: () => void;
}

export default function LandingPage({ onSignInSuccess }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col">
      {/* Navigation Header */}
      <Header isLoggedIn={false} onSignInSuccess={onSignInSuccess} />
      
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

        {/* Call to Action: Ready to Transform */}
        <CTASection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
