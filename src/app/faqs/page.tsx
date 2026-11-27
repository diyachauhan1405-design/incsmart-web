"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  ArrowRight,
  Phone,
  Zap,
  ShieldCheck,
  Layers,
  Building2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#07111D] text-white flex flex-col overflow-hidden">
      <Header />

      <main className="flex-grow pt-20">
        {/* SECTION: Interactive FAQs with Categorization */}
        <section id="faq-accordion-section" className="py-16 md:py-20 bg-[#07111D] relative bg-grid-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="w-6 sm:w-8 h-[1.5px] bg-cyan-400" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] text-cyan-400 uppercase">
                  Frequently Asked Questions
                </span>
                <span className="w-6 sm:w-8 h-[1.5px] bg-cyan-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
                Got Questions? We Have Answers.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                Answers about IncSmart&apos;s architecture, custom integration, security, and 24×7 enterprise support.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/iot-vs-bms"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Compare IoT Automation vs. Traditional BMS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
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
