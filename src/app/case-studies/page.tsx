"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudyGroups } from "@/data/caseStudiesData";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const categories = [
    { id: "all", label: "All Case Studies" },
    { id: "cinema", label: "Cinemas & Entertainment" },
    { id: "infrastructure", label: "Rail & Infrastructure" },
    { id: "industrial", label: "Heavy Manufacturing" },
  ];

  const filteredGroups = caseStudyGroups.filter((group) => {
    if (selectedCategory === "all") return true;
    return group.category === selectedCategory;
  });

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col text-slate-100">
      <Header />

      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-brand-cyan/10 rounded-full blur-[180px] pointer-events-none"></div>
        <div className="absolute top-96 right-10 w-[500px] h-[350px] bg-brand-lime/10 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#081325]/70 backdrop-blur-md mb-6">
              <FileText className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                Audited Deployments & Real Field Results
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-heading">
              Proven Impact. <span className="text-gradient-cyan-lime font-bold">In-Depth Case Studies.</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore documented technical dossiers, daily telemetry logs, verified ROI figures, and automation methodologies implemented by IncSmart Technologies.
            </p>
          </div>



          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                All Enterprise Deployments
              </h2>
              <p className="text-xs text-slate-400">
                Select an industry or click any card to examine detailed engineering and financial outcomes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-brand-cyan text-[#07111D] shadow-md shadow-brand-cyan/20"
                      : "bg-[#081325] text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Parent-Child Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-start">
            {filteredGroups.map((group) => {
              const isExpanded = !!expandedGroups[group.id];
              return (
                <div
                  key={group.id}
                  className={`rounded-3xl border bg-[#081325]/60 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-lg ${
                    isExpanded
                      ? "border-brand-cyan/40 bg-[#081325]/90 shadow-2xl shadow-cyan-500/10"
                      : "border-white/10 hover:border-brand-cyan/30 hover:bg-[#081325]/80"
                  }`}
                >
                  {/* Parent Trigger — displays parent case study name only */}
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`case-study-children-${group.id}`}
                    className="w-full p-6 flex items-center justify-between gap-4 text-left cursor-pointer touch-manipulation min-h-[72px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60 rounded-3xl group"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors font-heading">
                      {group.name}
                    </h3>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isExpanded
                          ? "bg-brand-cyan text-[#07111D] rotate-180"
                          : "bg-white/5 text-slate-300 group-hover:bg-white/10"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Nested Child Case Studies */}
                  {isExpanded && (
                    <div
                      id={`case-study-children-${group.id}`}
                      className="px-4 pb-4 pt-3 border-t border-white/10 space-y-2.5 max-h-[420px] overflow-y-auto"
                    >
                      {group.children.map((child, idx) => (
                        <Link
                          key={child.id}
                          href={`/case-studies/${child.slug}`}
                          className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#060D17]/80 border border-white/5 hover:border-brand-cyan/40 hover:bg-[#0b1729] transition-all duration-200 group/child cursor-pointer touch-manipulation"
                        >
                          <div className="min-w-0">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">
                              Case Study {idx + 1}
                            </span>
                            <div className="text-sm font-bold text-white group-hover/child:text-brand-cyan transition-colors font-heading truncate mt-0.5">
                              {child.client}
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
                              {child.title}
                            </p>
                          </div>
                          <span className="w-7 h-7 rounded-full bg-white/5 group-hover/child:bg-brand-cyan group-hover/child:text-[#07111D] flex items-center justify-center flex-shrink-0 transition-all">
                            <ArrowRight className="w-3.5 h-3.5 group-hover/child:translate-x-0.5 transition-transform" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Facility Energy Audit Banner */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0C1A2E] via-[#091524] to-[#0A1A24] p-8 sm:p-12 backdrop-blur-xl text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
                Deploy IncSmart at Your Facility
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
                Ready to cut operational HVAC costs by 18%+?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Our IoT engineering specialists conduct full non-disruptive facility audits and build custom dynamic HVAC setpoint algorithms for cinema chains, malls, and industrial complexes.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3 rounded-full bg-brand-cyan text-[#07111D] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg active:scale-95"
                >
                  Schedule Site Energy Audit
                </Link>
                <Link
                  href="/solutions"
                  className="px-7 py-3 rounded-full bg-white/5 text-white border border-white/10 font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Explore IoT Solutions
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
