"use client";

import Image from "next/image";
import { 
  Zap, 
  Monitor, 
  Settings, 
  LayoutGrid, 
  ShieldCheck, 
  MapPin, 
  Star
} from "lucide-react";
import cloudDiagram from "../../public/cloud-diagram.png";

interface DifferentiatorItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  themeClass: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  stars: number;
  company: string;
  logo: React.ReactNode;
  themeColor: string;
}

export default function WhyChooseSection() {
  const differentiators: DifferentiatorItem[] = [
    {
      title: "Up to 20% Energy Savings",
      description: "Optimize energy consumption with intelligent automation and smart analytics.",
      icon: Zap,
      themeClass: "text-[#84CC16] bg-[#84CC16]/10 border-[#84CC16]/20"
    },
    {
      title: "24x7 Live Monitoring",
      description: "Monitor your assets and infrastructure in real-time from anywhere, anytime.",
      icon: Monitor,
      themeClass: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Predictive Maintenance",
      description: "Identify issues before they occur and minimize downtime with predictive insights.",
      icon: Settings,
      themeClass: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "One Unified Dashboard",
      description: "Manage HVAC, energy, fire safety, and more from one centralized platform.",
      icon: LayoutGrid,
      themeClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Enterprise Grade Security",
      description: "End-to-end data encryption and role-based access for complete peace of mind.",
      icon: ShieldCheck,
      themeClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Pan India Deployment",
      description: "Trusted by leading enterprises across India with scalable and future-ready solutions.",
      icon: MapPin,
      themeClass: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  const testimonials: TestimonialItem[] = [
    {
      quote: "INCSMART helped us reduce our HVAC energy consumption by 20% while improving overall comfort for our guests.",
      author: "Facility Head",
      role: "PVR INOX",
      stars: 5,
      company: "PVR INOX",
      themeColor: "group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
      logo: (
        <div className="flex items-center text-xs font-black tracking-tight text-white select-none">
          <span>PVR</span>
          <span className="font-light text-slate-300 ml-0.5">INOX</span>
        </div>
      )
    },
    {
      quote: "The remote monitoring solution by INCSMART has improved reliability and response time across our assets.",
      author: "Chief Engineer",
      role: "Western Railway",
      stars: 5,
      company: "Western Railway",
      themeColor: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
      logo: (
        <div className="flex items-center space-x-1 select-none">
          <svg className="w-5 h-5 text-red-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
            <circle cx="50" cy="50" r="42" strokeDasharray="3,3" />
            <circle cx="50" cy="50" r="28" />
            <path d="M50,15 L50,85 M15,50 L85,50" />
          </svg>
          <span className="text-[9px] font-black text-slate-200 uppercase leading-none tracking-tight">WESTERN RY</span>
        </div>
      )
    },
    {
      quote: "INCSMART's IoT platform gives us real-time visibility and helps us optimize our operations efficiently.",
      author: "Plant Manager",
      role: "UltraTech Cement",
      stars: 5,
      company: "UltraTech Cement",
      themeColor: "group-hover:border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
      logo: (
        <div className="flex flex-col items-center select-none leading-none">
          <span className="text-[9px] font-black italic tracking-tighter bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 px-1 py-0.5 rounded-sm">
            UltraTech
          </span>
          <span className="text-[6px] tracking-widest font-extrabold text-slate-300 mt-0.5">CEMENT</span>
        </div>
      )
    },
    {
      quote: "Their energy management system has helped us improve efficiency and ensure a safer environment.",
      author: "Engineering Head",
      role: "Global Hospital",
      stars: 5,
      company: "Global Hospital",
      themeColor: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
      logo: (
        <div className="flex items-center space-x-1 text-xs font-black tracking-tight text-white select-none">
          <span className="text-cyan-400 font-bold text-sm">+</span>
          <span className="text-[9px] tracking-wide text-slate-200 font-black">GLOBAL HOSPITALS</span>
        </div>
      )
    }
  ];

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            WHY CHOOSE INCSMART SECTION
            ======================================================== */}
        
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            WHY CHOOSE INCSMART
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 font-heading">
            Engineering Excellence That <br /> Delivers <span className="text-gradient-cyan-lime font-bold">Measurable Results</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            We combine deep industrial expertise, intelligent automation, and real-time analytics 
            to help organizations reduce costs, improve efficiency, and build smarter infrastructure.
          </p>
        </div>

        {/* Main Grid: Diagram vs Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Cloud Diagram Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px] rounded-3xl border border-white/5 bg-[#081325]/25 p-3 overflow-hidden group/diagram">
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              
              <div className="relative w-full h-full">
                <Image
                  src={cloudDiagram}
                  alt="INCSMART Cloud Architecture Network Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-center opacity-90 group-hover/diagram:opacity-100 group-hover/diagram:scale-[1.01] transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Differentiators List */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div 
                  key={diff.title} 
                  className="p-4 rounded-xl border border-white/5 bg-[#081325]/45 hover:border-white/10 hover:bg-[#0c1a2d]/50 transition-all duration-300 flex items-start space-x-4 group/item"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center ${diff.themeClass} transition-transform duration-300 group-hover/item:scale-105`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight group-hover/item:text-white transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            WHAT OUR CLIENTS SAY SECTION
            ======================================================== */}
        
        {/* Section Tagline */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            WHAT OUR CLIENTS SAY
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div 
              key={test.company}
              className={`p-6 rounded-2xl border border-white/5 bg-[#081325]/40 flex flex-col justify-between min-h-[260px] group transition-all duration-300 ${test.themeColor}`}
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 text-amber-400 mb-4 select-none">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 stroke-none" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Reviewer & Logo */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-[11px] font-bold text-white tracking-tight">{test.author}</h4>
                  <p className="text-[9px] text-slate-500 font-semibold mt-0.5">{test.role}</p>
                </div>
                <div className="flex-shrink-0 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-300">
                  {test.logo}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
