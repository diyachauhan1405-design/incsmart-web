"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  TrendingUp, 
  Clock, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  Film,
  Train,
  Factory,
  Hospital,
  ArrowRight
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  icon: React.ComponentType<any>;
  savingValue: string;
  savingLabel: string;
  chartLabel: string;
  efficiencyValue: string;
  efficiencyData: number[]; // Array of 6 numbers for the line chart points (Jan - Jun)
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const projects: ProjectItem[] = [
    {
      id: "pvr-inox",
      title: "PVR INOX",
      subtitle: "HVAC Energy Optimization",
      description: "Implemented a smart HVAC automation system across multiple PVR INOX properties to optimize energy usage and improve comfort.",
      benefits: [
        "20% Energy Savings",
        "Centralized Monitoring & Control",
        "Intelligent HVAC Automation"
      ],
      imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      icon: Film,
      savingValue: "20%",
      savingLabel: "Reduction in HVAC Energy Consumption",
      chartLabel: "HVAC Efficiency",
      efficiencyValue: "18%",
      efficiencyData: [10, 12, 11, 14, 16, 18]
    },
    {
      id: "western-railway",
      title: "Western Railway",
      subtitle: "Remote Infrastructure Monitoring",
      description: "Deployed IoT gateways and sensors across railway infrastructure to monitor traction power systems and substation health in real time.",
      benefits: [
        "Real-Time Telemetry Alerts",
        "Predictive Failure Analytics",
        "Enhanced Operational Safety"
      ],
      imageUrl: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80",
      icon: Train,
      savingValue: "15%",
      savingLabel: "Reduction in Substation Downtime",
      chartLabel: "Substation Health",
      efficiencyValue: "98%",
      efficiencyData: [90, 92, 91, 95, 96, 98]
    },
    {
      id: "ultratech-cement",
      title: "UltraTech Cement",
      subtitle: "Industrial Automation & Monitoring",
      description: "Integrated machinery sensors and centralized dashboards to automate factory floors, resulting in higher throughput and optimal power usage.",
      benefits: [
        "Optimized Power Consumption",
        "Automated Machine Diagnostics",
        "24/7 Plant Telemetry"
      ],
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      icon: Factory,
      savingValue: "22%",
      savingLabel: "Machine Throughput Increase",
      chartLabel: "Energy Efficiency",
      efficiencyValue: "94%",
      efficiencyData: [80, 83, 82, 87, 90, 94]
    },
    {
      id: "multi-specialty-hospital",
      title: "Multi-Specialty Hospital",
      subtitle: "Energy Management System",
      description: "Designed an automated energy management framework to maintain continuous power, optimize heating/cooling, and lower carbon footprints.",
      benefits: [
        "24/7 Uninterrupted Operations",
        "15% Carbon Footprint Reduction",
        "Smart HVAC Integration"
      ],
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      icon: Hospital,
      savingValue: "18%",
      savingLabel: "Reduction in Utility Expenses",
      chartLabel: "Carbon Reduction",
      efficiencyValue: "96%",
      efficiencyData: [82, 84, 86, 89, 92, 96]
    }
  ];

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setAnimate(true);
    }, 150);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setAnimate(true);
    }, 150);
  };

  const selectProject = (index: number) => {
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimate(true);
    }, 150);
  };

  const currentProject = projects[activeIndex];

  // Helper to construct SVG path from points array
  const getLinePath = (data: number[]) => {
    const min = Math.min(...data) - 5;
    const max = Math.max(...data) + 5;
    const width = 160;
    const height = 40;
    const points = data.map((val, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - ((val - min) / (max - min)) * height;
      return `${x},${y}`;
    });
    return `M ${points.join(" L ")}`;
  };

  // Helper to construct SVG fill area path from points array
  const getAreaPath = (data: number[]) => {
    const min = Math.min(...data) - 5;
    const max = Math.max(...data) + 5;
    const width = 160;
    const height = 40;
    const points = data.map((val, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - ((val - min) / (max - min)) * height;
      return `${x},${y}`;
    });
    return `M 0,${height} L ${points.join(" L ")} L ${width},${height} Z`;
  };

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            OUR PROJECTS
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 font-heading">
            Real Results. <br />
            <span className="text-gradient-cyan-lime font-bold">Trusted by Industry Leaders.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Explore how INCASMART has helped enterprises improve energy efficiency,
            automate operations, and build intelligent infrastructure across India.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="w-full bg-[#081325]/40 border border-white/10 rounded-2xl p-5 mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-white/5 divide-solid">
            
            {/* Metric 1 */}
            <div className="flex items-center space-x-4 p-2 lg:p-0 justify-center lg:justify-start lg:pl-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white font-heading">120+</div>
                <div className="text-[10px] font-semibold text-slate-400 tracking-wider">Projects Delivered</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center space-x-4 p-2 pt-6 lg:pt-0 lg:pl-8 justify-center lg:justify-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center text-brand-lime">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-brand-lime font-heading">20%</div>
                <div className="text-[10px] font-semibold text-slate-400 tracking-wider">Average Energy Savings</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center space-x-4 p-2 pt-6 lg:pt-0 lg:pl-8 justify-center lg:justify-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white font-heading">24×7</div>
                <div className="text-[10px] font-semibold text-slate-400 tracking-wider">Real-Time Monitoring</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center space-x-4 p-2 pt-6 lg:pt-0 lg:pl-8 justify-center lg:justify-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white font-heading">8+</div>
                <div className="text-[10px] font-semibold text-slate-400 tracking-wider">Industries Served</div>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Slide Wrapper */}
        <div className="relative flex items-center justify-center mb-8 px-10 sm:px-12 lg:px-14">
          
          {/* Navigation Prev */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 sm:left-1 lg:left-2 z-20 w-10 h-10 rounded-full border border-white/10 bg-[#081325]/75 hover:bg-brand-cyan hover:border-brand-cyan text-white hover:text-[#07111D] flex items-center justify-center transition-all shadow-lg active:scale-95"
            aria-label="Previous Project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Main Card */}
          <div className={`w-full bg-[#081325]/45 border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-stretch transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-20'}`}>
            
            {/* Left Column: Image with Telemetry Badges */}
            <div className="w-full lg:w-3/5 h-[300px] sm:h-[380px] rounded-2xl overflow-hidden relative border border-white/5">
              <Image
                src={currentProject.imageUrl}
                alt={currentProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111D] via-transparent to-transparent"></div>

              {/* Overlaid Telemetry: Circular Savings Badge */}
              <div className="absolute top-4 left-4 bg-[#081325]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-md flex items-center space-x-3.5 max-w-[210px] shadow-2xl">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="transparent" />
                    <circle 
                      cx="24" 
                      cy="24" 
                      r="20" 
                      stroke="#84CC16" 
                      strokeWidth="4" 
                      fill="transparent" 
                      strokeDasharray="125.6" 
                      strokeDashoffset={125.6 - (125.6 * parseFloat(currentProject.savingValue)) / 100}
                    />
                  </svg>
                  <span className="absolute text-[11px] font-black text-white">{currentProject.savingValue}</span>
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-wider uppercase text-brand-lime">Energy Savings</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{currentProject.savingLabel}</p>
                </div>
              </div>

              {/* Overlaid Telemetry: Real-time efficiency chart */}
              <div className="absolute bottom-4 left-4 bg-[#081325]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-md shadow-2xl min-w-[210px]">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{currentProject.chartLabel}</span>
                  <span className="text-[9px] font-bold text-brand-cyan">{currentProject.efficiencyValue}</span>
                </div>
                {/* SVG Mini Line Chart */}
                <div className="h-10 relative mt-1.5">
                  <svg className="w-full h-full" viewBox="0 0 160 40" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`project-chart-grad-${activeIndex}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={getAreaPath(currentProject.efficiencyData)}
                      fill={`url(#project-chart-grad-${activeIndex})`}
                    />
                    <path
                      d={getLinePath(currentProject.efficiencyData)}
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-[8px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                  <span>Jan</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>

            {/* Right Column: Case details */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between py-2">
              <div className="space-y-6">
                <div>
                  <span className="px-2 py-0.5 rounded border border-brand-cyan/20 bg-brand-cyan/5 text-[9px] font-extrabold tracking-[0.15em] text-[#06B6D4] uppercase">
                    FEATURED PROJECT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-3 font-heading">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-1">{currentProject.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2.5">
                  {currentProject.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-brand-lime flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <Link
                  href={`#case-${currentProject.id}`}
                  className="inline-flex items-center justify-center pl-6 pr-2.5 py-2.5 rounded-full text-xs font-bold text-white border border-white/10 hover:border-brand-cyan/50 hover:bg-white/5 transition-all group active:scale-95 cursor-pointer"
                >
                  <span className="mr-3">View Case Study</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-white border border-white/10 group-hover:translate-x-0.5 transition-transform duration-200">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </div>

          </div>

          {/* Navigation Next */}
          <button 
            onClick={handleNext}
            className="absolute right-0 sm:right-1 lg:right-2 z-20 w-10 h-10 rounded-full border border-white/10 bg-[#081325]/75 hover:bg-brand-cyan hover:border-brand-cyan text-white hover:text-[#07111D] flex items-center justify-center transition-all shadow-lg active:scale-95"
            aria-label="Next Project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Bottom Selector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {projects.map((proj, idx) => {
            if (idx === activeIndex) return null; // Skip active project
            const ProjIcon = proj.icon;
            return (
              <div
                key={proj.id}
                onClick={() => selectProject(idx)}
                className="relative h-[110px] rounded-2xl border border-white/5 bg-[#081325]/45 hover:border-brand-cyan/30 overflow-hidden group cursor-pointer transition-all duration-300 p-4 flex items-center justify-between"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={proj.imageUrl}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07111D] via-[#07111D]/80 to-transparent"></div>
                </div>

                {/* Left Side Content */}
                <div className="relative z-10 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <ProjIcon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{proj.title}</h4>
                    <p className="text-[10px] text-slate-400 leading-normal mt-0.5 max-w-[150px] truncate">{proj.subtitle}</p>
                    <span className="inline-flex items-center text-[8px] font-bold text-brand-lime uppercase tracking-wider mt-2.5 group-hover:text-white transition-colors">
                      View Project <ArrowRight className="h-2 w-2 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
