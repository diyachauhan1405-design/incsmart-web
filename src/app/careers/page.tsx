"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Zap, 
  Users, 
  TrendingUp, 
  HeartHandshake,
  UploadCloud,
  CheckCircle2,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const perks = [
  {
    icon: Cpu,
    title: "Cutting-Edge IoT Tech",
    description: "Work on real-world industrial IoT, predictive AI models, and edge compute platforms.",
    color: "text-brand-cyan",
    bg: "bg-cyan-500/10 border-cyan-500/20"
  },
  {
    icon: TrendingUp,
    title: "Fast Career Acceleration",
    description: "Grow rapidly in a high-impact team trusted by enterprises like PVR, Western Railway & UltraTech.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10 border-brand-lime/20"
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Cross-functional, flat-hierarchy teams that value curiosity, speed, and ownership.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20"
  },
  {
    icon: HeartHandshake,
    title: "Competitive Compensation",
    description: "Attractive remuneration, project bonuses, wellness benefits, and flexible work options.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20"
  }
];

const openPositions = [
  {
    id: "iot-embedded-eng",
    title: "IoT Firmware & Embedded Systems Engineer",
    department: "Hardware & Edge",
    location: "Gandhinagar, Gujarat / Hybrid",
    type: "Full-time",
    experience: "2-5 Years",
    description: "Lead firmware development for our next-gen edge IoT gateways, supporting BACnet, Modbus, MQTT, and industrial communication protocols.",
    tags: ["Embedded C/C++", "RTOS", "Modbus", "MQTT", "Hardware Debugging"]
  },
  {
    id: "fullstack-iot-dev",
    title: "Senior Full Stack IoT Platform Engineer",
    department: "Software & Cloud",
    location: "Remote / Gandhinagar",
    type: "Full-time",
    experience: "3-6 Years",
    description: "Architect and build scalable telemetry pipelines, real-time analytics dashboards, and cloud API microservices handling millions of daily sensor data points.",
    tags: ["Next.js", "TypeScript", "Node.js", "Time-Series DB", "AWS / Docker"]
  },
  {
    id: "automation-scada-spec",
    title: "Industrial Automation & BMS Specialist",
    department: "Solutions Engineering",
    location: "Pan-India / Field Deployments",
    type: "Full-time",
    experience: "2-4 Years",
    description: "Design and implement smart BMS and HVAC energy optimization solutions at client manufacturing facilities, commercial towers, and transit hubs.",
    tags: ["BMS", "SCADA", "HVAC Controls", "PLC Integration", "Energy Audits"]
  },
  {
    id: "enterprise-sales-mgr",
    title: "Enterprise Solutions & Sales Manager",
    department: "Business Development",
    location: "Gandhinagar / Pan-India",
    type: "Full-time",
    experience: "3-7 Years",
    description: "Drive strategic partnerships with industrial enterprises, commercial real estate developers, and infrastructure operators looking for smart automation.",
    tags: ["B2B Enterprise", "Solution Selling", "Energy Efficiency", "Account Management"]
  }
];

export default function CareersPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    position: "IoT Firmware & Embedded Systems Engineer",
    experience: "2-5 Years",
    message: "",
    resumeFileName: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState({ ...formState, resumeFileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Tag & Hero Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#081325]/70 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                We're Hiring • Join IncSmart
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
              Build the Future of <br />
              <span className="text-gradient-cyan-lime font-bold">Industrial Intelligence</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At IncSmart, we are transforming traditional manufacturing, railways, and commercial buildings into energy-efficient, automated, and intelligent smart facilities. Come build with us.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                WHY WORK WITH US
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-heading">
                Life & Growth at IncSmart
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div 
                    key={i}
                    className="p-6 rounded-2xl border border-white/5 bg-[#081325]/45 hover:border-white/10 hover:bg-[#0c1a2d]/60 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${perk.bg} ${perk.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{perk.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Open Positions List */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-lime uppercase">
                  CURRENT OPENINGS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-heading">
                  Find Your Role
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-2 sm:mt-0">
                Showing {openPositions.length} active opportunities
              </p>
            </div>

            <div className="space-y-4">
              {openPositions.map((job) => (
                <div 
                  key={job.id}
                  className="p-6 rounded-2xl border border-white/5 bg-[#081325]/50 hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/70 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4]">
                        {job.department}
                      </span>
                      <span className="text-slate-500 text-xs">•</span>
                      <span className="flex items-center text-xs text-slate-400">
                        <MapPin className="h-3 w-3 mr-1 text-slate-500" />
                        {job.location}
                      </span>
                      <span className="text-slate-500 text-xs">•</span>
                      <span className="flex items-center text-xs text-slate-400">
                        <Clock className="h-3 w-3 mr-1 text-slate-500" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#06B6D4] transition-colors mb-2">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex items-center">
                    <a
                      href="#application-form"
                      onClick={() => setFormState({ ...formState, position: job.title })}
                      className="inline-flex items-center justify-between px-5 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-md group/btn"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* APPLICATION FORM PER SECTION 1.1 / CAREERS */}
          <div id="application-form" className="rounded-3xl border border-white/10 bg-[#081325]/80 p-8 sm:p-12 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] scroll-mt-28">
            <div className="max-w-3xl mx-auto">
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-brand-cyan uppercase tracking-widest mb-3">
                  Quick Application
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Submit Your Candidate Profile
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  All submissions are delivered directly to our talent acquisition team at{" "}
                  <a href="mailto:careers@incsmart.in" className="text-brand-cyan underline">careers@incsmart.in</a>
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">Application Received!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, {formState.fullName || "Candidate"}. Our hiring team will review your profile and reach out to you within 2-3 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex text-xs font-bold text-brand-cyan hover:underline pt-2 cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className="w-full bg-[#040B13]/70 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#040B13]/70 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Current Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-[#040B13]/70 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Current Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="City, State"
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        className="w-full bg-[#040B13]/70 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  {/* Position & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Position / Area of Interest *
                      </label>
                      <select
                        value={formState.position}
                        onChange={(e) => setFormState({ ...formState, position: e.target.value })}
                        className="w-full bg-[#040B13]/70 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        {openPositions.map((pos) => (
                          <option key={pos.id} value={pos.title} className="bg-[#081325] text-white">
                            {pos.title}
                          </option>
                        ))}
                        <option value="Other Open Application" className="bg-[#081325] text-white">
                          Other / Open Application
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Experience Level *
                      </label>
                      <select
                        value={formState.experience}
                        onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                        className="w-full bg-[#040B13]/70 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        <option value="0-1 Years (Fresher / Entry)" className="bg-[#081325] text-white">0-1 Years (Fresher / Entry)</option>
                        <option value="1-3 Years" className="bg-[#081325] text-white">1-3 Years</option>
                        <option value="3-5 Years" className="bg-[#081325] text-white">3-5 Years</option>
                        <option value="5-8 Years" className="bg-[#081325] text-white">5-8 Years</option>
                        <option value="8+ Years (Lead / Principal)" className="bg-[#081325] text-white">8+ Years (Lead / Principal)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message / Key Highlights
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your background, key projects, and what excites you about IncSmart..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#040B13]/70 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    ></textarea>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Resume Upload (PDF / DOCX) *
                    </label>
                    <label className="border-2 border-dashed border-white/15 hover:border-brand-cyan/40 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors text-center">
                      <UploadCloud className="w-8 h-8 text-brand-cyan mb-2" />
                      <span className="text-xs font-semibold text-white">
                        {formState.resumeFileName || "Click to browse or drop your resume here"}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1">
                        Supported formats: PDF, DOC, DOCX up to 10MB
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required={!formState.resumeFileName}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 cursor-pointer"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
