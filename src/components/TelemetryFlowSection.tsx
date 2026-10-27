"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Cpu, 
  Network, 
  Globe, 
  Activity, 
  Tv, 
  Zap, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface StepItem {
  number: string;
  name: string;
  role: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: StepItem[] = [
  {
    number: "01",
    name: "Smart Sensors & Devices",
    role: "Field Sensing",
    desc: "Energy meters, temperature, pressure & vibration nodes capturing real-time field data.",
    icon: Cpu,
  },
  {
    number: "02",
    name: "Edge Gateway & Connectivity",
    role: "Edge Processing",
    desc: "Ruggedized industrial gateways aggregating BACnet, Modbus & MQTT protocols locally.",
    icon: Network,
  },
  {
    number: "03",
    name: "Cloud Infrastructure",
    role: "Time-Series Ingest",
    desc: "Enterprise-grade secure cloud with 99.9% uptime SLA and instant telemetry ingestion.",
    icon: Globe,
  },
  {
    number: "04",
    name: "AI & Analytics Engine",
    role: "Dynamic Intelligence",
    desc: "Continuous load balancing algorithms, wet-bulb enthalpy tuning & anomaly detection.",
    icon: Activity,
  },
  {
    number: "05",
    name: "Unified Dashboard & Insights",
    role: "Fleet Visibility",
    desc: "Centralized multi-site visibility, fleet SEC benchmarks & instant mobile notifications.",
    icon: Tv,
  },
  {
    number: "06",
    name: "Automation & Control",
    role: "Closed-Loop Tuning",
    desc: "Autonomous closed-loop setpoint tuning, chiller modulation & scheduled interlocking.",
    icon: Zap,
  },
];

export default function TelemetryFlowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Scroll listener to calculate progress smoothly through the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Starts increasing as the section enters upper 75% of viewport
      const startOffset = windowHeight * 0.75;
      const endOffset = windowHeight * 0.25;
      const totalDistance = rect.height + (startOffset - endOffset);
      const scrolledDistance = startOffset - rect.top;

      const rawProgress = scrolledDistance / totalDistance;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current active step (0 to 5)
  // Step thresholds along the 6-step progress
  const stepThresholds = [0.05, 0.22, 0.40, 0.58, 0.76, 0.92];
  
  // Calculate which step is actively highlighted
  const activeStep = selectedIndex !== null 
    ? selectedIndex 
    : hoveredIndex !== null 
      ? hoveredIndex 
      : Math.min(5, Math.max(0, stepThresholds.findLastIndex(t => scrollProgress >= t)));

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-28 relative bg-gradient-to-b from-[#07111D] via-[#081528] to-[#07111D] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>OUR TECHNOLOGY PLATFORM</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Smart Telemetry Flow</span>
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-400 mt-3 leading-relaxed max-w-2xl mx-auto">
            Scroll down to watch telemetry flow in real time from physical sensors and edge controllers to our AI engine, cloud analytics, and automated setpoint controls.
          </p>

          {/* Interactive Status Indicator */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[11px] text-cyan-300 font-semibold">
              Live Stage: Step 0{activeStep + 1} — {steps[activeStep].role}
            </span>
          </div>
        </div>

        {/* ========================================================
            DESKTOP HORIZONTAL ANIMATED FLOW (lg and above)
            ======================================================== */}
        <div className="hidden lg:block relative mb-12">
          {/* Base Background Track (passes through vertical center of circles at top-8) */}
          <div className="absolute top-8 left-[8.33%] w-[83.33%] h-[3px] bg-slate-800/80 rounded-full z-0" />

          {/* Static Subtle Arrow Markers on Base Track */}
          {[0, 1, 2, 3, 4].map((idx) => {
            const leftPercent = 8.33 + (idx + 0.5) * (83.33 / 5);
            return (
              <div 
                key={idx}
                className="absolute top-8 -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none text-slate-700"
                style={{ left: `${leftPercent}%` }}
              >
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </div>
            );
          })}

          {/* Animated Filled Progress Line (widens as user scrolls) */}
          <div 
            className="absolute top-8 left-[8.33%] h-[3px] rounded-full z-0 bg-gradient-to-r from-brand-blue via-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(6,182,212,0.85)] transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, scrollProgress * 100) * 0.8333}%` }}
          />

          {/* Continuous Glowing Energy Pulse traversing the line */}
          <div 
            className="absolute top-8 left-[8.33%] h-[3px] rounded-full z-0 pointer-events-none opacity-80"
            style={{ 
              width: `${Math.min(100, scrollProgress * 100) * 0.8333}%`,
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 85%, #22d3ee 100%)",
              filter: "drop-shadow(0 0 8px #38bdf8)"
            }}
          />

          {/* Traveling Glowing Photon / Particle Beacon at tip */}
          {scrollProgress > 0.03 && (
            <div 
              className="absolute top-8 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#22d3ee,0_0_30px_#06b6d4] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none transition-all duration-300"
              style={{ left: `calc(8.33% + ${Math.min(100, scrollProgress * 100) * 0.8333}%)` }}
            >
              <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-80" />
            </div>
          )}

          {/* 6 Step Nodes Grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isReached = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div 
                  key={step.number}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(idx === selectedIndex ? null : idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Circle Node */}
                  <div className="relative">
                    {/* Ripple aura when active */}
                    {isCurrent && (
                      <span className="absolute -inset-2 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
                    )}

                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 relative z-10 ${
                        isCurrent
                          ? "bg-[#0b223d] border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.7)] scale-110 ring-4 ring-cyan-500/20"
                          : isReached
                            ? "bg-[#091a2e] border-2 border-cyan-500/70 shadow-[0_0_18px_rgba(6,182,212,0.35)] scale-100"
                            : "bg-[#081325]/80 border border-white/10 opacity-60 scale-95 group-hover:opacity-90 group-hover:border-white/30"
                      }`}
                    >
                      <Icon 
                        className={`h-6 w-6 transition-all duration-300 ${
                          isCurrent
                            ? "text-cyan-300 scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                            : isReached
                              ? "text-cyan-400"
                              : "text-slate-500 group-hover:text-slate-300"
                        }`} 
                      />

                      {/* Small Active Pip */}
                      {isReached && (
                        <span className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#07111D]" />
                      )}
                    </div>
                  </div>

                  {/* Step Label */}
                  <span 
                    className={`text-[10px] font-mono font-bold mt-4 uppercase tracking-widest transition-colors duration-300 ${
                      isCurrent 
                        ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]" 
                        : isReached 
                          ? "text-cyan-400/80" 
                          : "text-slate-500"
                    }`}
                  >
                    Step {step.number}
                  </span>

                  {/* Step Name */}
                  <h4 
                    className={`text-xs font-bold mt-1 max-w-[130px] leading-snug transition-colors duration-300 ${
                      isCurrent 
                        ? "text-white scale-105" 
                        : isReached 
                          ? "text-slate-200" 
                          : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {step.name}
                  </h4>

                  {/* Step Role Badge */}
                  <span 
                    className={`mt-2 text-[9px] px-2 py-0.5 rounded-full border transition-all duration-300 ${
                      isCurrent
                        ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-200 font-semibold"
                        : isReached
                          ? "bg-white/5 border-white/10 text-slate-300"
                          : "bg-transparent border-transparent text-slate-500"
                    }`}
                  >
                    {step.role}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Detail Spotlight Banner (Desktop) */}
          <div className="mt-12 p-4 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-[#0a1b30] to-emerald-950/20 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center justify-between gap-6 transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400">
                {(() => {
                  const CurrentIcon = steps[activeStep].icon;
                  return <CurrentIcon className="w-5 h-5" />;
                })()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Step {steps[activeStep].number} In Detail
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs font-bold text-white font-heading">
                    {steps[activeStep].name}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-2 flex-shrink-0 text-[11px] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Scroll to traverse next step</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE & TABLET VERTICAL ANIMATED FLOW (< lg)
            ======================================================== */}
        <div className="block lg:hidden relative">
          {/* Base Vertical Track */}
          <div className="absolute top-6 bottom-6 left-7 w-[3px] bg-slate-800/80 rounded-full z-0" />

          {/* Animated Filled Vertical Progress Line */}
          <div 
            className="absolute top-6 left-7 w-[3px] rounded-full z-0 bg-gradient-to-b from-brand-blue via-cyan-400 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.85)] transition-all duration-300 ease-out"
            style={{ height: `${Math.min(100, scrollProgress * 100)}%` }}
          />

          {/* Traveling Photon on Mobile */}
          {scrollProgress > 0.05 && (
            <div 
              className="absolute left-7 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#22d3ee] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none transition-all duration-300"
              style={{ top: `calc(1.5rem + ${Math.min(94, scrollProgress * 94)}%)` }}
            >
              <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
            </div>
          )}

          {/* Mobile Vertical Step Rows */}
          <div className="space-y-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isReached = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div 
                  key={step.number}
                  onClick={() => setSelectedIndex(idx === selectedIndex ? null : idx)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-[#0b1d33] border-cyan-500/50 shadow-lg shadow-cyan-950/40"
                      : isReached
                        ? "bg-[#081525]/80 border-white/10"
                        : "bg-[#081325]/40 border-white/5 opacity-65"
                  }`}
                >
                  {/* Step Node Circle */}
                  <div className="relative flex-shrink-0">
                    {isCurrent && (
                      <span className="absolute -inset-1.5 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
                    )}

                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#0b2444] border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.7)] text-cyan-300"
                          : isReached
                            ? "bg-[#091a2e] border border-cyan-500/50 text-cyan-400"
                            : "bg-[#081325] border border-white/10 text-slate-500"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span 
                        className={`text-[10px] font-mono font-bold tracking-wider uppercase ${
                          isCurrent ? "text-cyan-400" : isReached ? "text-cyan-400/80" : "text-slate-500"
                        }`}
                      >
                        Step {step.number}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {step.role}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white font-heading">
                      {step.name}
                    </h4>

                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {step.desc}
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
