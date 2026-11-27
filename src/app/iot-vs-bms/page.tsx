"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  HelpCircle,
  Check,
  Clock,
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

export default function IotVsBmsPage() {
  const [copiedToast, setCopiedToast] = useState(false);

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
              <span>Architecture &amp; ROI Comparison</span>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto">
              <button
                onClick={() => scrollToSection("comparison-matrix")}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                <span>View Comparison Matrix</span>
              </button>
              <Link
                href="/faqs"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <span>Browse All Questions</span>
              </Link>
            </div>

            {/* Hero Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-left">
              {heroMetrics.map((metric, i) => (
                <div
                  key={i}
                  className={`p-3 sm:p-5 rounded-2xl border backdrop-blur-md transition-all hover:border-white/20 ${metric.bg}`}
                >
                  <div className="text-[9px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </div>
                  <div className={`text-base sm:text-xl md:text-2xl font-extrabold mt-1 sm:mt-1.5 ${metric.accent} font-heading`}>
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 leading-snug">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Side-by-Side Comparison Matrix */}
        <section id="comparison-matrix" className="py-14 sm:py-16 md:py-20 relative bg-[#081325]/40 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header & Quick Action */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8">
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
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
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

            {/* Comparison Matrix Container */}
            <div className="rounded-2xl border border-white/10 bg-[#091526]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-md">
              {/* DESKTOP / TABLET: Table View (hidden on mobile, visible md+) */}
              <div className="hidden md:block overflow-x-auto scrollbar-hide">
                <table className="w-full text-left border-collapse min-w-[700px]">
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

              {/* MOBILE: Responsive Card View (visible on screens < 768px) */}
              <div className="block md:hidden divide-y divide-white/5 p-3.5 sm:p-4 space-y-4">
                {comparisonMatrixData.map((row, idx) => (
                  <div key={idx} className="pt-4 first:pt-0 space-y-2.5">
                    <div>
                      <div className="font-bold font-heading text-sm text-cyan-300">
                        {row.parameter}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {row.description}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {/* Traditional BMS card */}
                      <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs">
                        <div className="flex items-center gap-1.5 text-rose-300 font-semibold text-[11px] mb-1">
                          <XCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                          <span>Legacy / Traditional BMS</span>
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed pl-5">
                          {row.traditional}
                        </p>
                      </div>

                      {/* IncSmart IoT card */}
                      <div className="p-3 rounded-xl bg-cyan-950/25 border border-cyan-500/30 text-xs shadow-sm">
                        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                          <div className="flex items-center gap-1.5 text-cyan-300 font-semibold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>IncSmart IoT Platform</span>
                          </div>
                          <span className="text-[9px] font-semibold text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30">
                            ★ {row.incsmartAdvantage}
                          </span>
                        </div>
                        <p className="text-slate-200 text-[11px] leading-relaxed pl-5">
                          {row.incsmart}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Matrix Footer Note */}
              <div className="p-4 sm:p-5 bg-[#07111D] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>IncSmart edge controllers work alongside any BACnet or Modbus equipment without voiding warranties.</span>
                </div>
                <Link
                  href="/faqs"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Have specific questions? Jump to FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CTA Banner */}
        <section className="py-20 relative bg-[#07111D]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-[#0b1a2d] via-[#08182b] to-[#081325] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col space-y-3 max-w-2xl text-left">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-[2px] bg-cyan-400" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.2em] text-cyan-400 uppercase">
                      Ready to upgrade your building?
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading leading-tight">
                    Unlock Measurable Savings with an Energy Audit
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Our IoT automation specialists will evaluate your current chiller plant, AHUs, and power meters
                    to model your guaranteed 15%–30% monthly utility savings before any deployment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full lg:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 active:scale-95 text-slate-950 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center text-center gap-2 cursor-pointer sm:whitespace-nowrap"
                  >
                    <span className="text-center">Schedule Energy Assessment</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                  <a
                    href="tel:+919711888111"
                    className="w-full sm:w-auto border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center text-center gap-2 cursor-pointer whitespace-nowrap"
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
