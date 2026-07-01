"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Network, 
  Wind, 
  Zap, 
  Building2, 
  Flame, 
  ArrowRight
} from "lucide-react";
import solutionsDiagram from "../../public/solutions-diagram.png";

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  highlightText?: string;
  learnMoreUrl: string;
  icon: React.ComponentType<any>;
  iconBgColor: string;
  iconColor: string;
  borderColor: string;
  glowColor: string;
  hotspotCoords: { top: string; left: string };
  hotspotName: string;
}

export default function SolutionsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const solutions: SolutionItem[] = [
    {
      id: "iot",
      title: "Industrial IoT & Automation",
      description: "Connect machines, sensors, and industrial assets into one intelligent platform for real-time monitoring and control.",
      learnMoreUrl: "#iot",
      icon: Network,
      iconBgColor: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-400",
      borderColor: "hover:border-blue-500/30",
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.15)] border-blue-500/40",
      hotspotCoords: { top: "30%", left: "30%" },
      hotspotName: "IoT"
    },
    {
      id: "hvac",
      title: "HVAC Optimization",
      description: "Improve HVAC performance with smart automation and reduce energy consumption by up to 20%.",
      highlightText: "20%",
      learnMoreUrl: "#hvac",
      icon: Wind,
      iconBgColor: "bg-cyan-500/10 border-cyan-500/20",
      iconColor: "text-cyan-400",
      borderColor: "hover:border-cyan-500/30",
      glowColor: "shadow-[0_0_20px_rgba(6,182,212,0.15)] border-cyan-500/40",
      hotspotCoords: { top: "22%", left: "70%" },
      hotspotName: "HVAC"
    },
    {
      id: "energy",
      title: "Energy Management",
      description: "Track power usage, monitor equipment, and optimize energy efficiency through intelligent analytics.",
      learnMoreUrl: "#energy",
      icon: Zap,
      iconBgColor: "bg-emerald-500/10 border-emerald-500/20",
      iconColor: "text-emerald-400",
      borderColor: "hover:border-emerald-500/30",
      glowColor: "shadow-[0_0_20px_rgba(16,185,129,0.15)] border-emerald-500/40",
      hotspotCoords: { top: "67%", left: "70%" },
      hotspotName: "ENERGY"
    },
    {
      id: "bms",
      title: "Building Management System",
      description: "Manage lighting, occupancy, HVAC, and electrical systems from a single centralized dashboard.",
      learnMoreUrl: "#bms",
      icon: Building2,
      iconBgColor: "bg-indigo-500/10 border-indigo-500/20",
      iconColor: "text-indigo-400",
      borderColor: "hover:border-indigo-500/30",
      glowColor: "shadow-[0_0_20px_rgba(99,102,241,0.15)] border-indigo-500/40",
      hotspotCoords: { top: "37%", left: "70%" },
      hotspotName: "BMS"
    },
    {
      id: "fire",
      title: "Hydrant & Sprinkler Monitoring",
      description: "Monitor pipeline pressure, pump health, and fire safety infrastructure with continuous IoT supervision.",
      learnMoreUrl: "#fire",
      icon: Flame,
      iconBgColor: "bg-rose-500/10 border-rose-500/20",
      iconColor: "text-rose-400",
      borderColor: "hover:border-rose-500/30",
      glowColor: "shadow-[0_0_20px_rgba(244,63,94,0.15)] border-rose-500/40",
      hotspotCoords: { top: "62%", left: "30%" },
      hotspotName: "FIRE SAFETY"
    }
  ];

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Dynamic background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Mobile & layout reference alignment) */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            OUR SOLUTIONS
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Description & Isometric Graphic */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 font-heading">
                Intelligent Solutions for <br />
                <span className="text-gradient-cyan-lime font-bold">Smarter</span> Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                From Industrial IoT and HVAC optimization to energy management and smart building automation,{" "}
                <span className="text-[#06B6D4] font-semibold">INCASMART</span> delivers connected solutions that 
                improve efficiency, reduce operating costs, and provide real-time visibility.
              </p>
            </div>

            {/* Isometric Building Graphic Container */}
            <div className="relative w-full aspect-[7/4] rounded-2xl border border-white/5 bg-[#081325]/30 overflow-hidden group/graphic mt-4">
              <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
              
              {/* Graphic Asset Render */}
              <div className="relative w-full h-full">
                <Image
                  src={solutionsDiagram}
                  alt="Smarter Infrastructure solutions overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover opacity-85 group-hover/graphic:opacity-100 transition-opacity duration-500"
                />

                {/* Hotspots Overlay */}
                {solutions.map((sol) => {
                  const isActive = activeId === sol.id;
                  const Icon = sol.icon;
                  return (
                    <div
                      key={sol.id}
                      style={{ top: sol.hotspotCoords.top, left: sol.hotspotCoords.left }}
                      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center group/hotspot transition-all duration-300"
                      onMouseEnter={() => setActiveId(sol.id)}
                      onMouseLeave={() => setActiveId(null)}
                    >
                      {/* Connection Line & Floating Label (Only visible on hover/active) */}
                      <div className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-80'}`}>
                        {/* Icon/Circle Button */}
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#081325] border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]' 
                            : 'bg-[#081325]/90 border-white/20 hover:border-white/50'
                        }`}>
                          <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        </div>
                        
                        {/* Label Badge */}
                        <div className={`mt-1.5 px-2 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase whitespace-nowrap border transition-all duration-300 ${
                          isActive
                            ? 'bg-white text-[#07111D] border-white'
                            : 'bg-[#081325]/95 text-slate-400 border-white/10'
                        }`}>
                          {sol.hotspotName}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Solution Card Stack */}
          <div className="lg:col-span-5 flex flex-col space-y-4 w-full">
            {solutions.map((sol) => {
              const isActive = activeId === sol.id;
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className={`p-5 rounded-2xl border bg-[#081325]/45 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? `${sol.glowColor} translate-x-1` 
                      : `border-white/5 ${sol.borderColor}`
                  }`}
                  onMouseEnter={() => setActiveId(sol.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Card Icon Wrapper */}
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${sol.iconBgColor} ${sol.iconColor}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    {/* Card Content */}
                    <div className="flex-grow flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm sm:text-base font-bold transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-200'}`}>
                          {sol.title}
                        </h3>
                      </div>
                      
                      {/* Description with Highlight support */}
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {sol.highlightText ? (
                          <>
                            {sol.description.split(sol.highlightText)[0]}
                            <span className="text-brand-lime font-bold">{sol.highlightText}</span>
                            {sol.description.split(sol.highlightText)[1]}
                          </>
                        ) : (
                          sol.description
                        )}
                      </p>

                      {/* Learn More Button */}
                      <Link 
                        href={sol.learnMoreUrl}
                        className={`inline-flex items-center text-[10px] font-bold tracking-wider uppercase mt-3 transition-all duration-300 group/link ${
                          isActive ? 'text-[#06B6D4]' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="mr-1">Learn More</span>
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
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
