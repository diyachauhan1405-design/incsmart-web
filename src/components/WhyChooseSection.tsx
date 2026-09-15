"use client";

import Image from "next/image";
import { 
  Zap, 
  Monitor, 
  Settings, 
  LayoutGrid, 
  ShieldCheck, 
  MapPin
} from "lucide-react";
import cloudDiagram from "../../public/cloud-diagram.png";

interface DifferentiatorItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  themeClass: string;
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

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            WHY CHOOSE IncSmart SECTION
            ======================================================== */}
        
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            WHY CHOOSE IncSmart
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
                  alt="IncSmart Cloud Architecture Network Map"
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

      </div>
    </section>
  );
}
