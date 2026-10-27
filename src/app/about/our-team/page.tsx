"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight,
  TrendingUp,
  Shield,
  Briefcase,
  Globe,
  CheckCircle,
  Cpu,
  Network,
  Activity,
  Tv,
  Zap,
  Building,
  Factory,
  Train,
  Hospital,
  Home,
  Sun,
  GraduationCap,
  ShoppingBag,
  Eye,
  Target,
  Lightbulb,
  Heart,
  Users,
  Award,
  ChevronRight,
  Phone,
  Rocket,
  Cloud,
  Mail,
  MessageSquare,
  Sliders,
  ShieldCheck,
  Headphones,
  MapPin,
  Sparkles
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndiaMap from "@/components/IndiaMap";
import OurJourneyTimeline from "@/components/OurJourneyTimeline";
import IndustriesSection from "@/components/IndustriesSection";
import { megaCityLocations } from "@/data/storeLocations";


const journeySteps = [
  {
    year: "2017",
    label: "Company Founded",
    description:
      "IncSmart was established in Surat, Gujarat with a vision to transform traditional infrastructure through Industrial IoT.",
    icon: Rocket,
  },
  {
    year: "2018",
    label: "First Industrial IoT Deployment",
    description:
      "Delivered our first end-to-end IoT deployment, connecting sensors, gateways, and real-time monitoring for a manufacturing client.",
    icon: Cpu,
  },
  {
    year: "2020",
    label: "Cloud Monitoring Platform Launched",
    description:
      "Launched our unified cloud platform enabling 24×7 remote monitoring, analytics dashboards, and predictive alerts.",
    icon: Cloud,
  },
  {
    year: "2022",
    label: "Enterprise Expansion",
    description:
      "Expanded across major Indian cities, partnering with leading enterprises in manufacturing, railways, and hospitality.",
    icon: Building,
  },
  {
    year: "2025",
    label: "120+ Projects Delivered",
    description:
      "Crossed 120+ successful project deployments pan-India, delivering 20% average energy savings and 99.9% platform uptime.",
    icon: Award,
  },
];

const coreValues = [
  { 
    title: "Innovation", 
    tag: "Future-Ready",
    desc: "Pioneering industrial IoT telemetry, smart edge processors, and cloud algorithms.",
    icon: Lightbulb, 
    color: "text-cyan-400",
    glow: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
    iconBg: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
  },
  { 
    title: "Integrity", 
    tag: "Truth-in-Data",
    desc: "100% auditable sensor telemetry and verifiable, transparent energy metrics.",
    icon: Shield, 
    color: "text-emerald-400",
    glow: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
    iconBg: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
  },
  { 
    title: "Reliability", 
    tag: "99.9% Uptime",
    desc: "Industrial-grade hardware engineered for continuous failover in harsh environments.",
    icon: CheckCircle, 
    color: "text-amber-400",
    glow: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
    iconBg: "bg-amber-500/10 border-amber-500/25 text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/20"
  },
  { 
    title: "Sustainability", 
    tag: "Decarbonize",
    desc: "Real, measurable kWh reduction directly lowering corporate carbon footprints.",
    icon: Sun, 
    color: "text-brand-lime",
    glow: "hover:border-lime-500/50 hover:shadow-[0_0_25px_rgba(132,204,22,0.2)]",
    iconBg: "bg-lime-500/10 border-lime-500/25 text-brand-lime",
    badgeBg: "bg-lime-500/10 text-lime-300 border-lime-500/20"
  },
  { 
    title: "Customer Success", 
    tag: "Client First",
    desc: "Dedicated engineering partnership from audit through lifetime operational tuning.",
    icon: Users, 
    color: "text-purple-400",
    glow: "hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
    iconBg: "bg-purple-500/10 border-purple-500/25 text-purple-400",
    badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20"
  },
  { 
    title: "Continuous Improvement", 
    tag: "Adaptive AI",
    desc: "Self-refining machine learning models continuously calibrating to load variations.",
    icon: TrendingUp, 
    color: "text-rose-400",
    glow: "hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.2)]",
    iconBg: "bg-rose-500/10 border-rose-500/25 text-rose-400",
    badgeBg: "bg-rose-500/10 text-rose-300 border-rose-500/20"
  }
];

const competitiveEdges = [
  {
    title: "Industry Expertise",
    metric: "20+ Yrs Exp",
    desc: "Deep multi-sector IoT mastery across heavy rail, cement, multiplexes & healthcare.",
    icon: Briefcase,
    color: "text-cyan-400",
    glow: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
    iconBg: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
  },
  {
    title: "Customized Solutions",
    metric: "100% Bespoke",
    desc: "Hardware, firmware & cloud dashboards calibrated to your specific machinery & protocols.",
    icon: Sliders,
    color: "text-brand-lime",
    glow: "hover:border-lime-500/50 hover:shadow-[0_0_25px_rgba(132,204,22,0.2)]",
    iconBg: "bg-lime-500/10 border-lime-500/25 text-brand-lime",
    badgeBg: "bg-lime-500/10 text-lime-300 border-lime-500/20"
  },
  {
    title: "Scalable & Secure Platform",
    metric: "Enterprise SLA",
    desc: "End-to-end encrypted telemetry ingestion with zero-trust cloud data pipelines.",
    icon: ShieldCheck,
    color: "text-blue-400",
    glow: "hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
    iconBg: "bg-blue-500/10 border-blue-500/25 text-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/20"
  },
  {
    title: "24×7 NOC Support",
    metric: "< 15m Response",
    desc: "Dedicated round-the-clock telemetry surveillance with instant proactive fault dispatch.",
    icon: Headphones,
    color: "text-emerald-400",
    glow: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
    iconBg: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
  },
  {
    title: "AI-Driven Analytics",
    metric: "Self-Optimizing",
    desc: "Continuous wet-bulb enthalpy tuning, vibration alerts, and automated load-shedding.",
    icon: Activity,
    color: "text-amber-400",
    glow: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
    iconBg: "bg-amber-500/10 border-amber-500/25 text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/20"
  },
  {
    title: "Pan India Deployment",
    metric: "12+ States",
    desc: "Rapid turnkey rollout across 12+ states with nationwide field engineering support.",
    icon: MapPin,
    color: "text-purple-400",
    glow: "hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
    iconBg: "bg-purple-500/10 border-purple-500/25 text-purple-400",
    badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20"
  }
];

const platformSteps = [
  { name: "Sensors", icon: Cpu },
  { name: "Gateway", icon: Network },
  { name: "Cloud", icon: Globe },
  { name: "AI Analytics", icon: Activity },
  { name: "Dashboard", icon: Tv },
  { name: "Automation", icon: Zap }
];

const industriesList = [
  { title: "Manufacturing", icon: Factory },
  { title: "Railways", icon: Train },
  { title: "Hospitals", icon: Hospital },
  { title: "Hotels", icon: Home },
  { title: "Solar", icon: Sun },
  { title: "Commercial Buildings", icon: Building },
  { title: "Education", icon: GraduationCap },
  { title: "Retail", icon: ShoppingBag }
];

const brandLogos = [
  { name: "PVR INOX", type: "text", text: "PVR INOX", desc: "HVAC Energy Optimization" },
  { name: "INDIAN RAILWAYS", type: "text", text: "INDIAN RAILWAYS", desc: "Remote Infrastructure Monitoring" },
  { name: "UltraTech Cement", type: "text", text: "UltraTech Cement", desc: "Industrial Automation" },
  { name: "TAJ", type: "text", text: "TAJ Hotels & Resorts", desc: "Smart Energy Management" },
  { name: "adani", type: "text", text: "adani Energy Solutions", desc: "Grid Integration" },
  { name: "Amul", type: "text", text: "Amul", desc: "Cold Chain Automation" }
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-[#07111D] text-white flex flex-col overflow-hidden">
      <Header />

      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="relative py-20 border-b border-white/5 bg-[#07111D] overflow-hidden bg-grid-pattern">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    ABOUT IncSmart
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
                  Engineering the <br />
                  Future of <br />
                  <span className="text-brand-cyan">Smart Infrastructure.</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Since 2017, IncSmart has been helping industries transform traditional infrastructure into intelligent, connected, and sustainable ecosystems through Industrial IoT, AI-powered analytics, and automation.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link href="/solutions" className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto">
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-semibold transition-all flex items-center justify-center w-full sm:w-auto">
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right Column — Pan India availability map */}
              <div className="lg:col-span-7 relative flex justify-center">
                <IndiaMap
                  locations={megaCityLocations}
                  variant="compact"
                  className="w-full"
                />
              </div>

            </div>
          </div>
        </section>

        {/* MEET OUR TEAM SECTION */}
        <section className="py-20 bg-[#07111D] border-b border-white/5 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
                Meet Our Team
              </h2>
              <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto">
                The visionary minds driving innovation, engineering excellence, and smart infrastructure solutions at IncSmart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Viral Patel */}
              <div className="group bg-[#0b1a2d]/55 border border-white/5 hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-5 text-brand-blue text-xl font-bold font-heading">
                    VP
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">Viral Patel</h3>
                  <p className="text-xs text-[#06B6D4] font-medium mt-1 mb-6">Founder & CEO</p>
                  
                  <div className="w-full space-y-3 pt-4 border-t border-white/5 text-left">
                    <a href="tel:+919837896176" className="flex items-center gap-3 text-xs text-slate-400 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-[#06B6D4] shrink-0" />
                      <span>+91 98378 96176</span>
                    </a>
                    <a href="mailto:viral.patel@incsmart.in" className="flex items-center gap-3 text-xs text-slate-400 hover:text-white transition-colors break-all">
                      <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                      <span>viral.patel@incsmart.in</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bhaumik Patel */}
              <div className="group bg-[#0b1a2d]/55 border border-white/5 hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-5 text-brand-blue text-xl font-bold font-heading">
                    BP
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">Bhaumik Patel</h3>
                  <p className="text-xs text-[#06B6D4] font-medium mt-1 mb-6">Founder & Managing Director (MD)</p>
                  
                  <div className="w-full space-y-3 pt-4 border-t border-white/5 text-left">
                    <a href="tel:+917984186121" className="flex items-center gap-3 text-xs text-slate-400 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-[#06B6D4] shrink-0" />
                      <span>+91 79841 86121</span>
                    </a>
                    <a href="mailto:bhaumikpatel@incsmart.in" className="flex items-center gap-3 text-xs text-slate-400 hover:text-white transition-colors break-all">
                      <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                      <span>bhaumikpatel@incsmart.in</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prit Patel */}
              <div className="group bg-[#0b1a2d]/55 border border-white/5 hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-5 text-brand-blue text-xl font-bold font-heading">
                    PP
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">Prit Patel</h3>
                  <p className="text-xs text-[#06B6D4] font-medium mt-1 mb-6">Managing Director (MD)</p>
                  
                  <div className="w-full space-y-3 pt-4 border-t border-white/5 text-left">
                    <a href="tel:+919274040750" className="flex items-center gap-3 text-xs text-slate-400 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-[#06B6D4] shrink-0" />
                      <span>+91 92740 40750</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SERVICE & SUPPORT SECTION */}
        <section className="py-20 bg-[#081325]/30 border-b border-white/5 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                ENGINEERING HELP DESK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
                Technical Service & Support
              </h2>
              <p className="text-sm text-slate-400 mt-3 max-w-2xl mx-auto">
                For system deployments, hardware troubleshooting, and ongoing IoT monitoring, our engineering desk is ready to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {/* 1. Mayank Sagar */}
              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-5 hover:border-brand-blue/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-xs font-bold shrink-0">
                    MS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Mayank Sagar</h4>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Support Engineer</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a href="tel:+917043690021" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>+91 70436 90021</span>
                  </a>
                </div>
              </div>

              {/* 2. Chirag Barot */}
              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-5 hover:border-brand-blue/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-xs font-bold shrink-0">
                    CB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Chirag Barot</h4>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Support Engineer</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a href="tel:+919316436699" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>+91 93164 36699</span>
                  </a>
                </div>
              </div>

              {/* 3. Dharmendra Jadav */}
              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-5 hover:border-brand-blue/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-xs font-bold shrink-0">
                    DJ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Dharmendra Jadav</h4>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Support Engineer</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a href="tel:+919824962067" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>+91 98249 62067</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Central Support Email Callout */}
            <div className="bg-[#0b1a2d]/60 border border-white/10 rounded-2xl p-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left hover:border-brand-blue/20 transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Central Support Email</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Reach out to our core operations team</p>
                </div>
              </div>
              <a href="mailto:service@incsmart.in" className="text-xs font-bold text-brand-cyan hover:text-white transition-colors break-all">
                service@incsmart.in
              </a>
            </div>

          </div>
        </section>

        {/* INDUSTRIES WE SERVE PER SECTION 19 & 20 OF BRIEF */}
        <IndustriesSection />

        {/* OUR JOURNEY & VISION/MISSION */}
        <section className="py-20 bg-[#07111D] relative border-b border-white/5 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Horizontal Journey — full width */}
            <div className="mb-16">
              <div className="text-center md:text-left mb-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                  OUR JOURNEY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-heading">
                  Milestones & History
                </h3>
                <p className="text-xs text-slate-400 mt-2 max-w-xl md:max-w-none">
                  From a bold startup in 2017 to 120+ projects across India — explore our growth story.
                </p>
              </div>

              <OurJourneyTimeline steps={journeySteps} />
            </div>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                  VISION & MISSION
                </span>
                <h3 className="text-xl font-bold text-white mt-1 font-heading">Our Driving Goals</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 relative overflow-hidden hover:border-brand-blue/20 transition-all h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-3">
                    <Eye className="w-5 h-5 text-brand-blue" />
                    <h4 className="text-sm font-bold text-white font-heading">OUR VISION</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    To build intelligent, sustainable infrastructure through innovation, connected technologies, and a commitment to excellence.
                  </p>
                </div>

                <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 relative overflow-hidden hover:border-brand-lime/20 transition-all h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="w-5 h-5 text-[#84CC16]" />
                    <h4 className="text-sm font-bold text-white font-heading">OUR MISSION</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    To deliver reliable and scalable IoT solutions that improve operational efficiency, reduce costs, and enable smarter decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES & WHY CHOOSE US */}
        <section className="py-20 md:py-28 bg-[#081325]/30 relative border-b border-white/5 overflow-hidden">
          {/* Background Ambient Lighting */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[320px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[320px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              
              {/* Left Column: What We Stand For (Core Values) */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>CORE VALUES</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    What We Stand For
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg leading-relaxed">
                    Our foundational engineering principles that guide how we design hardware, write telemetry algorithms, and serve our enterprise partners.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {coreValues.map((val, i) => {
                    const Icon = val.icon;
                    return (
                      <div 
                        key={i} 
                        className={`group relative p-4 rounded-2xl bg-gradient-to-br from-[#0b1a2d]/90 via-[#081527]/90 to-[#07111e]/90 border border-white/10 ${val.glow} transition-all duration-300 flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${val.iconBg}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border ${val.badgeBg}`}>
                              {val.tag}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                            {val.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                            {val.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Our Competitive Edge */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-300 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                    <Award className="w-3 h-3 text-blue-400" />
                    <span>WHY CHOOSE INCSMART?</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    Our Competitive Edge
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg leading-relaxed">
                    Proven operational advantages that differentiate IncSmart from generic automation vendors and unverified software dashboards.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {competitiveEdges.map((edge, i) => {
                    const Icon = edge.icon;
                    return (
                      <div 
                        key={i} 
                        className={`group relative p-4 rounded-2xl bg-gradient-to-br from-[#0c1f36]/90 via-[#09182a]/90 to-[#07111d]/90 border border-white/10 ${edge.glow} transition-all duration-300 flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${edge.iconBg}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${edge.badgeBg}`}>
                              {edge.metric}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors font-heading">
                            {edge.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                            {edge.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNOLOGY FLOW & INDUSTRIES */}
        <section className="py-20 bg-[#07111D] relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Tech Flow list */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                    OUR TECHNOLOGY PLATFORM
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-heading">Smart Telemetry Flow</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {platformSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={i} className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-brand-blue" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-300">{step.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Industries serve grid */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                    INDUSTRIES WE SERVE
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-heading">Tailored Solutions</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {industriesList.map((ind, i) => {
                    const Icon = ind.icon;
                    return (
                      <div key={i} className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                        <Icon className="w-5 h-5 text-brand-blue mb-2" />
                        <span className="text-[10px] font-semibold text-slate-300">{ind.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & TRUSTED BRANDS */}
        <section className="py-20 bg-[#081325]/25 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Achievements Column */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    ACHIEVEMENTS
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-heading">Proven Track Record</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 text-center">
                    <div className="text-xl font-bold font-heading text-white">120+</div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Projects Delivered</div>
                  </div>
                  <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 text-center">
                    <div className="text-xl font-bold font-heading text-white">20%</div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Energy Savings</div>
                  </div>
                  <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 text-center">
                    <div className="text-xl font-bold font-heading text-white">99.9%</div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Platform Availability</div>
                  </div>
                </div>
              </div>

              {/* Trusted Brands Column */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    TRUSTED BY LEADING ORGANISATIONS
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-heading">Enterprise Partners</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {brandLogos.map((brand, i) => (
                    <div key={i} className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 flex items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-400">{brand.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA BOTTOM PANEL */}
        <section id="contact" className="py-20 relative bg-[#07111D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-[#0b1a2d] to-[#081325] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col space-y-4 max-w-2xl text-left">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-[2px] bg-[#3b82f6]"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase">
                      Ready to Build
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    Smarter Infrastructure?
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Partner with IncSmart to transform your facilities through intelligent automation, energy optimization, and real-time monitoring.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="https://wa.me/919711888111?text=Hello%20IncSmart%20Team%2C%20I%20would%20like%20to%20discuss%20your%20IoT%20and%20automation%20solutions%20and%20schedule%20a%20consultation.%20Please%20connect%20with%20me%20regarding%20the%20same."
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-6 py-3.5 text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Book a Consultation</span>
                  </a>
                  <a
                    href="mailto:info@incsmart.in"
                    className="border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-lg px-6 py-3.5 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Contact Sales</span>
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
