"use client";

import { 
  Search, 
  FileText, 
  Settings, 
  Cloud, 
  Monitor, 
  TrendingUp,
  ShieldCheck,
  Leaf,
  Clock,
  Bell
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

  const features = [
    {
      title: "Lower Costs",
      description: "Reduce energy bills and operational costs.",
      icon: ShieldCheck,
      colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Sustainable Impact",
      description: "Lower carbon footprint and a greener future.",
      icon: Leaf,
      colorClass: "text-brand-lime bg-brand-lime/10 border-brand-lime/20"
    },
    {
      title: "Real-Time Visibility",
      description: "Make faster, smarter decisions with live data.",
      icon: Clock,
      colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      badge: "24"
    },
    {
      title: "Predictive Intelligence",
      description: "Prevent downtime and stay ahead of issues.",
      icon: Bell,
      colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20"
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

        {/* Flowchart Layout */}
        <div className="flex flex-col xl:flex-row items-stretch justify-between gap-8 xl:gap-0 mb-16 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={step.number} className="flex-1 flex flex-col xl:flex-row items-stretch xl:items-start group/step">
                
                {/* Step Item Content */}
                <div className="flex-grow flex flex-col items-center text-center px-4 relative">
                  
                  {/* Glowing Circular Icon Container */}
                  <div className={`w-16 h-16 rounded-full border flex items-center justify-center relative transition-all duration-500 ${step.bgGlow} ${step.glowColor} group-hover/step:scale-110`}>
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                    
                    {/* Pulsing Outer Ring */}
                    <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-25"></div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="mt-4 px-2 py-0.5 rounded-full border border-white/10 bg-[#081325] text-[10px] font-bold text-slate-400 tracking-wider">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-4 text-sm sm:text-base font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-xs text-slate-400 max-w-[200px] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Animated Arrow Connector (Desktop only) */}
                {!isLast && (
                  <div className="hidden xl:flex items-center justify-center w-12 mx-2 relative top-8">
                    <svg className="w-12 h-6 overflow-visible" viewBox="0 0 48 24" fill="none">
                      <path
                        d="M 2 12 H 44"
                        stroke={`url(#arrow-grad-${idx})`}
                        strokeWidth="2"
                        className="animate-flow-dash"
                      />
                      <path
                        d="M 39 7 L 44 12 L 39 17"
                        stroke={idx % 2 === 0 ? "#06B6D4" : "#84CC16"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle r="3.5" fill={idx % 2 === 0 ? "#06B6D4" : "#84CC16"}>
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path="M 2 12 H 44"
                          begin={`${idx * 0.3}s`}
                        />
                      </circle>
                      <defs>
                        <linearGradient id={`arrow-grad-${idx}`} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor={idx % 2 === 0 ? "#06B6D4" : "#84CC16"} stopOpacity="0.2" />
                          <stop offset="100%" stopColor={idx % 2 === 0 ? "#84CC16" : "#06B6D4"} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Bottom Horizontal Card Bar */}
        <div className="w-full bg-[#081325]/40 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center divide-y md:divide-y-0 lg:divide-x divide-white/5 divide-solid">
            
            {features.map((feat, idx) => {
              const FeatIcon = feat.icon;
              return (
                <div 
                  key={feat.title} 
                  className={`flex items-start space-x-4 p-2 ${
                    idx > 0 ? "pt-6 md:pt-2 lg:pt-0 lg:pl-8" : ""
                  }`}
                >
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center relative ${feat.colorClass}`}>
                    <FeatIcon className="h-5.5 w-5.5" />
                    {feat.badge && (
                      <span className="absolute -top-1 -right-1.5 px-1 bg-cyan-500 text-[7px] font-black text-slate-900 rounded-sm">
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-normal mt-0.5">{feat.description}</p>
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
