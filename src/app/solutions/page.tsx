"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Network, 
  Wind, 
  Zap, 
  Building2, 
  Flame, 
  ArrowRight,
  TrendingUp,
  Shield,
  Briefcase,
  Globe,
  Plus,
  Minus,
  Activity,
  Tv,
  Cpu,
  Star,
  CheckCircle,
  HelpCircle,
  Factory,
  Train,
  Hospital,
  Building,
  Home,
  Sun,
  GraduationCap,
  ShoppingBag,
  ExternalLink,
  Phone
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero graphics/diagram references
import cloudDiagram from "../../../public/cloud-diagram.png";
import solutionsDiagram from "../../../public/solutions-diagram.png";

// Data declarations matching the image contents
const tabItems = [
  { id: "iot", label: "Industrial IoT", icon: Network },
  { id: "hvac", label: "HVAC Optimization", icon: Wind },
  { id: "energy", label: "Energy Management", icon: Zap },
  { id: "bms", label: "Building Management", icon: Building2 },
  { id: "fire", label: "Fire Monitoring", icon: Flame }
];

const solutionsData = {
  iot: {
    id: "iot",
    title: "Industrial IoT & Automation",
    subtitle: "Connect your machines and infrastructure to our intelligent IoT platform for real-time visibility, automation, and predictive insights.",
    image: solutionsDiagram, // We can reuse solutionsDiagram or default images
    telemetry: {
      type: "iot",
      status: "Online",
      activeNodes: 142,
      efficiency: "94.6%"
    },
    features: [
      "Real-time Asset Monitoring",
      "IoT Sensor Integration",
      "Edge Gateway Connectivity",
      "Remote Equipment Control",
      "Predictive Maintenance",
      "Advanced Analytics Dashboard"
    ],
    benefits: [
      "Reduced Downtime",
      "Higher Productivity",
      "Optimized Operations",
      "Data-driven Decisions"
    ]
  },
  hvac: {
    id: "hvac",
    title: "HVAC Optimization",
    subtitle: "Intelligently optimize your HVAC systems with real-time monitoring and AI-driven automation to reduce energy consumption and ensure maximum comfort.",
    image: solutionsDiagram,
    telemetry: {
      type: "hvac",
      coolingLevel: "72%",
      temp: "23°C",
      airQuality: "Good"
    },
    features: [
      "Smart HVAC Retrofitting",
      "Temperature & Humidity Monitoring",
      "VFD & Compressor Control",
      "AI-based Cooling Optimization",
      "Real-time Performance Tracking",
      "Intelligent Alerts & Notifications"
    ],
    benefits: [
      "Up to 20% Energy Savings",
      "Lower Carbon Footprint",
      "Improved Comfort",
      "Extended Equipment Life"
    ]
  },
  energy: {
    id: "energy",
    title: "Smart Energy Management",
    subtitle: "Monitor, analyze, and optimize energy usage across your facility. Identify inefficiencies, reduce costs, and improve energy performance.",
    image: solutionsDiagram,
    telemetry: {
      type: "energy",
      totalConsumption: "1250 kW",
      energyCost: "₹ 18,750",
      powerFactor: "0.96"
    },
    features: [
      "Energy Consumption Monitoring",
      "Power Factor Analysis",
      "Demand & Load Management",
      "Energy Leak Detection",
      "Predictive Analytics",
      "Interactive Dashboards"
    ],
    benefits: [
      "Reduced Energy Costs",
      "Better Power Quality",
      "Avoid Utility Penalties",
      "Prevent Equipment Failures"
    ]
  },
  bms: {
    id: "bms",
    title: "Building Management System",
    subtitle: "Manage all critical building systems from a unified platform to improve efficiency, safety, and occupant comfort.",
    image: solutionsDiagram,
    telemetry: {
      type: "bms",
      occupancy: "84%",
      lightsActive: "62/80",
      hvacStatus: "Optimal"
    },
    features: [
      "Centralized Building Control",
      "HVAC, Lighting & Power Integration",
      "Occupancy-based Automation",
      "Smart Scheduling & Scenes",
      "Multi-site Management",
      "Real-time Alerts & Reports"
    ],
    benefits: [
      "Lower Operating Costs",
      "Smarter Building Operations",
      "Improved Occupant Comfort",
      "Increased Asset Lifespan"
    ]
  },
  fire: {
    id: "fire",
    title: "Smart Fire Monitoring",
    subtitle: "Ensure complete fire safety with real-time monitoring of fire hydrants, pumps, sprinklers, and other critical safety systems.",
    image: solutionsDiagram,
    telemetry: {
      type: "fire",
      status: "Healthy",
      pressure: "7.5 bar",
      flowRate: "120 LPM"
    },
    features: [
      "Fire Hydrant Monitoring",
      "Sprinkler System Monitoring",
      "Pump Health Monitoring",
      "Pressure & Flow Monitoring",
      "Leak Detection",
      "Instant Emergency Alerts"
    ],
    benefits: [
      "Enhanced Safety",
      "Faster Emergency Response",
      "Leak & Fault Detection",
      "24×7 System Monitoring"
    ]
  }
};

const techPlatformSteps = [
  { name: "Smart Sensors & Devices", icon: Cpu },
  { name: "Edge Gateway & Connectivity", icon: Network },
  { name: "Cloud Infrastructure", icon: Globe },
  { name: "AI & Analytics Engine", icon: Activity },
  { name: "Unified Dashboard & Insights", icon: Tv },
  { name: "Automation & Control", icon: Zap }
];

const industriesList = [
  { title: "Manufacturing", icon: Factory },
  { title: "Railways", icon: Train },
  { title: "Hospitals", icon: Hospital },
  { title: "Commercial Buildings", icon: Building },
  { title: "Hotels", icon: Home },
  { title: "Solar Plants", icon: Sun },
  { title: "Education", icon: GraduationCap },
  { title: "Retail & Malls", icon: ShoppingBag }
];

const projectCards = [
  {
    title: "PVR INOX",
    category: "HVAC Energy Optimization",
    metric: "20% Energy Savings",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Western Railway",
    category: "Remote Infrastructure Monitoring",
    metric: "24×7 Monitoring",
    imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "UltraTech Cement",
    category: "Industrial Automation",
    metric: "15% Operational Efficiency",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "MAX Healthcare",
    category: "Building Management System",
    metric: "Enhanced Comfort",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
  }
];

const faqs = [
  { question: "How does INCSMART reduce energy consumption?", answer: "Through intelligent HVAC automation, real-time demand-load management, power factor correction, and scheduling optimizations that align utility consumption with actual requirements." },
  { question: "Can your solutions integrate with our existing systems?", answer: "Yes, our Edge Gateways support standard industrial and building protocols including BACnet, Modbus, MQTT, and OPC-UA for seamless integration." },
  { question: "What is the typical ROI period for your solutions?", answer: "Depending on utility rates and baseline efficiency, most clients see full return on investment (ROI) within 12 to 18 months." },
  { question: "Do you provide 24×7 support and monitoring?", answer: "Absolutely. Our Network Operations Center (NOC) operates 24x7 to monitor alerts, perform predictive diagnostics, and ensure maximum system uptime." },
  { question: "Is your platform scalable for multiple locations?", answer: "Yes, our cloud-native BMS and Industrial IoT architecture aggregates telemetry across geographical locations into a unified control dashboard." }
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<string>("iot");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto rotating live numbers to simulate realism
  const [liveSavings, setLiveSavings] = useState(20);
  useEffect(() => {
    const intv = setInterval(() => {
      setLiveSavings(prev => (Math.random() > 0.5 ? Math.min(22, prev + 1) : Math.max(18, prev - 1)));
    }, 4000);
    return () => clearInterval(intv);
  }, []);

  return (
    <div className="min-h-screen bg-[#07111D] text-white flex flex-col overflow-hidden">
      <Header isLoggedIn={true} />

      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="relative py-20 border-b border-white/5 bg-[#07111D] overflow-hidden bg-grid-pattern">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                OUR SOLUTIONS
              </span>
              <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-heading">
              Intelligent Solutions <br />
              Built for Modern <br />
              <span className="text-brand-cyan">Infrastructure.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              From Industrial IoT and HVAC Optimization to Building Management Systems and Smart Fire Monitoring, we deliver intelligent automation solutions that improve efficiency, reduce operational costs, and create connected, sustainable infrastructure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <Link href="#solutions-details" className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-bold transition-all shadow-md flex items-center gap-2">
                <span>Explore Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-semibold transition-all">
                Book Consultation
              </Link>
            </div>

            {/* Premium cloud diagram / visual */}
            <div className="relative max-w-4xl mx-auto rounded-3xl border border-white/5 bg-[#081325]/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              {/* Graphic mockup container */}
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden flex items-center justify-center">
                <Image 
                  src={cloudDiagram} 
                  alt="INCSMART Cloud Architecture diagram" 
                  fill 
                  className="object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-700"
                  priority
                />

                {/* Simulated Floating Telemetry Widgets on Hero Image */}
                <div className="absolute bottom-[10%] left-[8%] bg-[#081325]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-md hidden md:block text-left shadow-2xl">
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Energy Savings</div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-black text-brand-lime font-heading">{liveSavings}%</span>
                    <span className="text-[9px] text-slate-400">Real-time</span>
                  </div>
                  <div className="w-24 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-brand-lime rounded-full" style={{ width: `${liveSavings * 4}%` }}></div>
                  </div>
                </div>

                <div className="absolute top-[10%] right-[8%] bg-[#081325]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-md hidden md:block text-left shadow-2xl">
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Active Alerts</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-rose-500 font-heading">0</span>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-bold uppercase tracking-wider">All Clear</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SOLUTIONS DETAILED SELECTOR TABS & INFO CARDS */}
        <section id="solutions-details" className="py-20 bg-[#07111D] relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center items-center gap-2 mb-16 border-b border-white/5 pb-6">
              {tabItems.map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? "bg-brand-blue/10 border-brand-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                        : "bg-[#081325]/45 border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? "text-brand-blue" : "text-slate-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tabs content render block */}
            <div className="bg-[#081325]/30 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

              {Object.values(solutionsData).map((sol) => {
                if (sol.id !== activeTab) return null;
                return (
                  <div key={sol.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300">
                    
                    {/* Left Column: Visual Mockup / Simulated dashboard telemetry */}
                    <div className="lg:col-span-5 flex flex-col space-y-6">
                      <div className="relative aspect-[4/3] rounded-2xl border border-white/5 bg-[#07111D]/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-2xl"></div>

                        {/* Top Row telemetry indicators */}
                        <div className="flex justify-between items-center z-10">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SYSTEM STATUS</span>
                          <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span>
                            <span>ACTIVE</span>
                          </span>
                        </div>

                        {/* Dynamic Render based on tab details */}
                        <div className="my-6 z-10 flex flex-col justify-center items-center">
                          {sol.telemetry.type === "iot" && (
                            <div className="text-center space-y-2">
                              <span className="text-xs font-semibold text-slate-400">Total Active Telemetry Nodes</span>
                              <div className="text-5xl font-black text-brand-blue font-heading tracking-tight">142</div>
                              <span className="text-[10px] text-emerald-400 font-bold block">Efficiency: 99.4%</span>
                            </div>
                          )}
                          {sol.telemetry.type === "hvac" && (
                            <div className="text-center space-y-3 w-full">
                              <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center">
                                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Cooling Load</span>
                                  <span className="text-3xl font-black text-brand-lime font-heading">72%</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10"></div>
                                <div className="flex flex-col items-center">
                                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Temperature</span>
                                  <span className="text-3xl font-black text-white font-heading">23°C</span>
                                </div>
                              </div>
                              <span className="text-[10px] text-slate-400 font-bold block">Air Quality: Good</span>
                            </div>
                          )}
                          {sol.telemetry.type === "energy" && (
                            <div className="text-center space-y-3 w-full">
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-[#0b1a2d] p-2 rounded-xl border border-white/5">
                                  <div className="text-[8px] text-slate-500 uppercase">Usage</div>
                                  <div className="text-xs font-bold text-white mt-1">1250 kW</div>
                                </div>
                                <div className="bg-[#0b1a2d] p-2 rounded-xl border border-white/5">
                                  <div className="text-[8px] text-slate-500 uppercase">Cost</div>
                                  <div className="text-xs font-bold text-brand-lime mt-1">₹ 18,750</div>
                                </div>
                                <div className="bg-[#0b1a2d] p-2 rounded-xl border border-white/5">
                                  <div className="text-[8px] text-slate-500 uppercase">P. Factor</div>
                                  <div className="text-xs font-bold text-brand-cyan mt-1">0.96</div>
                                </div>
                              </div>
                            </div>
                          )}
                          {sol.telemetry.type === "bms" && (
                            <div className="text-center space-y-2">
                              <span className="text-xs font-semibold text-slate-400">Total Building Occupancy</span>
                              <div className="text-5xl font-black text-brand-cyan font-heading">84%</div>
                              <span className="text-[10px] text-slate-400 font-bold block">Lights Active: 62 / 80</span>
                            </div>
                          )}
                          {sol.telemetry.type === "fire" && (
                            <div className="text-center space-y-3 w-full">
                              <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center">
                                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Pressure</span>
                                  <span className="text-2xl font-black text-brand-blue font-heading">7.5 bar</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10"></div>
                                <div className="flex flex-col items-center">
                                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Flow Rate</span>
                                  <span className="text-2xl font-black text-brand-lime font-heading">120 LPM</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Row indicators */}
                        <div className="flex justify-between items-center border-t border-white/5 pt-4 z-10">
                          <span className="text-[8px] text-slate-500 font-bold tracking-wider">LIVE TELEMETRY STREAM</span>
                          <div className="flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse delay-75"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Detailed copy, Key features, & benefits list */}
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                          {sol.title}
                        </h2>
                        <p className="text-sm text-slate-400 leading-relaxed mt-3">
                          {sol.subtitle}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        {/* Key Features Column */}
                        <div>
                          <h4 className="text-xs font-bold text-brand-blue tracking-wider uppercase mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {sol.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start text-xs text-slate-300">
                                <span className="mr-2 text-brand-blue">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits Column */}
                        <div>
                          <h4 className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-3">
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {sol.benefits.map((ben, idx) => (
                              <li key={idx} className="flex items-center text-xs text-slate-300">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                                <span>{ben}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link href="#contact" className="inline-flex items-center text-xs font-bold text-[#06B6D4] hover:underline group/link">
                          <span>Request Consultation for {tabItems.find(t => t.id === sol.id)?.label}</span>
                          <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* 3. TECHNOLOGY PLATFORM FLOW */}
        <section className="py-20 relative bg-gradient-to-b from-[#07111D] to-[#081325]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                OUR TECHNOLOGY PLATFORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                End-to-End Smart Telemetry Flow
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
              {techPlatformSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center relative group">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center relative z-20 group-hover:border-brand-blue/60 group-hover:bg-brand-blue/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 cursor-pointer">
                      <Icon className="h-6 w-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[9px] font-bold text-[#3B82F6] mt-4 uppercase tracking-widest">
                      Step 0{i + 1}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200 mt-1 max-w-[120px] leading-relaxed group-hover:text-white transition-colors">
                      {step.name}
                    </h4>

                    {i < 5 && (
                      <div className="hidden md:block absolute top-8 left-[70%] w-[60%] h-[2px] bg-gradient-to-r from-brand-blue/25 to-brand-blue/5 z-0 pointer-events-none">
                        <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-brand-blue/35 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. INDUSTRIES WE SERVE */}
        <section className="py-20 bg-[#081325]/25 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                Tailored IoT Architectures Across Sectors
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {industriesList.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div key={i} className="bg-[#0b1a2d]/55 border border-white/5 hover:border-brand-blue/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:border-brand-blue/30 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                      {ind.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SUCCESS STORIES */}
        <section className="py-20 border-b border-white/5 bg-[#081325]/35 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                  SUCCESS STORIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                  Measurable Operational Impact
                </h2>
              </div>
              <Link href="#contact" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1 mt-4 sm:mt-0">
                <span>View All Projects</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {projectCards.map((proj, i) => (
                <div key={i} className="bg-[#0b1a2d]/65 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/35 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <div className="relative h-48 w-full">
                    <Image
                      src={proj.imageUrl}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#081325]/85 border border-white/10 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider text-slate-300">
                      {proj.title}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col space-y-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <div className="text-xs font-extrabold text-brand-lime pt-1">
                      {proj.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE INCSMART */}
        <section className="py-20 bg-gradient-to-b from-[#081325] to-[#07111D] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                WHY CHOOSE INCSMART?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                Decades of Engineering Excellence
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 text-center hover:border-brand-blue/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-lime" />
                </div>
                <div className="text-3xl font-black text-white font-heading">20%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  Average Energy Savings
                </div>
              </div>

              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 text-center hover:border-brand-blue/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="text-3xl font-black text-white font-heading">120+</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  Successful Projects Delivered
                </div>
              </div>

              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 text-center hover:border-brand-blue/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-brand-cyan" />
                </div>
                <div className="text-3xl font-black text-white font-heading">24×7</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  Real-time Monitoring & Support
                </div>
              </div>

              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 text-center hover:border-brand-blue/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-white font-heading">99.9%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  System Uptime & Reliability
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQs */}
        <section className="py-20 border-t border-white/5 bg-[#081325]/25 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                Any Questions? We Got You Covered
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-[#0b1a2d]/65 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-white pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. CTA CALL TO ACTION */}
        <section id="contact" className="py-20 relative bg-[#07111D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-[#0b1a2d] to-[#081325] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col space-y-4 max-w-2xl text-left">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-[2px] bg-brand-blue"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase">
                      Ready to Build
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    Smarter Infrastructure?
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Let our experts help you optimize operations, reduce costs, and achieve sustainability goals.
                  </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <a
                    href="tel:+919711888111"
                    className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-8 py-4 text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book a Free Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
