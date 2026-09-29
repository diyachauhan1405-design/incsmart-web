"use client";

import { useState } from "react";
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
  Cpu,
  IndianRupee,
  Film,
  Building2,
  Sparkles,
  ArrowUpRight,
  Filter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudiesList, CaseStudyData } from "@/data/caseStudiesData";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Case Studies" },
    { id: "cinema", label: "Cinemas & Entertainment" },
    { id: "infrastructure", label: "Rail & Infrastructure" },
    { id: "industrial", label: "Heavy Manufacturing" },
  ];

  const filteredStudies = caseStudiesList.filter((s) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "cinema") return s.slug === "rajhans-cinemas" || s.slug === "pvr-inox";
    if (selectedCategory === "infrastructure") return s.slug === "western-railway";
    if (selectedCategory === "industrial") return s.slug === "ultratech-cement";
    return true;
  });

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
              <h2 className="text-xl font-bold text-white font-heading">
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

          {/* Case Studies Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="rounded-3xl border border-white/10 bg-[#081325]/60 hover:bg-[#081325]/90 hover:border-brand-cyan/40 backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col group shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              >
                {/* Card Image Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081325] via-[#081325]/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#07111D]/80 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
                      {study.client}
                    </span>
                    {study.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-brand-lime text-black uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-[11px] text-slate-300">
                    <span>{study.industry}</span>
                    <span className="text-white font-medium">{study.location}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-2.5 font-heading line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                      {study.subtitle}
                    </p>
                  </div>

                  <div>
                    {/* Metrics 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#060D17]/80 border border-white/5 mb-4">
                      {study.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="p-1">
                          <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                          <span className={`text-base font-extrabold font-heading ${m.accent || "text-brand-lime"}`}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Link indicator */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                      <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                        View Complete Case Study
                      </span>
                      <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-brand-cyan group-hover:text-[#07111D] flex items-center justify-center transition-all">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
