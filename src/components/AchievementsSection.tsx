"use client";

import { Award, Calendar, TrendingUp, Globe, Briefcase, Building2 } from "lucide-react";

export default function AchievementsSection() {
  const stats = [
    {
      value: "2017",
      label: "Year Established",
      sublabel: "Pioneering IoT Solutions",
      icon: Calendar,
      color: "text-brand-lime",
      bg: "bg-brand-lime/10 border-brand-lime/20"
    },
    {
      value: "Govt. Recognized",
      label: "Startup India",
      sublabel: "DPIIT Certified",
      icon: Award,
      color: "text-brand-cyan",
      bg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      value: "120+",
      label: "Projects Delivered",
      sublabel: "Across Diverse Sectors",
      icon: Briefcase,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      value: "8+",
      label: "Industries Served",
      sublabel: "Transit, Industrial & Commercial",
      icon: Building2,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20"
    },
    {
      value: "Pan-India",
      label: "Active Deployments",
      sublabel: "Multi-State Presence",
      icon: Globe,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      value: "Up to 20%",
      label: "Average Energy Savings",
      sublabel: "Verified Operational Results",
      icon: TrendingUp,
      color: "text-brand-lime",
      bg: "bg-brand-lime/10 border-brand-lime/20"
    }
  ];

  return (
    <section className="py-16 bg-[#060D17] border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            KEY ACHIEVEMENTS
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
            Proven Track Record. <span className="text-gradient-cyan-lime font-bold">Measurable Impact.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#081325]/60 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center hover:border-white/10 hover:bg-[#0c1a2d]/70 transition-all duration-300 group"
              >
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3 ${item.bg} ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white font-heading tracking-tight mb-0.5">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mb-0.5">
                  {item.label}
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
