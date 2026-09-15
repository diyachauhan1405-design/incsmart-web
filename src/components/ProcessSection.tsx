"use client";

import { 
  Search, 
  FileText, 
  Settings, 
  Cloud, 
  Monitor, 
  TrendingUp
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  glowColor: string;
  iconColor: string;
  bgGlow: string;
}

export default function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Site Assessment",
      description: "Evaluate infrastructure, energy consumption, and operational challenges.",
      icon: Search,
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.3)] border-blue-500/40",
      iconColor: "text-blue-400",
      bgGlow: "bg-blue-500/10"
    },
    {
      number: "02",
      title: "Smart Design",
      description: "Design an IoT solution tailored to your facility.",
      icon: FileText,
      glowColor: "shadow-[0_0_20px_rgba(6,182,212,0.3)] border-cyan-500/40",
      iconColor: "text-cyan-400",
      bgGlow: "bg-cyan-500/10"
    },
    {
      number: "03",
      title: "Installation",
      description: "Deploy sensors, gateways, and automation hardware.",
      icon: Settings,
      glowColor: "shadow-[0_0_20px_rgba(132,204,22,0.3)] border-brand-lime/40",
      iconColor: "text-brand-lime",
      bgGlow: "bg-brand-lime/10"
    },
    {
      number: "04",
      title: "Cloud Integration",
      description: "Connect every asset to one secure cloud platform.",
      icon: Cloud,
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.3)] border-blue-500/40",
      iconColor: "text-blue-400",
      bgGlow: "bg-blue-500/10"
    },
    {
      number: "05",
      title: "Live Monitoring",
      description: "Track HVAC, energy, equipment, and alerts in real time.",
      icon: Monitor,
      glowColor: "shadow-[0_0_20px_rgba(168,85,247,0.3)] border-purple-500/40",
      iconColor: "text-purple-400",
      bgGlow: "bg-purple-500/10"
    },
    {
      number: "06",
      title: "Continuous Optimization",
      description: "Reduce energy costs, improve efficiency, and extend equipment life.",
      icon: TrendingUp,
      glowColor: "shadow-[0_0_20px_rgba(132,204,22,0.3)] border-brand-lime/40",
      iconColor: "text-brand-lime",
      bgGlow: "bg-brand-lime/10"
    }
  ];

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

      <style>{`
        @keyframes flowDash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-flow-dash {
          stroke-dasharray: 6 4;
          animation: flowDash 1.2s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            OUR PROCESS
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 font-heading">
            From Connected Assets <br /> to <span className="text-gradient-cyan-lime font-bold">Smarter Decisions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Our end-to-end approach transforms disconnected infrastructure into an
            intelligent, data-driven ecosystem that improves efficiency, reduces costs,
            and enables proactive operations.
          </p>
        </div>

        {/* Flowchart Layout with uniform cards and connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number} 
                className="bg-[#081325]/50 border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center hover:border-brand-cyan/30 hover:bg-[#0c1a2d]/60 transition-all duration-300 group/step relative h-full"
              >
                {/* Step Number Badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold text-slate-400 tracking-wider">
                  {step.number}
                </div>

                {/* Glowing Circular Icon Container - strictly uniform size */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center relative mb-4 transition-transform duration-300 group-hover/step:scale-105 ${step.bgGlow} ${step.glowColor}`}>
                  <Icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>

                {/* Step Title - uniform min height */}
                <h3 className="text-sm font-bold text-white tracking-tight mb-2 min-h-[40px] flex items-center justify-center">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
