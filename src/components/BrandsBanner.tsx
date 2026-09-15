"use client";

import { useRef, useEffect } from "react";

const MARQUEE_DURATION_S = 25;

export default function BrandsBanner() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const targetVelocityRef = useRef(0);
  const loopWidthRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      loopWidthRef.current = track.scrollWidth / 2;
      if (targetVelocityRef.current > 0) {
        targetVelocityRef.current = loopWidthRef.current / (MARQUEE_DURATION_S * 1000);
      }
    };

    const tick = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(time - lastTimeRef.current, 32);
      lastTimeRef.current = time;

      const smoothing = 1 - Math.exp(-delta / 450);
      velocityRef.current += (targetVelocityRef.current - velocityRef.current) * smoothing;

      offsetRef.current -= velocityRef.current * delta;

      const loopWidth = loopWidthRef.current;
      if (loopWidth > 0) {
        if (offsetRef.current <= -loopWidth) offsetRef.current += loopWidth;
        if (offsetRef.current > 0) offsetRef.current -= loopWidth;
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    measure();
    targetVelocityRef.current = loopWidthRef.current / (MARQUEE_DURATION_S * 1000);
    velocityRef.current = targetVelocityRef.current;
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const pauseMarquee = () => {
    targetVelocityRef.current = 0;
  };

  const resumeMarquee = () => {
    targetVelocityRef.current = loopWidthRef.current / (MARQUEE_DURATION_S * 1000);
  };

  const brandsList = [
    {
      name: "PVR INOX",
      content: (
        <div className="flex items-center justify-center px-4 sm:px-8 py-2">
          <span className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-white">
            PVR <span className="font-light text-slate-300">INOX</span>
          </span>
        </div>
      )
    },
    {
      name: "UltraTech Cement",
      content: (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-2">
          <span className="font-sans font-black text-sm sm:text-base italic tracking-tighter bg-gradient-to-r from-slate-100 to-slate-300 text-slate-950 px-2.5 py-0.5 rounded shadow-sm">
            UltraTech
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-extrabold text-slate-300 mt-1">
            CEMENT
          </span>
        </div>
      )
    },
    {
      name: "Indian Railways",
      content: (
        <div className="flex items-center justify-center px-4 sm:px-8 py-2 text-slate-200">
          <svg className="w-8 h-8 mr-2 text-slate-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <circle cx="50" cy="50" r="42" strokeDasharray="4,4" />
            <circle cx="50" cy="50" r="30" />
            <path d="M50,15 L50,85 M15,50 L85,50 M25,25 L75,75 M25,78 L75,22" strokeWidth="3" />
            <circle cx="50" cy="50" r="7" fill="currentColor" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-black leading-tight tracking-wider text-white">INDIAN</span>
            <span className="text-[9px] font-bold text-slate-400 leading-none">RAILWAYS</span>
          </div>
        </div>
      )
    },
    {
      name: "NTPC",
      content: (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-2 text-white">
          <span className="font-sans font-black text-2xl sm:text-3xl tracking-[0.12em] text-slate-100">
            NTPC
          </span>
          <span className="text-[8px] tracking-[0.3em] font-bold text-slate-400 mt-0.5">LIMITED</span>
        </div>
      )
    },
    {
      name: "Amul",
      content: (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-2 text-white">
          <span className="font-serif font-black text-2xl sm:text-3xl italic tracking-tight text-slate-100">
            Amul
          </span>
          <span className="text-[8px] font-medium text-slate-400 tracking-wider">The Taste of India</span>
        </div>
      )
    },
    {
      name: "Hindalco",
      content: (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-2 text-white">
          <span className="font-sans font-black text-lg sm:text-xl tracking-widest text-slate-100">
            HINDALCO
          </span>
          <span className="text-[7px] tracking-[0.4em] font-bold text-slate-400 uppercase mt-0.5">
            INDUSTRIES
          </span>
        </div>
      )
    },
    {
      name: "Gautam Casting",
      content: (
        <div className="flex items-center justify-center px-4 sm:px-8 py-2 text-slate-200">
          <span className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-black mr-2 text-white">
            G
          </span>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-black leading-none text-white">GAUTAM</span>
            <span className="text-[9px] font-semibold text-slate-400 mt-0.5">CASTING</span>
          </div>
        </div>
      )
    },
    {
      name: "Day Star Solar",
      content: (
        <div className="flex items-center justify-center px-4 sm:px-8 py-2 text-slate-200">
          <svg className="w-6 h-6 text-amber-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <path d="M12,1 L12,4 M12,20 L12,23 M1,12 L4,12 M20,12 L23,12 M4.22,4.22 L6.34,6.34 M17.66,17.66 L19.78,19.78 M19.78,4.22 L17.66,6.34 M6.34,17.66 L4.22,19.78" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-black leading-none text-white">DAY STAR</span>
            <span className="text-[9px] font-semibold text-slate-400 mt-0.5">SOLAR</span>
          </div>
        </div>
      )
    },
    {
      name: "Rajhans Cinemas",
      content: (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-2 text-white">
          <span className="font-sans font-extrabold text-base sm:text-lg tracking-[0.25em] text-slate-100">
            RAJHANS
          </span>
          <span className="text-[8px] tracking-[0.35em] font-bold text-slate-400 mt-0.5">CINEMAS</span>
        </div>
      )
    },
    {
      name: "Kian-M Export",
      content: (
        <div className="flex items-center justify-center px-4 sm:px-8 py-2 text-slate-200">
          <svg className="w-6 h-6 mr-2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12,2 A15,15 0 0,0 12,22 A15,15 0 0,0 12,2" />
            <path d="M2,12 L22,12 M12,2 L12,22" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-black leading-none text-white">KIAN-M</span>
            <span className="text-[9px] font-semibold text-slate-400 mt-0.5">EXPORT</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-[#07111D] py-12 sm:py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Decorative background grid and glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tagline */}
        <div className="flex items-center justify-center space-x-4 mb-4 sm:mb-6">
          <span className="w-10 h-[1.5px] bg-gradient-to-r from-brand-lime to-transparent"></span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#06B6D4] uppercase">
            TRUSTED BY LEADING ENTERPRISES
          </span>
          <span className="w-10 h-[1.5px] bg-gradient-to-l from-brand-blue to-transparent"></span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 sm:mb-6">
            Trusted by <span className="text-gradient-lime-cyan">India's</span> Leading Brands
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl mx-auto">
            From manufacturing plants and commercial buildings to railways and energy infrastructure, 
            organizations across India trust IncSmart to deliver intelligent IoT automation, 
            energy optimization, and sustainable infrastructure solutions.
          </p>
        </div>

        {/* Infinite scrolling marquee wrapper */}
        <div
          className="relative w-full overflow-hidden mb-6 sm:mb-16 py-2 sm:py-4 mask-gradient"
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07111D] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07111D] to-transparent z-20 pointer-events-none"></div>
          
          <div ref={trackRef} className="flex w-max space-x-6 sm:space-x-12 will-change-transform">
            {/* First list loop */}
            {brandsList.map((brand, idx) => (
              <div key={`brand-1-${idx}`} className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                {brand.content}
              </div>
            ))}
            {/* Duplicate list loop for loop continuity */}
            {brandsList.map((brand, idx) => (
              <div key={`brand-2-${idx}`} className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                {brand.content}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
