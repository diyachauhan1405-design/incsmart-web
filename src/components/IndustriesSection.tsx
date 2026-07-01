"use client";

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
  ArrowRight
} from "lucide-react";

interface IndustryItem {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ComponentType<any>;
  themeColor: string;
  borderColor: string;
  glowColor: string;
}

export default function IndustriesSection() {
  const industries: IndustryItem[] = [
    {
      title: "Manufacturing",
      description: "Optimize production, monitor equipment, and reduce downtime.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      icon: Factory,
      themeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      borderColor: "hover:border-blue-500/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    },
    {
      title: "Commercial Buildings",
      description: "Intelligent building automation for efficiency and comfort.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      icon: Building2,
      themeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      borderColor: "hover:border-cyan-500/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
    },
    {
      title: "Railways",
      description: "Remote monitoring and predictive maintenance for infrastructure.",
      imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=600&q=80",
      icon: Train,
      themeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      borderColor: "hover:border-indigo-500/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
    },
    {
      title: "Hospitals",
      description: "Ensure safety, comfort, and energy efficiency 24/7.",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      icon: Hospital,
      themeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      borderColor: "hover:border-emerald-500/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
    },
    {
      title: "Hotels",
      description: "Enhance guest experience and streamline operations.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      icon: Coffee,
      themeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      borderColor: "hover:border-amber-500/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
    },
    {
      title: "Solar Plants",
      description: "Monitor performance and maximize energy generation.",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      icon: Sun,
      themeColor: "text-brand-lime bg-brand-lime/10 border-brand-lime/20",
      borderColor: "hover:border-brand-lime/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]"
    },
    {
      title: "Educational Campuses",
      description: "Smart infrastructure for safe, efficient, and sustainable campuses.",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
      icon: GraduationCap,
      themeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
      borderColor: "hover:border-yellow-500/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
    },
    {
      title: "Retail & Malls",
      description: "Optimize energy, ensure safety, and improve customer experience.",
      imageUrl: "https://images.unsplash.com/photo-1567401893930-7bc312677226?auto=format&fit=crop&w=600&q=80",
      icon: ShoppingBag,
      themeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      borderColor: "hover:border-rose-500/40",
      glowColor: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]"
    }
  ];

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tagline */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            INDUSTRIES WE SERVE
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 font-heading">
            Smart Solutions Across <br />
            <span className="text-gradient-cyan-lime font-bold">Every Industry</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            From manufacturing plants and commercial buildings to railways, hospitals, hotels, 
            and renewable energy, our intelligent solutions are designed to optimize 
            operations across diverse industries.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div 
                key={ind.title} 
                className={`relative h-[280px] rounded-2xl border border-white/5 bg-[#081325]/30 overflow-hidden group transition-all duration-500 flex flex-col justify-end p-6 ${ind.borderColor} ${ind.glowColor}`}
              >
                {/* Background Image with Dark Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={ind.imageUrl} 
                    alt={ind.title} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111D] via-[#07111D]/75 to-transparent"></div>
                </div>

                {/* Card Content (Elevated above background layer) */}
                <div className="relative z-10 flex flex-col items-start space-y-3.5">
                  {/* Icon Badge */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${ind.themeColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-white transition-colors duration-300">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-normal max-w-[220px]">
                      {ind.description}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <Link 
                    href={`#${ind.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-[10px] font-bold text-[#06B6D4] uppercase tracking-wider group/btn"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
