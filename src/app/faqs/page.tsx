"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, Phone, HelpCircle } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    title: "About INCSMART",
    faqs: [
      {
        question: "What is INCSMART and what does the company do?",
        answer:
          "INCSMART is an Industrial IoT and automation company founded in 2017. We deliver end-to-end solutions that help organizations monitor, optimize, and automate their operations through connected sensors, cloud platforms, AI analytics, and intelligent automation — transforming traditional infrastructure into smart, sustainable ecosystems.",
      },
      {
        question: "Which industries does INCSMART serve?",
        answer:
          "We serve manufacturing, railways, hospitals, hotels, solar plants, commercial buildings, education campuses, and retail & malls. Our solutions are tailored to each industry's unique operational requirements, from HVAC optimization in cinemas to remote infrastructure monitoring for railways.",
      },
      {
        question: "Where are INCSMART offices located?",
        answer:
          "Our head office is in Gandhinagar, Gujarat (E-202, GIDC Rd, SECTOR-26, Sector 26). We deploy solutions pan-India and support clients across multiple geographical locations from a unified cloud platform.",
      },
      {
        question: "What makes INCSMART different from other IoT providers?",
        answer:
          "INCSMART combines deep industry expertise with a scalable, secure cloud-native platform, 24×7 NOC monitoring, and proven results — 120+ projects delivered, 20% average energy savings, and 99.9% platform availability. We offer customized, end-to-end solutions rather than off-the-shelf products.",
      },
    ],
  },
  {
    title: "Solutions & Technology",
    faqs: [
      {
        question: "What IoT solutions does INCSMART offer?",
        answer:
          "Our core solutions include Industrial IoT & Automation, HVAC Optimization, Energy Management, Building Management Systems (BMS), and Fire Monitoring. Each solution covers the full stack — from sensors and edge gateways to cloud analytics, dashboards, and automation.",
      },
      {
        question: "How does INCSMART reduce energy consumption?",
        answer:
          "Through intelligent HVAC automation, real-time demand-load management, power factor correction, and scheduling optimizations that align utility consumption with actual requirements. Clients typically achieve around 20% average energy savings.",
      },
      {
        question: "Can your solutions integrate with our existing systems?",
        answer:
          "Yes. Our Edge Gateways support standard industrial and building protocols including BACnet, Modbus, MQTT, and OPC-UA for seamless integration with existing BMS, SCADA, and equipment without replacing your current infrastructure.",
      },
      {
        question: "Is your platform scalable for multiple locations?",
        answer:
          "Yes. Our cloud-native BMS and Industrial IoT architecture aggregates telemetry from multiple sites — factories, hospitals, hotels, or retail outlets — into a single unified control dashboard with role-based access and centralized reporting.",
      },
      {
        question: "How secure is the INCSMART cloud platform?",
        answer:
          "Our platform is built with enterprise-grade security including encrypted data transmission, secure device authentication, role-based access controls, and continuous monitoring. We maintain 99.9% platform availability with redundant cloud infrastructure.",
      },
    ],
  },
  {
    title: "Implementation & Support",
    faqs: [
      {
        question: "What is the typical ROI period for your solutions?",
        answer:
          "Depending on utility rates, facility size, and baseline efficiency, most clients see full return on investment within 12 to 18 months through reduced energy costs, lower downtime, and improved operational efficiency.",
      },
      {
        question: "How long does a typical deployment take?",
        answer:
          "Deployment timelines vary by project scope. A single-facility HVAC optimization can be live within 4–8 weeks, while large-scale multi-site Industrial IoT rollouts may take 3–6 months. We provide a detailed project plan during the consultation phase.",
      },
      {
        question: "Do you provide 24×7 support and monitoring?",
        answer:
          "Absolutely. Our Network Operations Center (NOC) operates 24×7 to monitor alerts, perform predictive diagnostics, and ensure maximum system uptime. Clients also receive dedicated account support and on-site assistance when needed.",
      },
      {
        question: "Do you offer custom solutions for specific facilities?",
        answer:
          "Yes. Every deployment is customized to your facility's layout, equipment, protocols, and operational goals. We conduct site assessments and design tailored architectures — from sensor placement to dashboard configuration and automation rules.",
      },
    ],
  },
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I request a demo or consultation?",
        answer:
          "You can book a demo through our Contact page, call us at +91 97118 88111, or email info@incsmart.in. Our team will schedule a consultation to understand your requirements and walk you through relevant solutions.",
      },
      {
        question: "What information should I prepare before contacting INCSMART?",
        answer:
          "Helpful details include your facility type and size, current systems (BMS, HVAC, energy meters), primary pain points (high energy bills, downtime, manual monitoring), and number of locations. This helps us recommend the most relevant solution quickly.",
      },
      {
        question: "Does INCSMART work with enterprise clients like PVR, Indian Railways, and Taj Hotels?",
        answer:
          "Yes. We have delivered 120+ projects for leading organizations including PVR INOX, Indian Railways, UltraTech Cement, Taj Hotels & Resorts, Adani Energy Solutions, and Amul — across HVAC optimization, industrial automation, smart energy management, and remote monitoring.",
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
        {/* Hero */}
        <section className="relative py-20 border-b border-white/5 bg-[#07111D] overflow-hidden bg-grid-pattern">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="w-8 h-[1.5px] bg-[#06B6D4]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                FAQs
              </span>
              <span className="w-8 h-[1.5px] bg-[#06B6D4]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-heading mb-6">
              Frequently Asked <span className="text-brand-cyan">Questions</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Find answers about INCSMART&apos;s IoT solutions, deployment process, support, and
              how we help industries build smarter, more efficient infrastructure.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-[#081325]/25 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <h2 className="text-lg font-bold text-white font-heading">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, idx) => {
                    const faqId = `${category.title}-${idx}`;
                    const isOpen = openFaq === faqId;
                    return (
                      <div
                        key={faqId}
                        className="bg-[#0b1a2d]/65 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFaq(faqId)}
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
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative bg-[#07111D] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-[#0b1a2d] to-[#081325] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col space-y-4 max-w-2xl text-left">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-[2px] bg-[#3b82f6]" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase">
                      Still Have Questions?
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    We&apos;re Here to Help
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Can&apos;t find what you&apos;re looking for? Reach out to our team for a
                    personalized consultation about your facility and requirements.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-6 py-3.5 text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919711888111"
                    className="border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-lg px-6 py-3.5 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 97118 88111</span>
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
