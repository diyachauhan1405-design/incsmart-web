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
  Cloud
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndiaMap from "@/components/IndiaMap";
import OurJourneyTimeline from "@/components/OurJourneyTimeline";
import { megaCityLocations } from "@/data/storeLocations";

// Graphic resources
import factoryRender from "../../../../public/factory-render.png";

const journeySteps = [
  {
    year: "2017",
    label: "Company Founded",
    description:
      "INCSMART was established in Surat, Gujarat with a vision to transform traditional infrastructure through Industrial IoT.",
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
  { title: "Innovation", icon: Lightbulb, color: "text-blue-400" },
  { title: "Integrity", icon: Shield, color: "text-emerald-400" },
  { title: "Reliability", icon: CheckCircle, color: "text-amber-400" },
  { title: "Sustainability", icon: Sun, color: "text-brand-lime" },
  { title: "Customer Success", icon: Users, color: "text-purple-400" },
  { title: "Continuous Improvement", icon: TrendingUp, color: "text-rose-400" }
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
                    ABOUT INCSMART
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
                  Engineering the <br />
                  Future of <br />
                  <span className="text-brand-cyan">Smart Infrastructure.</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Since 2017, INCSMART has been helping industries transform traditional infrastructure into intelligent, connected, and sustainable ecosystems through Industrial IoT, AI-powered analytics, and automation.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link href="/solutions" className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto">
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="#contact" className="border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-semibold transition-all flex items-center justify-center w-full sm:w-auto">
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

        {/* WHO WE ARE */}
        <section className="py-20 bg-[#081325]/25 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Isometric Building */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden group">
                  <Image 
                    src={factoryRender} 
                    alt="INCSMART Smart Infrastructure Architecture" 
                    fill 
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column details */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    WHO WE ARE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                    Building Smarter Infrastructure Across India
                  </h2>
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                    INCSMART is an Industrial IoT and automation company delivering end-to-end solutions that help organizations monitor, optimize, and automate their operations. We empower industries with real-time visibility, intelligent analytics, and sustainable technologies to improve efficiency and reduce operational costs.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                  <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 text-center">
                    <Briefcase className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                    <div className="text-xl font-bold font-heading text-white">120+</div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Projects Delivered</div>
                  </div>

                  <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 text-center">
                    <TrendingUp className="w-5 h-5 text-brand-lime mx-auto mb-2" />
                    <div className="text-xl font-bold font-heading text-white">20%</div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Average Energy Savings</div>
                  </div>

                  <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 text-center">
                    <Activity className="w-5 h-5 text-brand-cyan mx-auto mb-2" />
                    <div className="text-xl font-bold font-heading text-white">24×7</div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Real-time Monitoring</div>
                  </div>

                  <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-4 text-center">
                    <Building className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                    <div className="text-xl font-bold font-heading text-white">8+</div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Industries Served</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    VISION & MISSION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-heading">Our Driving Goals</h3>
                </div>

                <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 relative overflow-hidden hover:border-brand-blue/20 transition-all">
                  <div className="flex items-center space-x-3 mb-3">
                    <Eye className="w-5 h-5 text-brand-blue" />
                    <h4 className="text-sm font-bold text-white font-heading">OUR VISION</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    To build intelligent, sustainable infrastructure through innovation, connected technologies, and a commitment to excellence.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 relative overflow-hidden hover:border-brand-lime/20 transition-all h-full">
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
        <section className="py-20 bg-[#081325]/25 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Core Values grid */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    CORE VALUES
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-heading">What We Stand For</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {coreValues.map((val, i) => {
                    const Icon = val.icon;
                    return (
                      <div key={i} className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-5 flex items-center space-x-4 hover:border-brand-blue/30 transition-all">
                        <Icon className={`w-5 h-5 ${val.color} flex-shrink-0`} />
                        <span className="text-xs font-bold text-slate-200">{val.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Why Choose us bullet columns */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    WHY CHOOSE INCSMART?
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-heading">Our Competitive Edge</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Industry Expertise</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Customized Solutions</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Scalable & Secure Platform</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>24×7 Support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>AI-Driven Analytics</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Pan India Deployment</span>
                    </div>
                  </div>
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
                    Partner with INCSMART to transform your facilities through intelligent automation, energy optimization, and real-time monitoring.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="tel:+919711888111"
                    className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-6 py-3.5 text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
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
