"use client";

import { Star, Quote, Building2, Award, CheckCircle2, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reviews = [
  {
    quote: "IncSmart helped us reduce our HVAC energy consumption by 20% while improving overall comfort for our patrons. The real-time visibility across multiplex properties has transformed our facility operations.",
    author: "National Facility Head",
    role: "PVR INOX Ltd.",
    stars: 5,
    industry: "Commercial Entertainment",
    metric: "20% Verified Savings",
    company: "PVR INOX"
  },
  {
    quote: "The remote monitoring solution by IncSmart has dramatically improved reliability and response time across our electrical substations. We get predictive failure alerts well before hardware trips.",
    author: "Chief Electrical Engineer",
    role: "Western Railway",
    stars: 5,
    industry: "Transit & Rail Infrastructure",
    metric: "15% Downtime Cut",
    company: "Western Railway"
  },
  {
    quote: "IncSmart's IoT platform gives us real-time vibration and thermal visibility across heavy mill drives, helping us prevent catastrophic motor failures and optimize our power factor significantly.",
    author: "Plant Operations General Manager",
    role: "UltraTech Cement",
    stars: 5,
    industry: "Heavy Process Manufacturing",
    metric: "Zero Unplanned Halts",
    company: "UltraTech Cement"
  },
  {
    quote: "Their automated energy management and cloud BMS platform provided immediate ROI with measurable electrical savings. The tenant portal and automated sub-metering save hundreds of admin hours every month.",
    author: "VP Infrastructure & Sustainability",
    role: "DLF CyberCity",
    stars: 5,
    industry: "Commercial Real Estate",
    metric: "18% Peak Demand Cut",
    company: "DLF CyberCity"
  },
  {
    quote: "Maintaining strict OT pressurization and backup power compliance is critical in healthcare. IncSmart's IoT sensors and 24x7 telemetry give our biomedical team complete peace of mind.",
    author: "Director of Biomedical Engineering",
    role: "Global Multispeciality Hospital",
    stars: 5,
    industry: "Healthcare Facilities",
    metric: "100% NABH Compliance",
    company: "Global Hospitals"
  },
  {
    quote: "From initial site assessment to final sensor integration, IncSmart demonstrated deep technical expertise. Their smart solar monitoring platform accurately flags inverter clipping and soiling losses in real time.",
    author: "Head of Solar Asset Operations",
    role: "CleanTech Solar Power",
    stars: 5,
    industry: "Renewable Energy",
    metric: "99.8% Data Accuracy",
    company: "CleanTech Solar"
  }
];

export default function ReviewsPage() {
  const whatsappUrl = "https://wa.me/919711888111?text=Hello%20IncSmart%20Team%2C%20I%20would%20like%20to%20discuss%20your%20IoT%20and%20automation%20solutions%20and%20schedule%20a%20consultation.%20Please%20connect%20with%20me%20regarding%20the%20same.";

  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#081325]/70 backdrop-blur-md mb-6">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                Client Testimonials & Reviews
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
              Trusted by <br />
              <span className="text-gradient-cyan-lime font-bold">India's Infrastructure Leaders</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Read how leading enterprises in manufacturing, transit, commercial real estate, and healthcare partner with IncSmart to unlock efficiency and reliable automation.
            </p>
          </div>

          {/* Rating Summary Strip */}
          <div className="bg-[#081325]/60 border border-white/10 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left backdrop-blur-md">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-extrabold text-white font-heading">5.0</div>
              <div>
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Over 120+ projects delivered</div>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/10"></div>

            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-brand-lime font-heading">20% Avg.</div>
              <div className="text-xs text-slate-400">Verified Energy Savings</div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/10"></div>

            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-brand-cyan font-heading">99.9%</div>
              <div className="text-xs text-slate-400">Platform Availability</div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((rev, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl border border-white/5 bg-[#081325]/50 hover:border-brand-cyan/30 hover:bg-[#0c1a2d]/70 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
              >
                <div>
                  {/* Top rating & quote mark */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-lime/10 text-brand-lime border border-brand-lime/20">
                      {rev.metric}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed italic mb-6">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-brand-cyan font-medium mt-0.5">
                    {rev.role}
                  </p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">
                    {rev.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#081325]/80 via-[#0B1A2E]/80 to-[#081325]/80 text-center relative overflow-hidden backdrop-blur-md">
            <div className="max-w-2xl mx-auto relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">
                Experience the Same Results at Your Facility
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Let our energy audit engineers review your operations and show you how much power and cost IncSmart can save.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Book a Consultation</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
