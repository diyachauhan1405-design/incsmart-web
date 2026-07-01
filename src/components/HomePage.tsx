"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Factory, 
  Building2, 
  Train, 
  Hospital, 
  Coffee, 
  Sun, 
  GraduationCap, 
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Cpu,
  Network,
  Zap,
  Flame,
  Globe,
  Play,
  Shield,
  Layers,
  Activity,
  Tv
} from "lucide-react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

// Mockup Data
const brandLogos = [
  { name: "PVR INOX", type: "text", text: "PVR INOX", desc: "HVAC Energy Optimization" },
  { name: "INDIAN RAILWAYS", type: "text", text: "INDIAN RAILWAYS", desc: "Remote Infrastructure Monitoring" },
  { name: "UltraTech Cement", type: "text", text: "UltraTech Cement", desc: "Industrial Automation" },
  { name: "MAX Healthcare", type: "text", text: "MAX Healthcare", desc: "Building Management System" },
  { name: "TAJ", type: "text", text: "TAJ Hotels & Resorts", desc: "Smart Energy Management" },
  { name: "adani", type: "text", text: "adani Energy Solutions", desc: "Grid Integration" }
];

const expertiseList = [
  {
    title: "Industrial IoT Solutions",
    description: "Connect devices, systems, and data to drive real-time intelligence and automation.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.15)"
  },
  {
    title: "HVAC Optimization",
    description: "Optimize HVAC performance, reduce energy consumption, and improve indoor comfort.",
    icon: Layers,
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(6,182,212,0.15)"
  },
  {
    title: "Energy Management",
    description: "Monitor, control, and optimize energy usage across facilities to reduce costs.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.15)"
  },
  {
    title: "Building Management",
    description: "Smartly manage assets, systems, and operations from a unified platform.",
    icon: Building2,
    color: "from-emerald-500 to-green-500",
    glow: "rgba(16,185,129,0.15)"
  },
  {
    title: "Fire Monitoring",
    description: "AI-powered early detection, real-time alerts, and proactive fire safety management.",
    icon: Flame,
    color: "from-rose-500 to-red-500",
    glow: "rgba(244,63,94,0.15)"
  }
];

const industriesList = [
  { title: "Manufacturing", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80" },
  { title: "Railways", imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=300&q=80" },
  { title: "Hospitals", imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80" },
  { title: "Commercial Buildings", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80" },
  { title: "Hotels", imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80" },
  { title: "Solar Plants", imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=300&q=80" },
  { title: "Education", imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300&q=80" },
  { title: "Retail & Malls", imageUrl: "https://images.unsplash.com/photo-1567401893930-7bc312677226?auto=format&fit=crop&w=300&q=80" }
];

const platformSteps = [
  { name: "Smart Sensors & Devices", icon: Cpu },
  { name: "Edge Gateway & Connectivity", icon: Network },
  { name: "Cloud Infrastructure", icon: Globe },
  { name: "AI & Analytics Engine", icon: Activity },
  { name: "Unified Dashboard & Insights", icon: Tv },
  { name: "Automation & Control", icon: Zap }
];

const projectCards = [
  {
    title: "PVR INOX",
    category: "PVR INOX",
    description: "HVAC Energy Optimization",
    metric: "20% Energy Savings",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Western Railway",
    category: "Railways",
    description: "Remote Infrastructure Monitoring",
    metric: "24×7 Monitoring",
    imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "UltraTech Cement",
    category: "UltraTech Cement",
    description: "Industrial Automation",
    metric: "15% Operational Efficiency",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "MAX Healthcare",
    category: "MAX Healthcare",
    description: "Building Management System",
    metric: "Enhanced Comfort",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07111D] text-white flex flex-col overflow-hidden">
      {/* Navigation Header */}
      <Header isLoggedIn={true} />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection isLoggedIn={true} />

        {/* 1. Trusted by Industry Leaders */}
        <section className="py-10 border-y border-white/5 bg-[#081325]/45 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-85">
              {brandLogos.map((brand, i) => (
                <div key={i} className="text-center group cursor-pointer transition-all duration-300">
                  {brand.name === "INDIAN RAILWAYS" ? (
                    <div className="flex items-center space-x-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <div className="w-7 h-7 rounded-full border border-blue-500/40 flex items-center justify-center bg-blue-500/10">
                        <span className="text-[7px] font-bold text-blue-400">IR</span>
                      </div>
                      <span className="text-xs font-black tracking-wider text-slate-400 group-hover:text-blue-400">INDIAN RAILWAYS</span>
                    </div>
                  ) : brand.name === "MAX Healthcare" ? (
                    <div className="flex items-center space-x-1.5 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <span className="text-emerald-400 text-sm font-bold">+</span>
                      <span className="text-xs font-black tracking-tight text-slate-400 group-hover:text-white">MAX HEALTHCARE</span>
                    </div>
                  ) : brand.name === "adani" ? (
                    <div className="flex items-baseline grayscale group-hover:grayscale-0 transition-all duration-300">
                      <span className="text-xs font-black tracking-tight text-slate-400 group-hover:text-amber-400">adani</span>
                      <span className="text-[7px] text-slate-500 ml-1">Energy</span>
                    </div>
                  ) : brand.name === "TAJ" ? (
                    <span className="text-xs font-serif font-bold tracking-widest text-slate-400 group-hover:text-white">TAJ</span>
                  ) : brand.name === "UltraTech Cement" ? (
                    <div className="flex flex-col items-center leading-none grayscale group-hover:grayscale-0 transition-all duration-300">
                      <span className="text-xs font-black tracking-tighter text-slate-300 group-hover:text-yellow-500">UltraTech</span>
                      <span className="text-[6px] tracking-[0.2em] text-slate-500 uppercase mt-0.5">Cement</span>
                    </div>
                  ) : (
                    <span className="text-xs font-black tracking-wider text-slate-400 group-hover:text-blue-500">PVR INOX</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Our Expertise */}
        <section className="py-16 md:py-20 relative bg-gradient-to-b from-[#07111D] to-[#081325]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B82F6] uppercase">Our Expertise</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                Smart Capabilities for Modern Infrastructure
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              {expertiseList.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <div 
                    key={i} 
                    className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/35 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                    style={{ boxShadow: `0 10px 30px -10px ${exp.glow}` }}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center border border-white/10 mb-4 group-hover:border-blue-500/30 group-hover:scale-105 transition-all">
                        <Icon className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    <div className="flex justify-end pt-4">
                      <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Industries We Empower */}
        <section className="py-16 md:py-20 bg-[#081325]/25 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B82F6] uppercase">Industries We Empower</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                Tailored IoT Architectures Across Sectors
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {industriesList.map((ind, i) => (
                <div 
                  key={i} 
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={ind.imageUrl}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 12vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex flex-col justify-end p-3.5">
                    <h4 className="text-xs font-bold text-white tracking-wide leading-tight group-hover:text-blue-400 transition-colors">
                      {ind.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Technology Platform */}
        <section className="py-16 md:py-20 relative bg-gradient-to-b from-[#081325] to-[#07111D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B82F6] uppercase">Our Technology Platform</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                End-to-End Smart Telemetry Flow
              </h2>
            </div>

            {/* Platform Flowchart Row */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
              {platformSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center relative group">
                    {/* Circle icon container */}
                    <div className="w-16 h-16 rounded-full bg-blue-500/5 border border-blue-500/20 flex items-center justify-center relative z-20 group-hover:border-blue-500/60 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 cursor-pointer">
                      {i === 3 ? (
                        <span className="text-blue-400 font-extrabold text-lg group-hover:text-white transition-colors">A</span>
                      ) : (
                        <Icon className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    {/* Step number badge */}
                    <span className="text-[9px] font-bold text-[#3B82F6] mt-4 uppercase tracking-widest">
                      Step 0{i + 1}
                    </span>
                    {/* Name */}
                    <h4 className="text-xs font-bold text-slate-200 mt-1 max-w-[120px] leading-relaxed group-hover:text-white transition-colors">
                      {step.name}
                    </h4>

                    {/* Connecting arrows between items */}
                    {i < 5 && (
                      <div className="hidden md:block absolute top-8 left-[70%] w-[60%] h-[2px] bg-gradient-to-r from-blue-500/25 to-blue-500/5 z-0 pointer-events-none">
                        <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-blue-500/35 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Featured Projects & Testimonials Split Grid */}
        <section className="py-16 md:py-20 border-t border-white/5 bg-[#081325]/35 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Featured Projects */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B82F6] uppercase">Featured Projects</span>
                    <h3 className="text-xl font-bold text-white mt-1 font-heading">Measurable Results</h3>
                  </div>
                  <Link href="#all-projects" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer">
                    <span>View All Projects</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectCards.map((proj, i) => (
                    <div 
                      key={i} 
                      className="bg-[#0b1a2d]/65 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="relative h-44 w-full">
                        <Image
                          src={proj.imageUrl}
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#081325]/75 border border-white/10 rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-slate-300 select-none">
                          {proj.category}
                        </div>
                      </div>
                      <div className="p-4 flex flex-col space-y-1.5">
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {proj.description}
                        </p>
                        <div className="text-xs font-extrabold text-emerald-400 pt-2 border-t border-white/5">
                          {proj.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Client Testimonials */}
              <div className="lg:col-span-4 flex flex-col space-y-6">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B82F6] uppercase">What Our Clients Say</span>
                
                <div className="bg-[#0b1a2d]/75 border border-white/5 rounded-3xl p-8 relative shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between">
                  {/* Glowing background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 text-emerald-400 fill-emerald-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm leading-relaxed text-slate-300 font-medium italic">
                      "INCSMART's IoT platform has transformed the way we manage energy across our properties. The results are measurable and impactful."
                    </blockquote>
                  </div>

                  {/* Author details & Carousel Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-8">
                    <div>
                      <h4 className="text-xs font-bold text-white">Facility Head</h4>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">PVR INOX</p>
                    </div>
                    {/* Carousel Arrows */}
                    <div className="flex items-center space-x-2">
                      <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500/35 hover:bg-white/5 active:scale-95 transition-all cursor-pointer">
                        <ChevronLeft className="h-4 w-4 text-slate-400" />
                      </button>
                      <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500/35 hover:bg-white/5 active:scale-95 transition-all cursor-pointer">
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Ready to Transform Your Infrastructure? */}
        <section className="py-16 md:py-20 relative bg-[#07111D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-[#0b1a2d] to-[#081325] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col space-y-4 max-w-2xl text-left">
                  {/* Badge Row */}
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-[2px] bg-blue-500"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#3B82F6] uppercase">Get Started</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    Ready to Transform Your Infrastructure?
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Partner with INCSMART and unlock the full potential of intelligent automation, 
                    real-time monitoring, and energy optimization.
                  </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <Link
                    href="#consultation"
                    className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-lg px-8 py-4 text-xs font-bold transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule a Free Consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
