"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  FileText, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  BarChart3,
  Layers,
  Cpu
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: "pvr-inox",
    client: "PVR INOX Multiplex Chain",
    title: "Intelligent HVAC Automation & 20% Energy Reduction Across Multiplex Theaters",
    industry: "Commercial Entertainment & Malls",
    heroImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Energy Savings", value: "20%", sub: "Verified utility bill reduction" },
      { label: "Auditoriums Covered", value: "14", sub: "Across 3 tier-1 metro cities" },
      { label: "Payback Period", value: "8.5 Mo", sub: "Full CAPEX investment return" },
      { label: "Comfort Rating", value: "98.4%", sub: "Patron feedback index" }
    ],
    background:
      "PVR INOX is India's premier film exhibition company operating hundreds of screens nationwide. Cinema auditoriums present a unique thermal challenge: cooling demands fluctuate wildly between packed weekend blockbuster screenings and vacant weekday mornings. Running chillers and AHUs at full load during off-peak hours was generating massive utility waste.",
    challenge:
      "Legacy BMS lacked occupancy integration and dynamic load modulation. Manual adjustments by floor staff resulted in overcooling complaints, chiller short-cycling, and monthly power bills exceeding budgetary forecasts by over 25%.",
    solution:
      "IncSmart deployed edge IoT gateways communicating over BACnet MS/TP with existing Trane and Daikin chillers, paired with carbon dioxide (CO2) and occupancy sensors in every screening hall. An AI-driven demand algorithm continuously recalculates fresh-air CFM and setpoint temperatures 15 minutes before show start, dynamically ramping down cooling during intervals and credits.",
    implementation: [
      "Installed 14 edge micro-gateways connected directly to air handling unit (AHU) frequency drives.",
      "Integrated ticket booking API telemetry to pre-cool auditoriums based on actual seat reservation counts.",
      "Deployed 24×7 real-time cloud telemetry dashboards with automatic temperature drift alerts.",
      "Standardized temperature protocols across multiple properties from a central facility command view."
    ],
    results:
      "Within 60 days of commissioning, PVR INOX verified an average 20% drop in HVAC power consumption. Air quality index (AQI) and patron comfort scores improved significantly, and the system achieved total payback within 9 months.",
    conclusion:
      "By replacing static schedule timers with dynamic occupancy-based AI cooling, IncSmart proved that massive energy efficiency gains can be unlocked without replacing expensive chiller capital equipment."
  },
  {
    id: "western-railway",
    title: "Remote IoT Substation Health & Predictive Monitoring for Indian Railways",
    client: "Western Railway (Indian Railways)",
    industry: "Rail Transit & Critical Infrastructure",
    heroImage: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Downtime Reduction", value: "15%", sub: "Prevented line failures" },
      { label: "Substations Monitored", value: "18", sub: "Across Western Zone tracks" },
      { label: "Alert Dispatch Time", value: "< 2s", sub: "GSM / Ethernet dual failover" },
      { label: "System Uptime", value: "99.95%", sub: "Continuous NOC visibility" }
    ],
    background:
      "Western Railway operates one of the busiest electrified suburban and long-distance rail networks in the world. High-voltage traction power substations supply 25kV power to overhead catenary lines 24 hours a day, where unpredicted failure causes cascading passenger transit delays.",
    challenge:
      "Substations situated in remote, unmanned track sections relied on manual logbook readings taken once every 8 hours. Transformer oil overheating and circuit breaker trip anomalies were only detected after power cutouts occurred, resulting in extended troubleshooting times.",
    solution:
      "IncSmart deployed ruggedized industrial edge telemetry units housed in IP66 enclosures. High-accuracy current transformers, RTD temperature probes, and SF6 gas pressure sensors were connected to our gateway over RS-485 Modbus, streaming critical vitals to an encrypted cloud rail NOC with automated SMS and WhatsApp alarms.",
    implementation: [
      "Engineered surge-hardened edge controllers capable of operating in severe electrical noise environments.",
      "Dual cellular SIM failover with automatic local offline data caching during connectivity drops.",
      "Implemented predictive anomaly detection models identifying transformer winding degradation weeks before thermal runaway.",
      "Integrated live multi-site dashboard into the Divisional Railway Manager's operations control center."
    ],
    results:
      "The predictive monitoring system proactively flagged 4 severe transformer hot-spots and 2 incipient circuit breaker contact faults, completely averting major route outages and reducing maintenance dispatch costs by 32%.",
    conclusion:
      "IncSmart provided Indian Railways with a mission-critical, enterprise-grade IoT platform that transforms reactive repairs into proactive infrastructure management."
  },
  {
    id: "ultratech-cement",
    title: "Heavy Equipment Vibration Telemetry & Power Optimization at Process Plants",
    client: "UltraTech Cement Ltd.",
    industry: "Heavy Industry & Process Manufacturing",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Motor Downtime", value: "-100%", sub: "Zero unplanned kiln halts" },
      { label: "Heavy Motors Monitored", value: "40+", sub: "Ball mills & kiln blowers" },
      { label: "Power Factor Gain", value: "+12%", sub: "Reduced reactive penalty" },
      { label: "Data Points / Day", value: "1.2M", sub: "Real-time vibration FFT stream" }
    ],
    background:
      "UltraTech Cement is the largest manufacturer of grey cement and ready-mix concrete in India. Cement production relies on giant raw-material ball mills and high-temperature rotary kilns driven by multi-megawatt electric motors that operate continuously in extreme dust and heat.",
    challenge:
      "Bearing fatigue and mechanical misalignment on raw mill drive motors could cause sudden bearing seizures. An unplanned kiln shutdown takes over 36 hours to cool down and reheat, costing tens of lakhs of rupees in lost throughput.",
    solution:
      "IncSmart installed tri-axial wireless vibration and surface temperature telemetry nodes on motor drive ends and non-drive ends. Vibration data is analyzed on the edge using Fast Fourier Transform (FFT) algorithms to identify 1X/2X rotational harmonics, bearing cage flaws, and electrical imbalance.",
    implementation: [
      "Installed magnetic-mount wireless sensor nodes across 40 critical 500kW+ induction motors.",
      "Configured high-frequency burst sampling (up to 10kHz) for detailed velocity and acceleration spectral breakdown.",
      "Connected live power analyzers to calculate real-time energy intensity per metric ton of pulverized clinker.",
      "Delivered real-time condition-based maintenance (CBM) dashboards to the plant maintenance engineering bay."
    ],
    results:
      "Identified inner race bearing flaking on Raw Mill #3 four weeks before critical failure, allowing planned replacement during scheduled shift downtime. Harmonic mitigation and load balancing also saved an estimated 12% in peak power costs.",
    conclusion:
      "Condition-based edge IoT delivers astronomical ROI in process manufacturing by eliminating unplanned downtime and optimizing motor energy profiles."
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#081325]/70 backdrop-blur-md mb-6">
              <FileText className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                Detailed Project Stories
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
              In-Depth <span className="text-gradient-cyan-lime font-bold">Case Studies</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore thorough technical dossiers documenting the challenges, engineering solutions, technology architecture, and verified metrics delivered by IncSmart.
            </p>
          </div>

          {/* Case Studies Dossiers */}
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article 
                key={study.id} 
                id={study.id}
                className="rounded-3xl border border-white/10 bg-[#081325]/60 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] scroll-mt-28"
              >
                {/* Dossier Header Banner */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-35"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081325] via-[#081325]/60 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan mb-3">
                      {study.industry} • {study.client}
                    </div>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight font-heading max-w-4xl">
                      {study.title}
                    </h2>
                  </div>
                </div>

                {/* Metrics Highlight Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/5 bg-[#060D17]/80 divide-y md:divide-y-0 md:divide-x divide-white/5">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="p-5 text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-brand-lime font-heading">
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-white mt-1">
                        {metric.label}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {metric.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dossier Content Body */}
                <div className="p-6 sm:p-10 space-y-8">
                  
                  {/* Background & Challenge */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        1. Background & Context
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {study.background}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                        2. The Challenge
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                  </div>

                  {/* IncSmart Solution */}
                  <div className="p-6 rounded-2xl border border-white/5 bg-[#0C1A2E]/50 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan flex items-center gap-2">
                      <Zap className="w-4 h-4 text-brand-cyan" />
                      3. The IncSmart Solution & Implementation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {study.solution}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {study.implementation.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results & Conclusion */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-brand-lime" />
                        4. Measured Results & ROI
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {study.results}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                        5. Key Takeaways & Conclusion
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {study.conclusion}
                      </p>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
