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
  ArrowLeft,
  BarChart3,
  Layers,
  Cpu,
  Building2,
  Calendar,
  IndianRupee,
  Activity,
  Thermometer,
  Users,
  Film,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Download,
  Share2,
  Sliders,
  Check,
  Flame,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyData, caseStudiesList } from "@/data/caseStudiesData";

interface Props {
  study: CaseStudyData;
}

export default function CaseStudyDetailClient({ study }: Props) {
  const [dataTab, setDataTab] = useState<"all" | "manual" | "automated">("all");
  const [chartMetric, setChartMetric] = useState<"kwh" | "admit" | "show">("kwh");
  const [activeChartPoint, setActiveChartPoint] = useState<any | null>(null);

  // ROI Calculator states (benchmarked from Rajhans Cinemas)
  const [calcScreens, setCalcScreens] = useState<number>(4);
  const [calcRate, setCalcRate] = useState<number>(12.5);

  // Benchmark: 1 screen saves ~₹851,545 / 4 screens = ~₹212,886 per screen/year at ₹12.5
  // Energy saved per screen per year = 851,545 / (12.5 * 4) ≈ 17,030 kWh/screen/year
  const estimatedAnnualKwhSavings = calcScreens * 17030;
  const calculatedAnnualSavings = Math.round(estimatedAnnualKwhSavings * calcRate);
  const calculatedMonthlySavings = Math.round(calculatedAnnualSavings / 12);
  const calculatedFiveYearSavings = Math.round(calculatedAnnualSavings * 4.9);

  const isRajhans = study.slug === "rajhans-cinemas";

  // Data for Chart
  const combinedAuditData = [
    { date: "12/07", mode: "Manual", kwh: 1435, admit: 1362, show: 15, kwhPerAdmit: 1.05, kwhPerShow: 95.67, highTemp: 33, lowTemp: 27 },
    { date: "13/07", mode: "Manual", kwh: 1507, admit: 1137, show: 14, kwhPerAdmit: 1.33, kwhPerShow: 107.64, highTemp: 35, lowTemp: 27 },
    { date: "19/07", mode: "Automated", kwh: 972, admit: 1122, show: 14, kwhPerAdmit: 0.87, kwhPerShow: 69.43, highTemp: 32, lowTemp: 25 },
    { date: "20/07", mode: "Automated", kwh: 1472, admit: 2418, show: 16, kwhPerAdmit: 0.61, kwhPerShow: 92.00, highTemp: 33, lowTemp: 26 },
    { date: "21/07", mode: "Automated", kwh: 1102, admit: 1465, show: 14, kwhPerAdmit: 0.75, kwhPerShow: 78.71, highTemp: 32, lowTemp: 26 },
    { date: "22/07", mode: "Automated", kwh: 1185, admit: 1768, show: 14, kwhPerAdmit: 0.67, kwhPerShow: 84.64, highTemp: 35, lowTemp: 27 },
    { date: "23/07", mode: "Automated", kwh: 1140, admit: 1276, show: 14, kwhPerAdmit: 0.89, kwhPerShow: 81.43, highTemp: 34, lowTemp: 29 },
    { date: "24/07", mode: "Automated", kwh: 1162, admit: 1150, show: 13, kwhPerAdmit: 1.01, kwhPerShow: 89.38, highTemp: 36, lowTemp: 27 },
    { date: "25/07", mode: "Automated", kwh: 1057, admit: 1111, show: 16, kwhPerAdmit: 0.95, kwhPerShow: 66.06, highTemp: 36, lowTemp: 27 },
    { date: "26/07", mode: "Manual", kwh: 1682, admit: 1769, show: 16, kwhPerAdmit: 0.95, kwhPerShow: 105.13, highTemp: 34, lowTemp: 27 },
    { date: "28/07", mode: "Manual", kwh: 1034, admit: 1059, show: 14, kwhPerAdmit: 0.98, kwhPerShow: 73.86, highTemp: 28, lowTemp: 26 },
    { date: "02/08", mode: "Manual", kwh: 1425, admit: 1408, show: 15, kwhPerAdmit: 1.01, kwhPerShow: 95.00, highTemp: 33, lowTemp: 26 },
    { date: "03/08", mode: "Manual", kwh: 1630, admit: 1454, show: 16, kwhPerAdmit: 0.66, kwhPerShow: 101.88, highTemp: 31, lowTemp: 28 },
    { date: "05/08", mode: "Manual", kwh: 1243, admit: 1160, show: 15, kwhPerAdmit: 1.07, kwhPerShow: 82.87, highTemp: 32, lowTemp: 27 },
  ];

  // Other related case studies
  const otherStudies = caseStudiesList.filter((s) => s.slug !== study.slug);

  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col text-slate-100">
      <Header />

      <main className="flex-grow pt-28 pb-24 relative overflow-hidden">
        {/* Glow ambient backdrops */}
        <div className="absolute top-16 left-1/4 w-[600px] h-[350px] bg-brand-cyan/10 rounded-full blur-[180px] pointer-events-none"></div>
        <div className="absolute top-96 right-10 w-[550px] h-[350px] bg-brand-lime/10 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-2">
            <nav className="flex items-center space-x-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-brand-cyan font-medium truncate max-w-[200px] sm:max-w-none">{study.client}</span>
            </nav>

            <Link
              href="/case-studies"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-white bg-[#0A1628] hover:bg-[#0E203B] px-3.5 py-1.5 rounded-full border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all Case Studies</span>
            </Link>
          </div>

          {/* Hero Section Header */}
          <div className="rounded-3xl border border-white/10 bg-[#081325]/70 backdrop-blur-xl p-6 sm:p-10 lg:p-12 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-emerald-400 to-brand-lime"></div>
            
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" />
                {study.client}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
                {study.industry}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified Field Telemetry
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Energy Rate: {study.energyRate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
              {study.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mb-8">
              {study.subtitle}
            </p>

            {/* Provider and Audit Meta */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block uppercase tracking-wider text-[10px] font-bold">Implemented By</span>
                <span className="text-white font-semibold text-sm">{study.provider}</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
              <div>
                <span className="text-slate-500 block uppercase tracking-wider text-[10px] font-bold">Audit Period</span>
                <span className="text-slate-200 font-medium">{study.executiveSummary.totalAuditsPeriod}</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
              <div>
                <span className="text-slate-500 block uppercase tracking-wider text-[10px] font-bold">Safety Margin</span>
                <span className="text-amber-400 font-medium">{study.conservativeBuffer}</span>
              </div>
            </div>
          </div>

          {/* Executive KPI Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
            <div className="rounded-2xl border border-brand-lime/30 bg-[#081325]/80 p-5 sm:p-6 backdrop-blur-md relative overflow-hidden group hover:border-brand-lime transition-all shadow-[0_10px_30px_rgba(132,204,22,0.1)]">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime">
                <IndianRupee className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Annual Projected Savings
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-brand-lime font-heading tracking-tight mb-2">
                {study.executiveSummary.annualSavings}
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Per cinema location with conservative 30% reduction buffer applied.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-cyan/30 bg-[#081325]/80 p-5 sm:p-6 backdrop-blur-md relative overflow-hidden group hover:border-brand-cyan transition-all shadow-[0_10px_30px_rgba(6,182,212,0.1)]">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Energy Reduction
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-brand-cyan font-heading tracking-tight mb-2">
                {study.executiveSummary.energyReduction}
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Verified consumption drop per ticket admit (from 0.96 to 0.78 kWh).
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/30 bg-[#081325]/80 p-5 sm:p-6 backdrop-blur-md relative overflow-hidden group hover:border-purple-400 transition-all shadow-[0_10px_30px_rgba(168,85,247,0.1)]">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Staff Intervention
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-purple-400 font-heading tracking-tight mb-2">
                -{study.executiveSummary.staffInterventionReduction}
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Eliminated manual thermostat tampering through autonomous scheduling.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-[#081325]/80 p-5 sm:p-6 backdrop-blur-md relative overflow-hidden group hover:border-emerald-400 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Payback Horizon
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-heading tracking-tight mb-2">
                {study.executiveSummary.paybackPeriod}
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Break-even in 3-6 months; 100% CAPEX payback achieved in year 1.
              </p>
            </div>
          </div>

          {/* Two-Column Visual Story Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="rounded-3xl border border-white/10 bg-[#081325]/60 overflow-hidden relative group">
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src={study.heroImage}
                  alt="Cinema Auditorium HVAC"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081325] via-[#081325]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-brand-lime border border-brand-lime/30 mb-2">
                    Auditorium Climate Optimization
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Synchronized Showtime HVAC Control
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Continuous monitoring prevents pre-show overcooling and maintains peak comfort as auditorium occupancy fluctuates.
                  </p>
                </div>
              </div>
            </div>

            {study.secondaryImage && (
              <div className="rounded-3xl border border-white/10 bg-[#081325]/60 overflow-hidden relative group">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src={study.secondaryImage}
                    alt="IoT Controller & Smart Thermostat"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081325] via-[#081325]/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-brand-cyan border border-brand-cyan/30 mb-2">
                      Precision IoT Wall & Air Sensors
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      Autonomous Smart Damper & Setpoint Regulation
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      79% reduction in manual staff adjustments with multi-sensor telemetry feeding the central IncSmart intelligence platform.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 1: The Challenge, Objective & Solution */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Field Problem & Strategy</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                Introduction & Engineering Solution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenge Card */}
              <div className="rounded-2xl border border-rose-500/20 bg-[#0C1524]/70 p-6 sm:p-7 relative overflow-hidden backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-heading">
                  The Challenge
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {study.challenge.description}
                </p>
                {study.challenge.bulletPoints && (
                  <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-white/5">
                    {study.challenge.bulletPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Objective Card */}
              <div className="rounded-2xl border border-amber-500/20 bg-[#0C1524]/70 p-6 sm:p-7 relative overflow-hidden backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-heading">
                  The Objective
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {study.objective.description}
                </p>
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs text-amber-200/90 leading-relaxed">
                  Deliver verifiable energy conservation without compromising cinema acoustic isolation or attendee thermal comfort ratings.
                </div>
              </div>

              {/* Solution Card */}
              <div className="rounded-2xl border border-brand-cyan/20 bg-[#0C1524]/70 p-6 sm:p-7 relative overflow-hidden backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-5">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-heading">
                  The Solution
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {study.solution.description}
                </p>
                <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-white/5">
                  {study.solution.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Methodology & Data Collection Parameters */}
          <div className="rounded-3xl border border-white/10 bg-[#081325]/60 backdrop-blur-xl p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">Scientific Rigor</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                Methodology & Audit Parameters
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {study.methodology.description}
              </p>
            </div>

            {/* 5 Steps horizontal flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {study.methodology.steps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0B172B] border border-white/5 relative">
                  <div className="text-xs font-black text-brand-lime/80 mb-2">
                    STEP 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Parameter Categories */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-brand-cyan" />
                Data Collection Parameters (Tracked across July - August 2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {study.parameters.map((param, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#060D17]/80 border border-white/5">
                    <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">
                      {param.category}
                    </div>
                    <ul className="space-y-2">
                      {param.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Daily Field Audit Datasets (Pages 5 & 6) */}
          {isRajhans && study.manualData && study.automatedData && (
            <div className="rounded-3xl border border-white/10 bg-[#081325]/70 backdrop-blur-xl p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Operational Field Log</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                    Daily System Performance Data
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Direct readings comparing Manual HVAC operation with IoT Automated HVAC operation at Rajhans Cinemas.
                  </p>
                </div>

                {/* Filter Tab buttons */}
                <div className="inline-flex p-1 rounded-xl bg-[#060D17] border border-white/10 self-start sm:self-auto">
                  <button
                    onClick={() => setDataTab("all")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      dataTab === "all" ? "bg-brand-cyan text-[#07111D] shadow-md" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    All Days (14)
                  </button>
                  <button
                    onClick={() => setDataTab("automated")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      dataTab === "automated" ? "bg-brand-lime text-[#07111D] shadow-md" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Automated System (7)
                  </button>
                  <button
                    onClick={() => setDataTab("manual")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      dataTab === "manual" ? "bg-rose-500 text-white shadow-md" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Manual System (7)
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#050C17] text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4">Operating Mode</th>
                      <th className="py-3.5 px-4 text-right">Energy (kWh)</th>
                      <th className="py-3.5 px-4 text-right">Admit Count</th>
                      <th className="py-3.5 px-4 text-right">Show Count</th>
                      <th className="py-3.5 px-4 text-right">kWh / Admit</th>
                      <th className="py-3.5 px-4 text-right">kWh / Show</th>
                      <th className="py-3.5 px-4 text-right">High Temp</th>
                      <th className="py-3.5 px-4 text-right">Low Temp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {/* Render rows depending on tab */}
                    {dataTab !== "automated" && study.manualData.map((row, idx) => (
                      <tr key={`man-${idx}`} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 font-mono font-medium text-slate-200">{row.date}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            Manual
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-white">{row.manualReadingKwh.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right font-mono text-slate-300">{row.admitCount.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right font-mono text-slate-300">{row.showCount}</td>
                        <td className="py-3 px-4 text-right font-mono text-rose-300 font-semibold">{row.conAdmitDaily.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right font-mono text-slate-300">{row.conShow.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right font-mono text-amber-300">{row.highTemp.toFixed(1)}°C</td>
                        <td className="py-3 px-4 text-right font-mono text-blue-300">{row.lowTemp.toFixed(1)}°C</td>
                      </tr>
                    ))}

                    {dataTab !== "manual" && study.automatedData.map((row, idx) => (
                      <tr key={`auto-${idx}`} className="hover:bg-white/[0.02] transition-colors bg-brand-cyan/[0.02]">
                        <td className="py-3 px-4 font-mono font-medium text-slate-200">{row.date}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-brand-lime/15 text-brand-lime border border-brand-lime/30">
                            Automated
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-brand-lime">{row.manualReadingKwh.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right font-mono text-slate-300">{row.admitCount.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right font-mono text-slate-300">{row.showCount}</td>
                        <td className="py-3 px-4 text-right font-mono text-brand-cyan font-semibold">{row.consumptionPerAdmit.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right font-mono text-slate-300">{row.conShow.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right font-mono text-amber-300">{row.highTemp.toFixed(1)}°C</td>
                        <td className="py-3 px-4 text-right font-mono text-blue-300">{row.lowTemp.toFixed(1)}°C</td>
                      </tr>
                    ))}
                  </tbody>
                  {/* Totals Summary Footer */}
                  <tfoot className="bg-[#050C17] border-t-2 border-white/10 font-bold text-slate-200">
                    {dataTab === "automated" ? (
                      <tr>
                        <td className="py-3.5 px-4 text-brand-lime" colSpan={2}>Automated 7-Day Totals & Averages</td>
                        <td className="py-3.5 px-4 text-right text-brand-lime font-mono">8,090 kWh</td>
                        <td className="py-3.5 px-4 text-right font-mono">10,310</td>
                        <td className="py-3.5 px-4 text-right font-mono">101</td>
                        <td className="py-3.5 px-4 text-right font-mono text-brand-cyan">0.78 avg</td>
                        <td className="py-3.5 px-4 text-right font-mono">80.10 avg</td>
                        <td className="py-3.5 px-4 text-right font-mono">34.00°C</td>
                        <td className="py-3.5 px-4 text-right font-mono">26.71°C</td>
                      </tr>
                    ) : dataTab === "manual" ? (
                      <tr>
                        <td className="py-3.5 px-4 text-rose-400" colSpan={2}>Manual 7-Day Totals & Averages</td>
                        <td className="py-3.5 px-4 text-right text-rose-400 font-mono">9,956 kWh</td>
                        <td className="py-3.5 px-4 text-right font-mono">10,347</td>
                        <td className="py-3.5 px-4 text-right font-mono">105</td>
                        <td className="py-3.5 px-4 text-right font-mono text-rose-300">0.96 avg</td>
                        <td className="py-3.5 px-4 text-right font-mono">94.81 avg</td>
                        <td className="py-3.5 px-4 text-right font-mono">32.29°C</td>
                        <td className="py-3.5 px-4 text-right font-mono">26.86°C</td>
                      </tr>
                    ) : (
                      <tr>
                        <td className="py-3.5 px-4 text-brand-cyan" colSpan={2}>Audit Delta (Net 7-Day Savings)</td>
                        <td className="py-3.5 px-4 text-right text-brand-lime font-mono">-1,866 kWh (-18.7%)</td>
                        <td className="py-3.5 px-4 text-right font-mono">10,310 vs 10,347</td>
                        <td className="py-3.5 px-4 text-right font-mono">101 vs 105</td>
                        <td className="py-3.5 px-4 text-right font-mono text-brand-lime">-0.18 kWh/admit (-18.75%)</td>
                        <td className="py-3.5 px-4 text-right font-mono text-brand-lime">-14.71 kWh/show (-15.5%)</td>
                        <td className="py-3.5 px-4 text-right font-mono" colSpan={2}>₹23,325 7-day cost saving</td>
                      </tr>
                    )}
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {/* Section 4: Performance & Cost Analysis (Pages 12, 13, 14, 16) */}
          {isRajhans && study.comparisonAnalysis && (
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">Head-To-Head Verification</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                  Manual vs. Automated System Cost & Performance
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">
                  Energy Rate: ₹12.5 per kWh • Direct 7-day audited performance comparison
                </p>
              </div>

              {/* Side-by-Side Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Manual Card */}
                <div className="rounded-3xl border border-white/10 bg-[#0A1424] p-6 sm:p-8 relative">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">Baseline Operation</span>
                      <h3 className="text-xl font-bold text-white font-heading">Manual HVAC System</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      Standard Practice
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Total Energy</div>
                      <div className="text-lg font-bold text-white mt-0.5">{study.comparisonAnalysis.manual.totalEnergy}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Total Shows</div>
                      <div className="text-lg font-bold text-white mt-0.5">{study.comparisonAnalysis.manual.totalShows}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Total Admits</div>
                      <div className="text-lg font-bold text-white mt-0.5">{study.comparisonAnalysis.manual.totalAdmits}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">kWh per Admit</div>
                      <div className="text-lg font-bold text-rose-300 mt-0.5">{study.comparisonAnalysis.manual.kwhPerAdmit}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">kWh per Show</div>
                      <div className="text-lg font-bold text-slate-200 mt-0.5">{study.comparisonAnalysis.manual.kwhPerShow}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Avg High / Low Temp</div>
                      <div className="text-sm font-bold text-amber-200 mt-1">{study.comparisonAnalysis.manual.avgHighTemp} / {study.comparisonAnalysis.manual.avgLowTemp}</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs text-rose-300 font-medium">Total 7-Day Cost (at ₹12.5/kWh)</span>
                      <span className="text-2xl font-extrabold text-white font-heading">{study.comparisonAnalysis.manual.totalCost}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-rose-500/10 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Avg Cost per Admit</span>
                        <span className="font-bold text-slate-200 text-sm">{study.comparisonAnalysis.manual.avgCostPerAdmit}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Avg Cost per Show</span>
                        <span className="font-bold text-slate-200 text-sm">{study.comparisonAnalysis.manual.avgCostPerShow}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automated Card */}
                <div className="rounded-3xl border border-brand-cyan/30 bg-[#0A1424] p-6 sm:p-8 relative shadow-[0_15px_40px_rgba(6,182,212,0.15)]">
                  <div className="flex items-center justify-between pb-4 border-b border-brand-cyan/20 mb-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-lime">IoT Optimized</span>
                      <h3 className="text-xl font-bold text-white font-heading">Automated HVAC System</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-lime/15 text-brand-lime border border-brand-lime/30">
                      IncSmart Deployed
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Total Energy</div>
                      <div className="text-lg font-bold text-brand-lime mt-0.5">{study.comparisonAnalysis.automated.totalEnergy}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Total Shows</div>
                      <div className="text-lg font-bold text-white mt-0.5">{study.comparisonAnalysis.automated.totalShows}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Total Admits</div>
                      <div className="text-lg font-bold text-white mt-0.5">{study.comparisonAnalysis.automated.totalAdmits}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">kWh per Admit</div>
                      <div className="text-lg font-bold text-brand-cyan mt-0.5">{study.comparisonAnalysis.automated.kwhPerAdmit}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">kWh per Show</div>
                      <div className="text-lg font-bold text-brand-cyan mt-0.5">{study.comparisonAnalysis.automated.kwhPerShow}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Avg High / Low Temp</div>
                      <div className="text-sm font-bold text-amber-200 mt-1">{study.comparisonAnalysis.automated.avgHighTemp} / {study.comparisonAnalysis.automated.avgLowTemp}</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs text-brand-cyan font-medium">Total 7-Day Cost (at ₹12.5/kWh)</span>
                      <span className="text-2xl font-extrabold text-brand-lime font-heading">{study.comparisonAnalysis.automated.totalCost}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-brand-cyan/20 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Avg Cost per Admit</span>
                        <span className="font-bold text-brand-lime text-sm">{study.comparisonAnalysis.automated.avgCostPerAdmit}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Avg Cost per Show</span>
                        <span className="font-bold text-brand-lime text-sm">{study.comparisonAnalysis.automated.avgCostPerShow}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Savings Summary Banner (Page 14 & 15) */}
              <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-[#091D26] via-[#08182B] to-[#0A221C] p-6 sm:p-8 backdrop-blur-xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Audited Net Difference
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      ₹23,325 Savings Achieved Over 7 Days
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                      {study.comparisonAnalysis.diff.tempDifferenceNote}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 flex-shrink-0">
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10 min-w-[110px]">
                      <div className="text-xs text-slate-400">7-Day Energy Drop</div>
                      <div className="text-xl font-bold text-brand-lime mt-1 font-heading">-1,866 kWh</div>
                      <div className="text-[10px] text-brand-lime">18.74% lower</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10 min-w-[110px]">
                      <div className="text-xs text-slate-400">Saving / Admit</div>
                      <div className="text-xl font-bold text-brand-cyan mt-1 font-heading">-₹2.21</div>
                      <div className="text-[10px] text-brand-cyan">18.39% lower</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10 min-w-[110px]">
                      <div className="text-xs text-slate-400">Saving / Show</div>
                      <div className="text-xl font-bold text-purple-400 mt-1 font-heading">-₹183.99</div>
                      <div className="text-[10px] text-purple-400">15.52% lower</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 5: Interactive Visual Charts (Pages 7, 8, 9) */}
          {isRajhans && (
            <div className="rounded-3xl border border-white/10 bg-[#081325]/70 backdrop-blur-xl p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Data Visualizations</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                    Energy & Efficiency Trend Curves
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Visual comparison across audit days. Hover over any bar or node for full metrics.
                  </p>
                </div>

                {/* Metric Selector */}
                <div className="inline-flex p-1 rounded-xl bg-[#060D17] border border-white/10 self-start sm:self-auto">
                  <button
                    onClick={() => setChartMetric("kwh")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      chartMetric === "kwh" ? "bg-brand-cyan text-[#07111D] shadow-md" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Total Energy (kWh)
                  </button>
                  <button
                    onClick={() => setChartMetric("admit")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      chartMetric === "admit" ? "bg-brand-cyan text-[#07111D] shadow-md" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    kWh per Admit
                  </button>
                  <button
                    onClick={() => setChartMetric("show")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      chartMetric === "show" ? "bg-brand-cyan text-[#07111D] shadow-md" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    kWh per Show
                  </button>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-6 mb-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-brand-lime"></span>
                  <span className="text-slate-300">Automated System (IoT Enabled)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="text-slate-300">Manual System (Baseline)</span>
                </div>
              </div>

              {/* Chart Canvas Container */}
              <div className="relative bg-[#050C17]/90 rounded-2xl border border-white/5 p-6 sm:p-8">
                <div className="grid grid-cols-14 gap-2 sm:gap-3 items-end h-64 sm:h-72 w-full pt-6">
                  {combinedAuditData.map((pt, idx) => {
                    const isAuto = pt.mode === "Automated";
                    
                    let val = pt.kwh;
                    let maxVal = 1800;
                    let displayVal = `${pt.kwh} kWh`;

                    if (chartMetric === "admit") {
                      val = pt.kwhPerAdmit;
                      maxVal = 1.5;
                      displayVal = `${pt.kwhPerAdmit.toFixed(2)} kWh/admit`;
                    } else if (chartMetric === "show") {
                      val = pt.kwhPerShow;
                      maxVal = 120;
                      displayVal = `${pt.kwhPerShow.toFixed(1)} kWh/show`;
                    }

                    const heightPercent = Math.min(100, Math.max(10, (val / maxVal) * 100));

                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center h-full justify-end group relative cursor-pointer"
                        onMouseEnter={() => setActiveChartPoint(pt)}
                        onMouseLeave={() => setActiveChartPoint(null)}
                      >
                        {/* Bar */}
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full max-w-[28px] rounded-t-lg transition-all duration-300 ${
                            isAuto 
                              ? "bg-gradient-to-t from-brand-lime/50 to-brand-lime group-hover:brightness-125" 
                              : "bg-gradient-to-t from-rose-500/40 to-rose-400 group-hover:brightness-125"
                          }`}
                        ></div>
                        {/* Label Date */}
                        <div className="text-[10px] font-mono text-slate-400 mt-2 rotate-[-45deg] origin-top-left sm:rotate-0 sm:origin-center">
                          {pt.date}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Floating tooltip when active */}
                {activeChartPoint && (
                  <div className="absolute top-4 right-4 bg-[#0B172B]/95 border border-white/20 p-4 rounded-xl shadow-2xl backdrop-blur-md text-xs pointer-events-none z-20">
                    <div className="font-bold text-white flex items-center justify-between gap-4 mb-2">
                      <span>Date: {activeChartPoint.date}/2025</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        activeChartPoint.mode === "Automated" 
                          ? "bg-brand-lime/20 text-brand-lime" 
                          : "bg-rose-500/20 text-rose-300"
                      }`}>
                        {activeChartPoint.mode}
                      </span>
                    </div>
                    <div className="space-y-1 text-slate-300 font-mono">
                      <div>Total Energy: <span className="font-bold text-white">{activeChartPoint.kwh} kWh</span></div>
                      <div>Admit Count: <span className="font-bold text-white">{activeChartPoint.admit.toLocaleString()}</span></div>
                      <div>Show Count: <span className="font-bold text-white">{activeChartPoint.show}</span></div>
                      <div>Energy / Admit: <span className="font-bold text-brand-cyan">{activeChartPoint.kwhPerAdmit.toFixed(2)} kWh</span></div>
                      <div>Energy / Show: <span className="font-bold text-slate-200">{activeChartPoint.kwhPerShow.toFixed(2)} kWh</span></div>
                      <div>Ambient Temp: <span className="text-amber-300">{activeChartPoint.highTemp}°C</span> / <span className="text-blue-300">{activeChartPoint.lowTemp}°C</span></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Section 6: Temperature Control Insights (Pages 10 & 11) */}
          {study.temperatureInsights && (
            <div className="rounded-3xl border border-white/10 bg-[#081325]/70 backdrop-blur-xl p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Indoor Thermal Comfort</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                  {study.temperatureInsights.title}
                </h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {study.temperatureInsights.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {study.temperatureInsights.points.map((pt, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#0A1628] border border-white/5 relative overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                      {idx === 0 && <Users className="w-5 h-5" />}
                      {idx === 1 && <Film className="w-5 h-5" />}
                      {idx === 2 && <Thermometer className="w-5 h-5" />}
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 font-heading">{pt.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{pt.description}</p>
                  </div>
                ))}
              </div>

              {/* Thermal Stability Callout Box */}
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-200 leading-relaxed">
                  <span className="font-bold text-amber-300 uppercase tracking-wider block mb-0.5">Critical Observation</span>
                  During automated test periods, the external average high temperature was actually <strong className="text-white">+1.71°C higher</strong> (34.00°C vs 32.29°C), yet IncSmart automation achieved <strong className="text-brand-lime">18.74% lower energy consumption</strong> while maintaining a tight, optimal 26.71°C indoor baseline.
                </div>
              </div>
            </div>
          )}

          {/* Section 7: 5-Year Financial Projection & Long-Term ROI (Page 17) */}
          {study.roiRoadmap && (
            <div className="rounded-3xl border border-white/10 bg-[#081325]/70 backdrop-blur-xl p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">Long-Term Value Creation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                    5-Year Financial Projection & ROI Roadmap
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Conservative Annual Savings: ₹851,545 • Cumulative Lifecycle Impact
                  </p>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-brand-lime/10 border border-brand-lime/30 text-right">
                  <span className="text-[10px] uppercase font-bold text-brand-lime block">Cumulative 5-Yr Savings</span>
                  <span className="text-2xl font-black text-white font-heading">₹4.2 Million+</span>
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8 my-6">
                {study.roiRoadmap.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#07111D] border-2 border-brand-cyan flex items-center justify-center text-[10px] font-bold text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-black transition-all">
                      {idx + 1}
                    </div>

                    <div className="p-5 rounded-2xl bg-[#060E1A] border border-white/5 hover:border-brand-cyan/30 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-brand-cyan tracking-wider uppercase font-mono">
                          {item.timeline}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">
                          {item.phase}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-1.5 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 8: Interactive ROI & Savings Calculator */}
          {isRajhans && (
            <div className="rounded-3xl border border-brand-cyan/30 bg-gradient-to-br from-[#09182A] via-[#07111D] to-[#0A1A24] p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Interactive Estimator</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                  Calculate Your Facility's Potential Savings
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Calibrated directly using verified Rajhans Cinemas field telemetry data (~17,030 kWh annual HVAC savings per screen).
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Sliders on Left */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1: Screens */}
                  <div className="p-5 rounded-2xl bg-[#060D17]/80 border border-white/5">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Number of Auditoriums / Screens</label>
                      <span className="text-lg font-extrabold text-brand-cyan font-mono">{calcScreens} Screens</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={20}
                      step={1}
                      value={calcScreens}
                      onChange={(e) => setCalcScreens(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>1 Screen</span>
                      <span>10 Screens</span>
                      <span>20 Screens</span>
                    </div>
                  </div>

                  {/* Slider 2: Rate */}
                  <div className="p-5 rounded-2xl bg-[#060D17]/80 border border-white/5">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Electricity Tariff Rate (per kWh)</label>
                      <span className="text-lg font-extrabold text-brand-lime font-mono">₹{calcRate.toFixed(1)} / kWh</span>
                    </div>
                    <input
                      type="range"
                      min={8}
                      max={18}
                      step={0.5}
                      value={calcRate}
                      onChange={(e) => setCalcRate(Number(e.target.value))}
                      className="w-full accent-lime-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>₹8.0/kWh</span>
                      <span>₹12.5/kWh (Audit Base)</span>
                      <span>₹18.0/kWh</span>
                    </div>
                  </div>
                </div>

                {/* Calculation Output on Right */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050C17] border border-white/10 text-center space-y-4 shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Estimated Annual Cost Savings</span>
                    <div className="text-3xl sm:text-4xl font-black text-brand-lime font-heading tracking-tight mt-1">
                      ₹{calculatedAnnualSavings.toLocaleString()}
                    </div>
                    <span className="text-[11px] text-slate-400">~{estimatedAnnualKwhSavings.toLocaleString()} kWh conserved per year</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.03]">
                      <span className="text-slate-400 block text-[10px]">Monthly Savings</span>
                      <span className="font-bold text-white text-base">₹{calculatedMonthlySavings.toLocaleString()}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03]">
                      <span className="text-slate-400 block text-[10px]">5-Year Cumulative</span>
                      <span className="font-bold text-brand-cyan text-base">₹{calculatedFiveYearSavings.toLocaleString()}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-brand-cyan text-[#07111D] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg active:scale-95"
                  >
                    Request Facility Energy Audit <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Section 9: Digital Transformation Pillars & Implementation (Pages 19 & 20) */}
          {study.transformationPillars && (
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Enterprise Transformation</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                  Digital Transformation for Complete Facility Control
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {study.transformationPillars.map((pillar, idx) => (
                  <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-[#081325]/70 border border-white/10 backdrop-blur-md">
                    <h3 className="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan"></span>
                      {pillar.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* 4-Step Rollout Roadmap */}
              {study.implementationProcess && (
                <div className="rounded-3xl border border-white/10 bg-[#081325]/60 p-6 sm:p-8 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white mb-6 font-heading text-center">
                    Simple Implementation Process
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {study.implementationProcess.map((proc, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-[#060D17] border border-white/5 relative">
                        <div className="w-7 h-7 rounded-full bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 flex items-center justify-center text-xs font-black mb-3">
                          {proc.step}
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">{proc.phase}</h4>
                        <span className="text-[10px] font-mono text-brand-lime font-bold block mb-2">{proc.duration}</span>
                        <p className="text-xs text-slate-400 leading-relaxed">{proc.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* More Case Studies Links */}
          {otherStudies.length > 0 && (
            <div className="pt-12 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Explore Further</span>
                  <h3 className="text-xl font-bold text-white font-heading">More IncSmart Case Studies</h3>
                </div>
                <Link
                  href="/case-studies"
                  className="text-xs font-bold text-brand-cyan hover:underline flex items-center gap-1"
                >
                  View All Case Studies <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherStudies.map((s) => (
                  <Link
                    key={s.id}
                    href={`/case-studies/${s.slug}`}
                    className="p-5 rounded-2xl bg-[#081325]/60 border border-white/5 hover:border-brand-cyan/40 transition-all group block"
                  >
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block mb-1">
                      {s.industry}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors mb-2 line-clamp-2">
                      {s.title}
                    </h4>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                      <span className="text-slate-400">{s.client}</span>
                      <span className="font-bold text-brand-lime">{s.executiveSummary.annualSavings || s.metrics[0].value}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
