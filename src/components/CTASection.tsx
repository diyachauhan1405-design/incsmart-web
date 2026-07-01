"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Leaf, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import transformImg from "../../public/transform-infrastructure.png";

export default function CTASection() {
  const valueProps = [
    {
      title: "Reduce Costs",
      description: "Lower energy and operational costs.",
      icon: Leaf,
      iconColor: "text-brand-lime",
      iconBg: "bg-brand-lime/10 border-brand-lime/20"
    },
    {
      title: "Improve Efficiency",
      description: "Optimize performance with smart automation.",
      icon: TrendingUp,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Drive Sustainability",
      description: "Build a greener and smarter future.",
      icon: ShieldCheck,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20"
    }
  ];

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Info on left, Graphic on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: CTA Info */}
          <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
            
            {/* Tagline */}
            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                READY TO GET STARTED?
              </span>
              <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Ready to <br className="hidden sm:inline" />
              <span className="text-gradient-cyan-lime font-bold">Transform Your Infrastructure?</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Partner with INCSMART and unlock the full potential of
              intelligent automation, real-time monitoring, and energy optimization.
            </p>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {valueProps.map((prop) => {
                const PropIcon = prop.icon;
                return (
                  <div key={prop.title} className="flex flex-col items-start space-y-3 group">
                    {/* Circle Icon Badge */}
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${prop.iconBg} ${prop.iconColor}`}>
                      <PropIcon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">{prop.title}</h4>
                      <p className="text-[10px] text-slate-400 leading-normal mt-1 max-w-[150px]">{prop.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center">
              <Link
                href="#free-audit"
                className="relative inline-flex items-center justify-between pl-6 pr-2.5 py-3 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group cursor-pointer text-center sm:text-left"
              >
                <span className="mr-4">Schedule a Free Energy Audit</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-slate-900 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

          </div>

          {/* Right Column: Building Diagram Graphic */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px] rounded-3xl border border-white/5 bg-[#081325]/25 p-3 overflow-hidden group/graphic">
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              
              <div className="relative w-full h-full">
                <Image
                  src={transformImg}
                  alt="Ready to Transform Your Infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-center opacity-90 group-hover/graphic:opacity-100 group-hover/graphic:scale-[1.01] transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
