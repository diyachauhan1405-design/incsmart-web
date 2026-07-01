"use client";

import { TrendingUp, Shield, Calendar, MapPin } from "lucide-react";

export default function BrandsBanner() {
  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Decorative background grid and glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tagline */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="w-10 h-[1.5px] bg-gradient-to-r from-brand-lime to-transparent"></span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#06B6D4] uppercase">
            TRUSTED BY LEADING ENTERPRISES
          </span>
          <span className="w-10 h-[1.5px] bg-gradient-to-l from-brand-blue to-transparent"></span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Trusted by <span className="text-gradient-lime-cyan">India's</span> Leading Brands
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl mx-auto">
            From manufacturing plants and commercial buildings to railways and energy infrastructure, 
            organizations across India trust INCASMART to deliver intelligent IoT automation, 
            energy optimization, and sustainable infrastructure solutions.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-0 mb-16">
          
          {/* Row 1, Brand 1: PVR INOX */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r md:border-b-0 border-b border-dashed md:border-solid">
            <div className="h-12 flex items-center justify-center text-white">
              <span className="font-sans font-black text-2xl tracking-tight">PVR</span>
              <span className="font-sans font-light text-2xl tracking-wide text-slate-300 ml-1">INOX</span>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              ENTERTAINMENT
            </span>
          </div>

          {/* Row 1, Brand 2: UltraTech Cement */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r md:border-b-0 border-b border-dashed md:border-solid">
            <div className="h-12 flex flex-col items-center justify-center text-white">
              <span className="font-sans font-black text-base italic tracking-tighter bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 px-2 py-0.5 rounded-sm">
                UltraTech
              </span>
              <span className="text-[9px] tracking-[0.2em] font-extrabold text-slate-300 mt-1">CEMENT</span>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              MANUFACTURING
            </span>
          </div>

          {/* Row 1, Brand 3: Indian Railways */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r md:border-b-0 border-b border-dashed md:border-solid">
            <div className="h-12 flex items-center justify-center text-slate-300">
              <svg className="w-7 h-7 mr-1.5 opacity-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                <circle cx="50" cy="50" r="42" strokeDasharray="4,4" />
                <circle cx="50" cy="50" r="30" />
                <path d="M50,15 L50,85 M15,50 L85,50 M25,25 L75,75 M25,78 L75,22" strokeWidth="3" />
                <circle cx="50" cy="50" r="7" fill="currentColor" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black leading-tight tracking-wider">INDIAN</span>
                <span className="text-[8px] font-bold text-slate-400 leading-none">RAILWAYS</span>
              </div>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              RAILWAYS
            </span>
          </div>

          {/* Row 1, Brand 4: NTPC */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r md:border-b-0 border-b border-dashed md:border-solid">
            <div className="h-12 flex flex-col items-center justify-center text-white">
              <span className="font-sans font-black text-xl tracking-[0.1em] text-slate-100">NTPC</span>
              <span className="text-[8px] tracking-[0.25em] font-bold text-slate-400 mt-0.5">LIMITED</span>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              ENERGY
            </span>
          </div>

          {/* Row 1, Brand 5: Amul */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r-0 md:border-b-0 border-b border-dashed md:border-solid">
            <div className="h-12 flex flex-col items-center justify-center text-white">
              <span className="font-serif font-black text-xl italic tracking-tight text-slate-200">Amul</span>
              <span className="text-[7px] font-medium text-slate-400 tracking-wide mt-0.5">The Taste of India</span>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              FOOD & DAIRY
            </span>
          </div>

          {/* Row 2, Brand 6: Hindalco */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r border-t border-white/5">
            <div className="h-12 flex flex-col items-center justify-center text-white">
              <span className="font-sans font-black text-base tracking-widest text-slate-200">HINDALCO</span>
              <span className="text-[6px] tracking-[0.4em] font-bold text-slate-400 uppercase mt-0.5">INDUSTRIES</span>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              MANUFACTURING
            </span>
          </div>

          {/* Row 2, Brand 7: Gautam Casting */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r border-t border-white/5">
            <div className="h-12 flex flex-col items-center justify-center text-slate-200">
              <div className="flex items-center">
                <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-black mr-1">G</span>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-black leading-none">GAUTAM</span>
                  <span className="text-[8px] font-semibold text-slate-400 mt-0.5">CASTING</span>
                </div>
              </div>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              MANUFACTURING
            </span>
          </div>

          {/* Row 2, Brand 8: Day Star Solar */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r border-t border-white/5">
            <div className="h-12 flex items-center justify-center text-slate-300">
              <svg className="w-5 h-5 text-amber-400 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <path d="M12,1 L12,4 M12,20 L12,23 M1,12 L4,12 M20,12 L23,12 M4.22,4.22 L6.34,6.34 M17.66,17.66 L19.78,19.78 M19.78,4.22 L17.66,6.34 M6.34,17.66 L4.22,19.78" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black leading-none">DAY STAR</span>
                <span className="text-[8px] font-semibold text-slate-400 mt-0.5">SOLAR</span>
              </div>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              SOLAR INDUSTRY
            </span>
          </div>

          {/* Row 2, Brand 9: Rajhans Cinemas */}
          <div className="flex flex-col items-center justify-center p-6 border-r border-white/5 last:border-r-0 lg:border-r border-t border-white/5">
            <div className="h-12 flex flex-col items-center justify-center text-white">
              <span className="font-sans font-extrabold text-sm tracking-[0.2em] text-slate-200">RAJHANS</span>
              <span className="text-[7px] tracking-[0.3em] font-bold text-slate-400 mt-0.5">CINEMAS</span>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              ENTERTAINMENT
            </span>
          </div>

          {/* Row 2, Brand 10: Kian-M Export */}
          <div className="flex flex-col items-center justify-center p-6 border-t border-white/5">
            <div className="h-12 flex items-center justify-center text-slate-200">
              <svg className="w-5 h-5 mr-1.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12,2 A15,15 0 0,0 12,22 A15,15 0 0,0 12,2" />
                <path d="M2,12 L22,12 M12,2 L12,22" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black leading-none">KIAN-M</span>
                <span className="text-[8px] font-semibold text-slate-400 mt-0.5">EXPORT</span>
              </div>
            </div>
            <div className="w-12 h-[1px] bg-white/10 my-3"></div>
            <span className="text-[8px] tracking-[0.2em] font-bold text-slate-500 uppercase">
              LOGISTICS & TRADE
            </span>
          </div>

        </div>

        {/* Bottom Key Metrics Panel */}
        <div className="w-full bg-[#081325]/50 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center divide-y divide-white/5 lg:divide-y-0 lg:divide-x divide-solid">
            
            {/* Metric 1 */}
            <div className="flex items-center space-x-4 p-2 lg:p-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center text-brand-lime shadow-[0_0_15px_rgba(132,204,22,0.1)]">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-lime font-heading">20%</div>
                <div className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-wider">Energy Savings</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center space-x-4 p-2 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white font-heading leading-tight">Startup India</div>
                <div className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-wider">Recognized</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center space-x-4 p-2 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center text-brand-lime shadow-[0_0_15px_rgba(132,204,22,0.1)]">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-lime font-heading">2017</div>
                <div className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-wider">Since</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center space-x-4 p-2 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white font-heading leading-tight">Pan-India</div>
                <div className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-wider">Deployments</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
