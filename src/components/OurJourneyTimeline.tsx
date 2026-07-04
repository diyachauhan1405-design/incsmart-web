"use client";

import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Cpu,
  Cloud,
  Building2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface JourneyStep {
  year: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

interface OurJourneyTimelineProps {
  steps: JourneyStep[];
}

export default function OurJourneyTimeline({ steps }: OurJourneyTimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(steps.length - 1);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative mt-8">
      {/* Desktop & tablet — horizontal timeline */}
      <div className="hidden lg:block relative px-2">
        {/* Track line */}
        <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-lime rounded-full transition-all duration-[1.4s] ease-out"
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>

        <div className="grid grid-cols-5 gap-4 relative z-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeIndex === i;
            const delay = 300 + i * 180;

            return (
              <button
                key={step.year}
                type="button"
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                className="flex flex-col items-center text-left group cursor-pointer focus:outline-none"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
                }}
              >
                {/* Node */}
                <div
                  className={`relative w-11 h-11 rounded-full flex items-center justify-center border-4 border-[#07111D] transition-all duration-300 ${
                    isActive
                      ? "bg-brand-blue scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      : "bg-[#0b1a2d] group-hover:bg-brand-blue/80 group-hover:scale-105"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-white" : "text-brand-cyan group-hover:text-white"
                    }`}
                  />
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-brand-blue/40 animate-ping" />
                  )}
                </div>

                {/* Year */}
                <span
                  className={`mt-4 text-sm font-bold font-heading transition-colors ${
                    isActive ? "text-brand-cyan" : "text-brand-blue group-hover:text-brand-cyan"
                  }`}
                >
                  {step.year}
                </span>

                {/* Detail card */}
                <div
                  className={`mt-3 w-full rounded-2xl border p-4 transition-all duration-300 text-center ${
                    isActive
                      ? "bg-[#0b1a2d]/80 border-brand-blue/30 shadow-[0_0_24px_rgba(59,130,246,0.12)] -translate-y-1"
                      : "bg-[#0b1a2d]/40 border-white/5 group-hover:border-white/10"
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? isActive
                        ? "translateY(-4px)"
                        : "translateY(0)"
                      : "translateY(16px)",
                    transition: `opacity 0.6s ease ${delay + 200}ms, transform 0.4s ease, border-color 0.3s, background 0.3s`,
                  }}
                >
                  <p className="text-xs font-bold text-white leading-snug">{step.label}</p>
                  <p
                    className={`text-[10px] text-slate-400 mt-2 leading-relaxed transition-all duration-300 ${
                      isActive ? "opacity-100 max-h-24" : "opacity-70 max-h-12 overflow-hidden"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile — horizontal scroll timeline */}
      <div className="lg:hidden relative">
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeIndex === i;
            const delay = 200 + i * 120;

            return (
              <button
                key={step.year}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="flex-shrink-0 w-[220px] snap-center text-left cursor-pointer focus:outline-none"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(32px)",
                  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      isActive
                        ? "bg-brand-blue border-brand-blue shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                        : "bg-[#0b1a2d] border-brand-blue/40"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-brand-cyan">{step.year}</span>
                </div>

                <div
                  className={`rounded-2xl border p-4 transition-all ${
                    isActive
                      ? "bg-[#0b1a2d]/80 border-brand-blue/30"
                      : "bg-[#0b1a2d]/40 border-white/5"
                  }`}
                >
                  <p className="text-xs font-bold text-white">{step.label}</p>
                  <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scroll hint line */}
        <div className="flex justify-center gap-1.5 mt-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-brand-cyan" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
