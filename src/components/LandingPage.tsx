"use client";

import Header from "./Header";
import HeroSection from "./HeroSection";
import BrandsBanner from "./BrandsBanner";
import SolutionsSection from "./SolutionsSection";
import WhyChooseSection from "./WhyChooseSection";
import AchievementsSection from "./AchievementsSection";
import ProcessSection from "./ProcessSection";
import HomeCTASection from "./HomeCTASection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content Area - Exact 7 sections per Section 8 of brief */}
      <main className="flex-grow">
        {/* Section 1: Hero / Landing Section */}
        <HeroSection isLoggedIn={false} />
        
        {/* Section 2: Our Clients / Trusted By */}
        <BrandsBanner />

        {/* Section 3: What IncSmart Does / Main Solutions */}
        <SolutionsSection />

        {/* Section 4: Why Choose IncSmart */}
        <WhyChooseSection />

        {/* Section 5: Achievements / Key Numbers */}
        <AchievementsSection />

        {/* Section 6: Uniform Our Process */}
        <ProcessSection />

        {/* Section 7: Compact CTA */}
        <HomeCTASection />
      </main>

      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}
