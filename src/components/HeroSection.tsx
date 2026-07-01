"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Calendar,
  TrendingUp,
  Globe,
  ArrowRight,
  Shield,
  Briefcase,
  Play
} from "lucide-react";
import factoryRender from "../../public/factory-render.png";
import heroTablet from "../../public/hero-tablet.png";

interface HeroSectionProps {
  isLoggedIn?: boolean;
}

export default function HeroSection({ isLoggedIn = false }: HeroSectionProps) {
  const [savingsVal, setSavingsVal] = useState(20);
  const [powerVal, setPowerVal] = useState(1450);

  // Simple telemetry updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSavingsVal((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return newVal >= 18 && newVal <= 22 ? newVal : prev;
      });
      setPowerVal((prev) => {
        const change = Math.floor(Math.random() * 20) - 10;
        return prev + change;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (isLoggedIn) {
    return (
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-[#07111D] overflow-hidden bg-grid-pattern">
        {/* Background radial glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Wording & CTAs */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              {/* Badge */}
              <div className="flex items-center">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-slate-300 bg-[#0f1d30]/65 border border-white/5 uppercase select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Intelligent Infrastructure Solutions</span>
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.15] font-heading">
                Intelligent Solutions. <br />
                Smarter Infrastructure. <br />
                <span className="text-[#3B82F6] font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Stronger Future.
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
                INCSMART delivers intelligent IoT solutions that optimize energy, 
                automate operations, and create connected, efficient, and sustainable environments.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="#solutions"
                  className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="#overview"
                  className="border border-white/10 hover:border-white/20 hover:bg-white/5 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 text-[#3B82F6] fill-[#3B82F6]" />
                  <span>Watch Overview</span>
                </Link>
              </div>

              {/* Stats Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">20%</h4>
                    <p className="text-[9px] text-slate-500 font-semibold tracking-wide uppercase">Average Energy Savings</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">24×7</h4>
                    <p className="text-[9px] text-slate-500 font-semibold tracking-wide uppercase">Real-Time Monitoring</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">120+</h4>
                    <p className="text-[9px] text-slate-500 font-semibold tracking-wide uppercase">Projects Delivered</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Globe className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">98%</h4>
                    <p className="text-[9px] text-slate-500 font-semibold tracking-wide uppercase">System Uptime</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Tablet Graphic */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div className="relative w-full max-w-2xl aspect-square overflow-hidden rounded-3xl border border-white/5 bg-[#081325]/25 p-2 group/hero-img">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={heroTablet}
                    alt="INCSMART Live Overview Dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain object-center opacity-95 group-hover/hero-img:scale-[1.01] transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // Fallback (Not Logged In) layout
  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-10 bg-[#07111D] overflow-hidden bg-grid-pattern">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-lime/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Left Column Content - Copy & CTAs */}
          <div className="lg:col-span-5 flex flex-col space-y-5 sm:space-y-6">

            {/* Tagline */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-brand-lime to-brand-cyan"></span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#06B6D4] uppercase">
                INTELLIGENT IOT & ENERGY MANAGEMENT
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.20rem] font-extrabold tracking-tight text-white leading-[1.15] font-heading">
              Powering <br />
              <span className="text-gradient-cyan-lime font-bold">Smarter,</span> <br />
              <span className="whitespace-nowrap">
                <span className="text-gradient-lime-cyan font-bold">Greener</span> Industries
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              We connect, monitor and optimize your critical assets with intelligent IoT solutions that reduce energy costs and drive sustainability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                href="#energy-audit"
                className="relative inline-flex items-center justify-between pl-5 pr-2 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group cursor-pointer"
              >
                <span className="mr-3">Get Free Energy Audit</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-slate-900 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="#solutions"
                className="relative inline-flex items-center justify-between pl-5 pr-2 py-2.5 rounded-full text-xs font-semibold text-white border border-white/10 hover:border-brand-cyan/50 hover:bg-white/5 active:scale-95 transition-all group cursor-pointer"
              >
                <span className="mr-3">Explore Solutions</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-white border border-white/10 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            {/* Bottom 4 Badges/Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-4 pt-4 border-t border-white/5">
              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/10">
                  <Award className="h-3.5 w-3.5 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Startup India</h4>
                  <p className="text-[9px] text-slate-500">Recognized</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-brand-lime/10 border border-brand-lime/10">
                  <Calendar className="h-3.5 w-3.5 text-brand-lime" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Since</h4>
                  <p className="text-[9px] text-slate-500">2017</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/10">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Up to 20%</h4>
                  <p className="text-[9px] text-slate-500">Energy Savings</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-brand-blue/10 border border-brand-blue/10">
                  <Globe className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Pan India</h4>
                  <p className="text-[9px] text-slate-500">Deployments</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Factory + Telemetry */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-10 lg:pt-0">
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src={factoryRender}
                  alt="INCSMART IoT Cloud Factory Render"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                  priority
                />
                <div className="absolute top-[14%] right-[2%] w-[310px] hidden lg:block z-30 transform hover:scale-[1.02] transition-transform duration-300">
                  <TelemetryDashboard savingsVal={savingsVal} powerVal={powerVal} />
                </div>
              </div>
              <div className="w-full mt-4 px-4 flex justify-center lg:hidden">
                <TelemetryDashboard savingsVal={savingsVal} powerVal={powerVal} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

interface TelemetryProps {
  savingsVal: number;
  powerVal: number;
}

function TelemetryDashboard({ savingsVal, powerVal }: TelemetryProps) {
  return (
    <div className="w-full bg-[#081325]/85 border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="flex items-center space-x-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shadow-[0_0_8px_#84CC16]"></span>
        <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase">
          LIVE OVERVIEW
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <div className="bg-[#0c1a2d]/80 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/20 transition-all duration-300 min-h-[105px]">
          <div>
            <span className="text-[9px] text-slate-400 font-semibold tracking-wider">Energy Savings</span>
            <div className="text-xl font-bold text-brand-lime mt-0.5 font-heading">{savingsVal}%</div>
          </div>
          <div className="h-6 my-1 relative">
            <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-grad-green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#84CC16" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#84CC16" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 30 L 0 22 Q 15 15, 30 25 T 60 18 T 85 24 T 100 15 L 100 30 Z"
                fill="url(#chart-grad-green)"
              />
              <path
                d="M 0 22 Q 15 15, 30 25 T 60 18 T 85 24 T 100 15"
                fill="none"
                stroke="#84CC16"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex items-center text-[8px] text-slate-400 mt-0.5 select-none">
            <span className="text-brand-lime font-bold mr-1 flex items-center">
              ▲ 18%
            </span>
            <span>vs Last Month</span>
          </div>
        </div>

        <div className="bg-[#0c1a2d]/80 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/20 transition-all duration-300 min-h-[105px]">
          <div>
            <span className="text-[9px] text-slate-400 font-semibold tracking-wider">Power Consumption</span>
            <div className="text-xl font-bold text-brand-cyan mt-0.5 font-heading">
              {powerVal} <span className="text-[8px] text-slate-400 font-normal">kW</span>
            </div>
          </div>
          <div className="h-6 my-1 relative">
            <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-grad-blue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 30 L 0 15 Q 20 25, 40 12 T 70 20 T 100 10 L 100 30 Z"
                fill="url(#chart-grad-blue)"
              />
              <path
                d="M 0 15 Q 20 25, 40 12 T 70 20 T 100 10"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex items-center text-[8px] text-slate-400 mt-0.5 select-none">
            <span className="w-1 h-1 rounded-full bg-brand-cyan mr-1 animate-pulse shadow-[0_0_6px_#06B6D4]"></span>
            <span>Live</span>
          </div>
        </div>

        <div className="bg-[#0c1a2d]/80 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/20 transition-all duration-300 min-h-[75px]">
          <div>
            <span className="text-[9px] text-slate-400 font-semibold tracking-wider">HVAC Health</span>
            <div className="text-xl font-bold text-brand-lime mt-0.5 font-heading">98%</div>
          </div>
          <div className="flex items-center text-[8px] text-slate-400 mt-2 select-none">
            <span className="w-1 h-1 rounded-full bg-brand-lime mr-1 animate-pulse"></span>
            <span>Healthy</span>
          </div>
        </div>

        <div className="bg-[#0c1a2d]/80 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/20 transition-all duration-300 min-h-[75px]">
          <div>
            <span className="text-[9px] text-slate-400 font-semibold tracking-wider">Carbon Reduction</span>
            <div className="text-xl font-bold text-brand-lime mt-0.5 font-heading">18%</div>
          </div>
          <div className="flex items-center text-[8px] text-slate-400 mt-2 select-none">
            <span className="text-brand-lime font-bold mr-1 flex items-center">
              ▲ 15%
            </span>
            <span>vs Last Month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
