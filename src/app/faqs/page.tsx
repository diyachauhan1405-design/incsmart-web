"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  ArrowRight,
  Phone,
  HelpCircle,
  Check,
  Zap,
  ShieldCheck,
  Clock,
  Layers,
  Building2,
  Copy,
  SlidersHorizontal,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Comparison matrix data converted from comparative questions
const comparisonMatrixData = [
  {
    parameter: "System Architecture",
    description: "Hardware footprint, controllers & data flow",
    traditional: "Heavy on-premise servers, proprietary PLC enclosures, and rigid RS-485 conduits. Single point of failure.",
    incsmart: "Lightweight edge micro-gateways with secure cloud processing, open wireless mesh, and AI telemetry.",
    incsmartAdvantage: "Cloud-native with edge failover",
  },
  {
    parameter: "Integration & Retrofit",
    description: "Compatibility with existing meters & chillers",
    traditional: "Requires ripping out legacy controllers, replacing switchgear, and closed proprietary protocol cards.",
    incsmart: "100% non-intrusive retrofit via open protocols: BACnet IP/MSTP, Modbus RTU/TCP, MQTT, and OPC-UA.",
    incsmartAdvantage: "Zero rewiring or plant disruption",
  },
  {
    parameter: "Deployment Timeline",
    description: "Speed from site audit to live commissioning",
    traditional: "3 to 9 months of invasive cabling, extensive civil rework, and prolonged downtime.",
    incsmart: "4 to 8 weeks rapid turnkey rollout with non-disruptive installation on active operating facilities.",
    incsmartAdvantage: "Up to 5× faster rollout",
  },
  {
    parameter: "Energy Optimization",
    description: "HVAC & electrical load efficiency",
    traditional: "Static timer loops and fixed setpoints (e.g., constant 50 Hz fans). No weather or enthalpy tuning.",
    incsmart: "Dynamic continuous AI load balancing, wet-bulb enthalpy tracking, and phantom load elimination.",
    incsmartAdvantage: "15%–30% (avg. 20%) verified savings",
  },
  {
    parameter: "Multi-Site Operations",
    description: "Centralized monitoring of multiple facilities",
    traditional: "Siloed per facility. Operators must physically sit at each building's dedicated on-prem PC workstation.",
    incsmart: "Unified fleet-wide portal across 120+ facilities with national benchmarking and multi-tenant access.",
    incsmartAdvantage: "Single glass pane for all sites",
  },
  {
    parameter: "CapEx & Financial ROI",
    description: "Upfront capital investment and payback",
    traditional: "Exorbitant upfront software licenses, expensive server rooms, and locked-in high annual maintenance (AMC).",
    incsmart: "50%–70% lower CapEx with modular expansion, no local server costs, and rapid 12–18 month ROI payback.",
    incsmartAdvantage: "Fast ROI in 12–18 months",
  },
  {
    parameter: "Offline Reliability",
    description: "Operation during internet or network outages",
    traditional: "Server crashes or local communication errors freeze supervisory logic and historic trend logs.",
    incsmart: "Industrial edge controllers run PID loops and safety sequences locally; flash buffers sync on reconnect.",
    incsmartAdvantage: "Zero downtime edge autonomy",
  },
  {
    parameter: "Accessibility & UX",
    description: "Platform interface, alerts & mobile controls",
    traditional: "Complex legacy desktop SCADA interfaces accessible only on local control room computers.",
    incsmart: "Modern responsive web dashboard, iOS/Android mobile alerts, instant WhatsApp/SMS escalation.",
    incsmartAdvantage: "Anywhere, anytime access",
  },
];

// Quick stat metrics for Hero section
const heroMetrics = [
  {
    label: "Deployment",
    value: "4–8 Weeks",
    subtext: "Non-intrusive retrofit",
    accent: "text-cyan-400",
    bg: "border-cyan-500/20 bg-cyan-950/20",
  },
  {
    label: "Energy Savings",
    value: "15%–30%",
    subtext: "20% verified average",
    accent: "text-emerald-400",
    bg: "border-emerald-500/20 bg-emerald-950/20",
  },
  {
    label: "Offline Uptime",
    value: "100% Edge",
    subtext: "Zero downtime failover",
    accent: "text-sky-400",
    bg: "border-sky-500/20 bg-sky-950/20",
  },
  {
    label: "Multi-Site Fleet",
    value: "120+ Projects",
    subtext: "Unified cloud dashboard",
    accent: "text-lime-400",
    bg: "border-lime-500/20 bg-lime-950/20",
  },
];

// Categorized standard FAQs
const faqCategories = [
  {
    title: "About IncSmart",
    icon: Building2,
    faqs: [
      {
        question: "What is IncSmart and what does the company do?",
        answer:
          "IncSmart is an Industrial IoT and automation company founded in 2017. We deliver end-to-end solutions that help organizations monitor, optimize, and automate their operations through connected sensors, cloud platforms, AI analytics, and intelligent automation — transforming traditional infrastructure into smart, sustainable ecosystems.",
        highlight: "120+ industrial & commercial deployments pan-India.",
      },
      {
        question: "Which industries does IncSmart serve?",
        answer:
          "We serve manufacturing, railways, hospitals, hotels, solar plants, commercial buildings, education campuses, and retail & malls. Our solutions are tailored to each industry's unique operational requirements, from HVAC optimization in cinemas to remote infrastructure monitoring for railways.",
        highlight: "Tailored architectures for diverse operational environments.",
      },
      {
        question: "Where are IncSmart offices located?",
        answer:
          "Our head office is in Gandhinagar, Gujarat (E-202, GIDC Rd, SECTOR-26, Sector 26). We deploy solutions pan-India and support clients across multiple geographical locations from a unified cloud platform.",
        highlight: "Pan-India deployment capabilities.",
      },
      {
        question: "Does IncSmart work with enterprise clients like PVR, Indian Railways, and Taj Hotels?",
        answer:
          "Yes. We have delivered 120+ projects for leading organizations including PVR INOX, Indian Railways, UltraTech Cement, Taj Hotels & Resorts, Adani Energy Solutions, and Amul — across HVAC optimization, industrial automation, smart energy management, and remote monitoring.",
        highlight: "Trusted by Fortune-tier and public enterprise brands.",
      },
    ],
  },
  {
    title: "Solutions & Architecture",
    icon: Layers,
    faqs: [
      {
        question: "What IoT solutions does IncSmart offer?",
        answer:
          "Our core solutions include Industrial IoT & Automation, HVAC Optimization, Energy Management, Building Management Systems (BMS), and Fire Monitoring. Each solution covers the full stack — from sensors and edge gateways to cloud analytics, dashboards, and automated control loops.",
        highlight: "Full-stack edge-to-cloud ecosystem.",
      },
      {
        question: "If we do not have any BMS at all, can IncSmart replace the need for one?",
        answer:
          "Yes, absolutely. For greenfield facilities, commercial buildings, retail chains, or mid-sized industrial plants without an installed system, our IoT platform acts as a complete, modern replacement for a traditional BMS — delivering full equipment automation at 50%–70% lower CapEx.",
        highlight: "Turnkey BMS replacement with massive CapEx savings.",
      },
      {
        question: "How secure is the IncSmart cloud platform?",
        answer:
          "Our platform is built with enterprise-grade security including encrypted TLS/SSL data transmission, secure hardware device authentication, role-based access controls (RBAC), and continuous monitoring. We maintain 99.9% platform availability with redundant cloud infrastructure.",
        highlight: "TLS encrypted data transmission & 99.9% uptime SLA.",
      },
    ],
  },
  {
    title: "Implementation & Support",
    icon: ShieldCheck,
    faqs: [
      {
        question: "Do you provide 24×7 support and monitoring?",
        answer:
          "Absolutely. Our Network Operations Center (NOC) operates 24×7 to monitor alerts, perform predictive diagnostics, and ensure maximum system uptime. Clients also receive dedicated account support and on-site assistance whenever needed.",
        highlight: "24×7 NOC with automated anomaly alerts.",
      },
      {
        question: "Do you offer custom solutions for specific facilities?",
        answer:
          "Yes. Every deployment is customized to your facility's layout, equipment, protocols, and operational goals. We conduct site assessments and design tailored architectures — from sensor placement to dashboard configuration and automation rules.",
        highlight: "Custom engineering tailored to your facility setup.",
      },
      {
        question: "How does IncSmart ensure zero downtime during retrofit installation?",
        answer:
          "Our non-intrusive edge gateways connect in parallel with your existing panels and control networks using CT clamps, splitters, and open protocol buses. Your equipment keeps running normally with zero scheduled plant downtime during deployment.",
        highlight: "Parallel non-intrusive tap with zero process interruption.",
      },
    ],
  },
  {
    title: "Getting Started",
    icon: Zap,
    faqs: [
      {
        question: "How do I request a demo or facility energy audit?",
        answer:
          "You can book a demo through our Contact page, call us at +91 97118 88111, or email info@incsmart.in. Our energy engineers will schedule an initial consultation to understand your requirements and walk you through relevant client case studies.",
        highlight: "Free preliminary energy assessment available.",
      },
      {
        question: "What information should I prepare before contacting IncSmart?",
        answer:
          "Helpful details include your facility type and square footage, current systems (BMS brand, HVAC tonnage, energy meters), primary operational pain points (high power bills, downtime, manual logging), and number of locations. This helps us recommend the exact solution quickly.",
        highlight: "Facility size, utility bills, and equipment specs.",
      },
    ],
  },
];

export default function FaqsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [copiedToast, setCopiedToast] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleCopySummary = () => {
    const summaryText = `IncSmart IoT Automation vs. Traditional BMS - Comparison Summary
1. System Architecture: Traditional BMS relies on heavy on-premise servers and rigid RS-485 conduits, while IncSmart uses lightweight edge micro-gateways and cloud AI telemetry.
2. Integration & Retrofit: Traditional BMS requires ripping out legacy equipment. IncSmart is 100% retrofit-friendly over BACnet, Modbus, and OPC-UA with zero rewiring.
3. Deployment Speed: Traditional BMS takes 3–9 months. IncSmart deploys in 4–8 weeks with non-disruptive installation.
4. Energy Reduction: Traditional BMS uses static timers. IncSmart delivers 15%–30% (avg. 20%) dynamic energy savings via real-time load tuning.
5. Multi-Site Fleet: Traditional BMS is siloed per facility. IncSmart provides a single pane of glass across 120+ projects nationally.
6. CapEx & Payback: IncSmart offers 50%–70% lower CapEx with full ROI payback within 12–18 months.
7. Offline Reliability: IncSmart Industrial Edge Controllers run PID and safety logic locally with zero downtime when offline.

Contact IncSmart: +91 97118 88111 | info@incsmart.in`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#07111D] text-white flex flex-col overflow-hidden">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 border-b border-white/5 bg-[#07111D] overflow-hidden bg-grid-pattern">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-[11px] font-bold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Interactive Knowledge Base &amp; Comparison</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-heading mb-6 max-w-4xl mx-auto">
              IoT Automation vs.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Traditional BMS
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore how IncSmart&apos;s edge-to-cloud intelligence cuts energy bills by 20%, integrates seamlessly
              with existing infrastructure over BACnet &amp; Modbus, and eliminates costly vendor lock-in without
              ripping and replacing equipment.
            </p>

            {/* Quick Navigation Jump Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <button
                onClick={() => scrollToSection("comparison-matrix")}
                className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                <span>View Comparison Matrix</span>
              </button>
              <button
                onClick={() => scrollToSection("faq-accordion-section")}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <span>Browse All Questions</span>
              </button>
            </div>

            {/* Hero Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
              {heroMetrics.map((metric, i) => (
                <div
                  key={i}
                  className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-md transition-all hover:border-white/20 ${metric.bg}`}
                >
                  <div className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </div>
                  <div className={`text-lg sm:text-2xl font-extrabold mt-1.5 ${metric.accent} font-heading`}>
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-snug">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Side-by-Side Comparison Matrix */}
        <section id="comparison-matrix" className="py-16 md:py-20 relative bg-[#081325]/40 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header & Quick Action */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Side-by-Side Clarity</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight">
                  Feature &amp; Capability Matrix
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
                  Direct comparative breakdown answering core questions about architecture, integration, deployment,
                  costs, and offline reliability without having to click multiple dropdowns.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopySummary}
                  className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  {copiedToast ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Matrix Summary</span>
                    </>
                  )}
                </button>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-white/5 rounded-xl border border-white/10 text-[11px] text-slate-300">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>Updated 2026</span>
                </div>
              </div>
            </div>

            {/* Comparison Matrix Table Card */}
            <div className="rounded-2xl border border-white/10 bg-[#091526]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-md">
              <div className="overflow-x-auto scrollbar-hide">
                <table className="w-full text-left border-collapse min-w-[720px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#06101d]">
                      <th className="p-4 sm:p-5 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-[26%]">
                        Evaluation Parameter
                      </th>
                      <th className="p-4 sm:p-5 text-[11px] font-bold uppercase tracking-wider w-[37%] bg-rose-950/20 border-x border-white/5 text-rose-300">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 ring-2 ring-rose-500/20" />
                          <span>Legacy / Traditional BMS</span>
                        </div>
                      </th>
                      <th className="p-4 sm:p-5 text-[11px] font-bold uppercase tracking-wider w-[37%] bg-cyan-950/30 text-cyan-300">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-cyan-400/30 animate-pulse" />
                          <span>IncSmart IoT Platform</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                    {comparisonMatrixData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        {/* Parameter Column */}
                        <td className="p-4 sm:p-5 align-top">
                          <div className="font-bold text-white font-heading text-sm group-hover:text-cyan-300 transition-colors">
                            {row.parameter}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                            {row.description}
                          </div>
                        </td>

                        {/* Traditional BMS Column */}
                        <td className="p-4 sm:p-5 align-top bg-rose-950/10 border-x border-white/5 text-slate-300 leading-relaxed">
                          <div className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                            <span>{row.traditional}</span>
                          </div>
                        </td>

                        {/* IncSmart Platform Column */}
                        <td className="p-4 sm:p-5 align-top bg-cyan-950/15 text-slate-200 leading-relaxed font-normal">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <span>{row.incsmart}</span>
                              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-semibold text-cyan-300 tracking-wide">
                                <span>★ {row.incsmartAdvantage}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Matrix Footer Note */}
              <div className="p-4 sm:p-5 bg-[#07111D] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>IncSmart edge controllers work alongside any BACnet or Modbus equipment without voiding warranties.</span>
                </div>
                <button
                  onClick={() => scrollToSection("faq-accordion-section")}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Have specific questions? Jump to FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Interactive FAQs with Search & Categorization */}
        <section id="faq-accordion-section" className="py-20 bg-[#07111D] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="w-8 h-[1.5px] bg-[#06B6D4]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                  Frequently Asked Questions
                </span>
                <span className="w-8 h-[1.5px] bg-[#06B6D4]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight">
                Got Questions? We Have Answers.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Answers about IncSmart&apos;s architecture, custom integration, security, and 24×7 enterprise support.
              </p>
            </div>

            {/* Accordion Categories */}
            <div className="space-y-12">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                      <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-mono ml-auto">
                        {category.faqs.length} {category.faqs.length === 1 ? "question" : "questions"}
                      </span>
                    </div>

                    {/* FAQs in Category */}
                    <div className="space-y-3">
                      {category.faqs.map((faq, idx) => {
                        const faqId = `${category.title}-${idx}`;
                        const isOpen = openFaq === faqId;

                        return (
                          <div
                            key={faqId}
                            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                              isOpen
                                ? "bg-[#0d1e33] border-cyan-500/50 shadow-lg shadow-cyan-950/20"
                                : "bg-[#0b1a2d]/65 border-white/5 hover:border-white/15"
                            }`}
                          >
                            <button
                              onClick={() => toggleFaq(faqId)}
                              className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left cursor-pointer gap-4"
                            >
                              <div className="flex items-center gap-3.5">
                                <span
                                  className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                                    isOpen
                                      ? "bg-cyan-500 text-slate-950"
                                      : "bg-white/5 text-slate-400 border border-white/5"
                                  }`}
                                >
                                  0{idx + 1}
                                </span>
                                <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                                  {faq.question}
                                </span>
                              </div>
                              <div
                                className={`p-1.5 rounded-full transition-transform duration-200 flex-shrink-0 ${
                                  isOpen
                                    ? "bg-cyan-500 text-slate-950 rotate-180"
                                    : "bg-white/5 text-slate-400"
                                }`}
                              >
                                {isOpen ? (
                                  <Minus className="w-3.5 h-3.5" />
                                ) : (
                                  <Plus className="w-3.5 h-3.5" />
                                )}
                              </div>
                            </button>

                            {isOpen && (
                              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-[13px] text-slate-300 leading-relaxed border-t border-white/5 space-y-3">
                                <p>{faq.answer}</p>
                                {faq.highlight && (
                                  <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-800/30 text-[11px] text-cyan-300 flex items-center gap-2">
                                    <span className="font-bold uppercase tracking-wider text-[10px] bg-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-300">
                                      Key Takeaway
                                    </span>
                                    <span>{faq.highlight}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: CTA Banner */}
        <section className="py-20 relative bg-[#07111D] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-[#0b1a2d] via-[#08182b] to-[#081325] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col space-y-3 max-w-2xl text-left">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-[2px] bg-[#06B6D4]" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">
                      Ready to upgrade your building?
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    Unlock Measurable Savings with an Energy Audit
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Our IoT automation specialists will evaluate your current chiller plant, AHUs, and power meters
                    to model your guaranteed 15%–30% monthly utility savings before any deployment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full lg:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 active:scale-95 text-slate-950 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center text-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span className="text-center">Schedule Energy Assessment</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                  <a
                    href="tel:+919711888111"
                    className="border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center text-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-center">+91 97118 88111</span>
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
