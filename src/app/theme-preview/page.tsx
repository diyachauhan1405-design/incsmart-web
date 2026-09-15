"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Cpu, 
  Building2, 
  Wind, 
  Flame, 
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThemePreviewPage() {
  const [activeTab, setActiveTab] = useState<"alternative" | "current">("alternative");

  return (
    <div className="min-h-screen bg-[#060C16] text-[#F8FAFC] flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        {/* TOP NOTICE BANNER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-gradient-to-r from-purple-950/40 via-[#0B1528] to-cyan-950/40 border border-purple-500/30 rounded-2xl p-4 sm:p-6 shadow-[0_10px_40px_rgba(139,92,246,0.12)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Proposal for Client Approval
                  </span>
                  <span className="text-xs text-slate-400">• Sections 3 & 4 of Brief</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-white font-heading">
                  Alternative Visual & Color System Sample
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Engineered to eliminate monochromatic blue/green fatigue by introducing deep navy/charcoal, electric cyan, violet/purple accents, and reserving green exclusively for verified energy & sustainability metrics.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center bg-[#040810] p-1.5 rounded-xl border border-white/10 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab("alternative")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "alternative"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Alternative Sample (Proposed)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("current")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "current"
                      ? "bg-gradient-to-r from-brand-lime to-brand-cyan text-slate-900 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Current Monochromatic
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PALETTE MATRIX BREAKDOWN */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">
                Color Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5 font-heading">
                Multi-Accent Systematic Token Hierarchy
              </h2>
            </div>
            <span className="text-xs text-slate-400 hidden sm:block">
              High contrast • Professional enterprise aesthetic
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {/* Swatch 1: Charcoal Base */}
            <div className="bg-[#09101D] border border-white/10 rounded-xl p-3.5 space-y-2.5 hover:border-slate-500 transition-colors">
              <div className="h-10 rounded-lg bg-[#060C16] border border-white/10 shadow-inner flex items-center justify-center text-[10px] font-mono text-slate-400">
                #060C16
              </div>
              <div>
                <p className="text-xs font-bold text-white">Deep Charcoal</p>
                <p className="text-[10px] text-slate-400 leading-tight">Base Canvas & Background</p>
              </div>
            </div>

            {/* Swatch 2: Electric Cyan */}
            <div className="bg-[#09101D] border border-cyan-500/20 rounded-xl p-3.5 space-y-2.5 hover:border-cyan-500/40 transition-colors">
              <div className="h-10 rounded-lg bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center justify-center text-[10px] font-mono font-bold text-slate-950">
                #00E5FF
              </div>
              <div>
                <p className="text-xs font-bold text-cyan-300">Electric Cyan</p>
                <p className="text-[10px] text-slate-400 leading-tight">Primary Accent • Data Streams</p>
              </div>
            </div>

            {/* Swatch 3: Royal Violet */}
            <div className="bg-[#09101D] border border-purple-500/20 rounded-xl p-3.5 space-y-2.5 hover:border-purple-500/40 transition-colors">
              <div className="h-10 rounded-lg bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.4)] flex items-center justify-center text-[10px] font-mono font-bold text-white">
                #8B5CF6
              </div>
              <div>
                <p className="text-xs font-bold text-purple-300">Royal Violet</p>
                <p className="text-[10px] text-slate-400 leading-tight">Secondary Accent • AI / Cloud</p>
              </div>
            </div>

            {/* Swatch 4: Energy Green */}
            <div className="bg-[#09101D] border border-emerald-500/20 rounded-xl p-3.5 space-y-2.5 hover:border-emerald-500/40 transition-colors">
              <div className="h-10 rounded-lg bg-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center text-[10px] font-mono font-bold text-slate-950">
                #10B981
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-300">Energy Emerald</p>
                <p className="text-[10px] text-slate-400 leading-tight">Strictly Energy Savings & ROI</p>
              </div>
            </div>

            {/* Swatch 5: Solar Amber */}
            <div className="bg-[#09101D] border border-amber-500/20 rounded-xl p-3.5 space-y-2.5 hover:border-amber-500/40 transition-colors">
              <div className="h-10 rounded-lg bg-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center justify-center text-[10px] font-mono font-bold text-slate-950">
                #F59E0B
              </div>
              <div>
                <p className="text-xs font-bold text-amber-300">Solar Amber</p>
                <p className="text-[10px] text-slate-400 leading-tight">Solar Plants & Peak Demand</p>
              </div>
            </div>

            {/* Swatch 6: Pure White / Off-white */}
            <div className="bg-[#09101D] border border-white/10 rounded-xl p-3.5 space-y-2.5 hover:border-white/30 transition-colors">
              <div className="h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center text-[10px] font-mono font-bold text-slate-900">
                #F8FAFC
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100">Crisp Typography</p>
                <p className="text-[10px] text-slate-400 leading-tight">Maximum Legibility</p>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE PREVIEW COMPONENT 1: HERO SECTION SAMPLE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
                Sample A • Hero Banner Appearance
              </span>
            </div>
            <span className="text-[11px] text-purple-300 font-medium bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
              High Visual Contrast Mode
            </span>
          </div>

          <div className={`rounded-3xl border transition-all duration-500 p-6 sm:p-10 relative overflow-hidden ${
            activeTab === "alternative"
              ? "bg-[#091120] border-purple-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              : "bg-[#07111D] border-brand-cyan/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          }`}>
            {/* Background Glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border bg-white/5 border-white/10 text-slate-300">
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "alternative" ? "bg-cyan-400 shadow-[0_0_8px_#00E5FF]" : "bg-brand-lime"}`} />
                  <span>Next-Gen Industrial IoT & Automation</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] font-heading">
                  Intelligent Solutions. <br />
                  {activeTab === "alternative" ? (
                    <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                      Smarter Infrastructure.
                    </span>
                  ) : (
                    <span className="text-gradient-cyan-lime">
                      Smarter Infrastructure.
                    </span>
                  )}
                  <br />
                  Stronger Future.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                  IncSmart connects, monitors, and automates mission-critical facilities across India with proprietary IoT hardware, edge computing, and unified cloud intelligence.
                </p>

                {/* Buttons with new contrast styling */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    className={`px-6 py-3 rounded-full text-xs font-bold transition-all shadow-lg flex items-center gap-2 cursor-pointer ${
                      activeTab === "alternative"
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:brightness-110 shadow-cyan-500/25"
                        : "bg-gradient-to-r from-brand-lime to-brand-cyan text-slate-900 shadow-brand-cyan/20"
                    }`}
                  >
                    <span>Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    className="px-6 py-3 rounded-full text-xs font-semibold text-white border border-white/15 hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <span>Explore Solutions</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Telemetry Display */}
              <div className="lg:col-span-6">
                <div className="bg-[#050B14]/90 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full animate-pulse ${
                        activeTab === "alternative" ? "bg-cyan-400 shadow-[0_0_8px_#00E5FF]" : "bg-brand-lime"
                      }`} />
                      <span className="text-[10px] font-extrabold tracking-wider text-slate-300 uppercase">
                        Active Telemetry • Live Operations
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                      NOC GATEWAY #402
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Metric 1: Energy Savings (Green reserved here) */}
                    <div className="bg-[#0A1322] border border-emerald-500/30 rounded-xl p-3 space-y-1">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        Energy Saved
                      </span>
                      <div className="text-2xl font-black text-emerald-400 font-heading">
                        20.4%
                      </div>
                      <span className="text-[9px] text-slate-400 block">Verified vs Baseline</span>
                    </div>

                    {/* Metric 2: Power Demand (Electric Cyan) */}
                    <div className={`rounded-xl p-3 space-y-1 ${
                      activeTab === "alternative"
                        ? "bg-[#0A1322] border border-cyan-500/30"
                        : "bg-[#0A1322] border border-brand-lime/20"
                    }`}>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        activeTab === "alternative" ? "text-cyan-400" : "text-brand-lime"
                      }`}>
                        Active Power
                      </span>
                      <div className={`text-2xl font-black font-heading ${
                        activeTab === "alternative" ? "text-cyan-300" : "text-brand-lime"
                      }`}>
                        1,420 <span className="text-xs text-slate-400 font-normal">kW</span>
                      </div>
                      <span className="text-[9px] text-slate-400 block">Substation Load</span>
                    </div>

                    {/* Metric 3: AI Anomaly Score (Royal Violet) */}
                    <div className={`rounded-xl p-3 space-y-1 ${
                      activeTab === "alternative"
                        ? "bg-[#0A1322] border border-purple-500/30"
                        : "bg-[#0A1322] border border-brand-cyan/20"
                    }`}>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        activeTab === "alternative" ? "text-purple-300" : "text-brand-cyan"
                      }`}>
                        AI Predictive Index
                      </span>
                      <div className={`text-2xl font-black font-heading ${
                        activeTab === "alternative" ? "text-purple-300" : "text-brand-cyan"
                      }`}>
                        99.2%
                      </div>
                      <span className="text-[9px] text-slate-400 block">System Reliability</span>
                    </div>

                    {/* Metric 4: Solar Plant / Grid Integration (Amber) */}
                    <div className={`rounded-xl p-3 space-y-1 ${
                      activeTab === "alternative"
                        ? "bg-[#0A1322] border border-amber-500/30"
                        : "bg-[#0A1322] border border-white/10"
                    }`}>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        activeTab === "alternative" ? "text-amber-400" : "text-slate-400"
                      }`}>
                        Solar Generation
                      </span>
                      <div className={`text-2xl font-black font-heading ${
                        activeTab === "alternative" ? "text-amber-300" : "text-white"
                      }`}>
                        380 <span className="text-xs text-slate-400 font-normal">kWh</span>
                      </div>
                      <span className="text-[9px] text-slate-400 block">Clean Energy Feed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE PREVIEW COMPONENT 2: SOLUTIONS CARDS CONTRAST */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase">
              Sample B • Category Differentiated Solutions Cards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
              No More Identical-Looking Solution Cards
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1 leading-relaxed">
              In the alternative visual system, each solution domain has a dedicated, professional accent hue so visitors immediately recognize differences between automation, energy, HVAC, solar, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Industrial IoT (Electric Cyan Accent) */}
            <div className="bg-[#091120] border border-cyan-500/30 hover:border-cyan-400 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    Connectivity
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                    Industrial IoT & Automation
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Edge gateways and PLC integration delivering millisecond machine visibility and automated control.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-cyan-300">
                <span>Explore IoT</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: HVAC Optimization (Emerald Savings Green) */}
            <div className="bg-[#091120] border border-emerald-500/30 hover:border-emerald-400 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Up to 15% Savings
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                    HVAC Optimization
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    AI-driven chiller modulation and temperature balancing tested across major commercial multiplexes.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-emerald-300">
                <span>Explore HVAC</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Building Management (Royal Violet Accent) */}
            <div className="bg-[#091120] border border-purple-500/30 hover:border-purple-400 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                    Smart Buildings
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                    Building Management (BMS)
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Unified multi-tenant monitoring for lighting, ventilation, elevators, and sub-metering.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-purple-300">
                <span>Explore BMS</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Fire & Hydrant (Coral / Safety Red Accent) */}
            <div className="bg-[#091120] border border-rose-500/30 hover:border-rose-400 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(244,63,94,0.15)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    Life Safety
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                    Fire & Hydrant Monitoring
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Real-time pressure drop alarms and flow surveillance ensuring 100% regulatory fire compliance.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-rose-300">
                <span>Explore Safety</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX TABLE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-[#070F1C] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-heading mb-4">
              Side-by-Side Evaluation: Current vs. Proposed Alternative
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Design Attribute</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider text-slate-300">Current Theme</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider text-cyan-400">Proposed Alternative Sample</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider text-purple-400">Benefit to IncSmart</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Background Tone</td>
                    <td className="py-3 px-4">Dark Blue (`#07111D`)</td>
                    <td className="py-3 px-4 text-cyan-300">Deep Navy / Charcoal (`#060C16`)</td>
                    <td className="py-3 px-4 text-slate-400">Higher visual depth and richer card contrast</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Accent Structure</td>
                    <td className="py-3 px-4">Cyan & Lime gradients on every section</td>
                    <td className="py-3 px-4 text-cyan-300">Electric Cyan (Primary) + Violet/Purple (Secondary)</td>
                    <td className="py-3 px-4 text-slate-400">Breaks visual monotony, feels like a modern IoT platform</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Use of Green</td>
                    <td className="py-3 px-4">Used everywhere across buttons, text, and cards</td>
                    <td className="py-3 px-4 text-emerald-400">Used strictly for Energy Savings & Carbon Reduction</td>
                    <td className="py-3 px-4 text-slate-400">Green carries genuine semantic meaning for energy ROI</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Card & Icon Differentiation</td>
                    <td className="py-3 px-4">Monochromatic blue/cyan boxes</td>
                    <td className="py-3 px-4 text-purple-300">Category-colored badges (Cyan, Violet, Amber, Rose, Emerald)</td>
                    <td className="py-3 px-4 text-slate-400">Visitors can scan and distinguish capabilities instantly</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Brand Impression</td>
                    <td className="py-3 px-4">Clean, but slightly uniform</td>
                    <td className="py-3 px-4 text-cyan-300">Tier-1 enterprise technology partner (clean & vibrant)</td>
                    <td className="py-3 px-4 text-slate-400">Aligns with leaders like Siemens, Honeywell & Schneider</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* DECISION & NEXT STEPS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-950/40 via-[#0B1528] to-cyan-950/40 border border-purple-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Ready to Review with Your Client?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              This sample is live at <code className="bg-white/10 px-2 py-0.5 rounded text-cyan-300 font-mono">/theme-preview</code>. You can present this URL to the client for direct feedback. Once approved, we will apply this refined multi-accent system across all sections.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-xs font-bold text-white border border-white/20 hover:bg-white/10 transition-all cursor-pointer"
              >
                ← Back to Main Homepage
              </Link>
              <a
                href="https://wa.me/919711888111?text=Hello%20IncSmart%20Team%2C%20I%20have%20reviewed%20the%20alternative%20theme%20sample%20and%20would%20like%20to%20share%20our%20feedback."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 hover:opacity-95 transition-all shadow-lg cursor-pointer"
              >
                Share Feedback via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
