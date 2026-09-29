"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Building2, 
  TrendingUp, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Train, 
  Film, 
  Factory, 
  Hospital 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectsList = [
  {
    id: "rajhans-cinemas",
    title: "Rajhans Cinemas",
    industry: "Cinema Exhibition & Entertainment",
    location: "Gujarat, India",
    icon: Film,
    challenge: "High HVAC energy expenditure, erratic hall temperatures, and high manual staff adjustments during varying movie screenings.",
    solution: "Deployed IoT multi-sensor telemetry and automated smart damper controllers modulating HVAC based on real-time occupancy and showtimes.",
    scope: "Multi-week comprehensive energy audit across active auditoriums with 10,000+ admits tracked.",
    technology: ["Edge IoT Gateways", "Smart Damper Actuators", "Real-Time Telemetry", "Occupancy Scheduling"],
    outcome: "Achieved 18.74% verified energy reduction per admit, 79% drop in manual interventions, and ₹851,545 annual projected savings.",
    imageUrl: "/rajhans-cinemas-auditorium.jpg",
    caseStudyId: "rajhans-cinemas"
  },
  {
    id: "pvr-inox",
    title: "PVR INOX Multiplexes",
    industry: "Commercial Entertainment & Malls",
    location: "Mumbai, Delhi & Ahmedabad",
    icon: Film,
    challenge: "High HVAC energy expenditure and irregular temperature regulation during peak and off-peak theater screenings.",
    solution: "Deployed IncSmart IoT Gateways and smart VAV damper controllers integrated into a unified cloud HVAC automation system.",
    scope: "Multi-property deployment across 14 multiplex screens with 24x7 telemetry monitoring.",
    technology: ["IoT Edge Gateways", "BACnet MS/TP", "AI Demand Scheduling", "Occupancy Sensors"],
    outcome: "Achieved 20% verified reduction in HVAC energy consumption and enhanced indoor comfort consistency.",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    caseStudyId: "pvr-inox"
  },
  {
    id: "western-railway",
    title: "Western Railway",
    industry: "Transit & Critical Infrastructure",
    location: "Western Zone, India",
    icon: Train,
    challenge: "Lack of centralized visibility over remote traction substations, creating safety hazards and delayed failure alerts.",
    solution: "Engineered ruggedized edge telemetry units to continuously capture transformer temperature, current, voltage, and circuit breaker trip signals.",
    scope: "18 traction substations equipped with real-time GSM/Ethernet failover telemetry.",
    technology: ["Rugged Edge Gateways", "Modbus RTU", "Cellular Failover", "Predictive NOC Alerts"],
    outcome: "Reduced substation downtime by 15% and enabled instantaneous predictive failure notifications to ground teams.",
    imageUrl: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80",
    caseStudyId: "western-railway"
  },
  {
    id: "ultratech-cement",
    title: "UltraTech Cement",
    industry: "Heavy Manufacturing & Process Plants",
    location: "Gujarat Manufacturing Unit",
    icon: Factory,
    challenge: "High machine downtime from undetected motor vibrations and energy inefficiencies in heavy raw-mill drives.",
    solution: "Installed smart vibration, current, and temperature sensor arrays connected to IncSmart's cloud analytics engine.",
    scope: "Continuous vibration and power telemetry across 40+ high-power critical mill drives.",
    technology: ["Wireless Vibration Nodes", "MQTT Broker", "Anomaly Detection AI", "Time-Series Cloud"],
    outcome: "Eliminated unplanned kiln stoppages and achieved 12% power factor correction optimization.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    caseStudyId: "ultratech-cement"
  },
  {
    id: "global-hospital",
    title: "Global Multispeciality Hospital",
    industry: "Healthcare & Critical Facilities",
    location: "Vadodara, Gujarat",
    icon: Hospital,
    challenge: "Strict OT room air pressurization and indoor air quality standards with high uninterrupted power costs.",
    solution: "Integrated building management and smart energy meters with automated emergency power backup supervision.",
    scope: "Full-facility environmental monitoring covering 6 Operation Theaters and 120 Intensive Care beds.",
    technology: ["Differential Pressure Sensors", "BMS Integration", "UPS Health Monitor", "Real-Time Telemetry"],
    outcome: "100% compliance with NABH surgical standards and 14% overall electrical utility optimization.",
    imageUrl: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
    caseStudyId: "global-hospital"
  },
  {
    id: "dlf-cybercity",
    title: "DLF CyberCity Tech Park",
    industry: "Commercial Office Real Estate",
    location: "Gurugram, NCR",
    icon: Building2,
    challenge: "Fragmented sub-metering and excessive lighting/chiller runtimes during off-hours across multi-tenant corporate towers.",
    solution: "Centralized cloud BMS aggregating 200+ smart energy meters with automated scheduled chiller modulation.",
    scope: "2 commercial towers with over 600,000 sq. ft. of prime office space.",
    technology: ["Smart IoT Energy Meters", "Chiller Plant Automation", "Cloud Multi-Tenant Portal"],
    outcome: "18% average peak-hour demand reduction and automated monthly tenant utility reporting.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    caseStudyId: "dlf-cybercity"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#07111D] flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Ambience glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#081325]/70 backdrop-blur-md mb-6">
              <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                Proven Implementations
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
              Our Delivered <br />
              <span className="text-gradient-cyan-lime font-bold">Projects & Installations</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore how IncSmart engineers and deploys IoT automation across manufacturing plants, transit infrastructure, hospitals, and commercial properties throughout India.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projectsList.map((project) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.id}
                  className="rounded-3xl border border-white/5 bg-[#081325]/50 hover:border-brand-cyan/25 hover:bg-[#0c1a2d]/70 transition-all duration-300 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                    
                    {/* Left: Project Image */}
                    <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#081325]/90 border border-white/10 rounded-full px-3 py-1 flex items-center space-x-1.5 backdrop-blur-md text-[10px] font-bold text-slate-300">
                        <Icon className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{project.industry}</span>
                      </div>
                    </div>

                    {/* Right: Project Details */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 text-xs text-slate-400 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{project.location}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors font-heading">
                          {project.title}
                        </h2>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                        <div>
                          <strong className="text-white font-semibold">Requirement / Challenge:</strong>{" "}
                          <span className="text-slate-400">{project.challenge}</span>
                        </div>
                        <div>
                          <strong className="text-white font-semibold">Solution Implemented:</strong>{" "}
                          <span className="text-slate-400">{project.solution}</span>
                        </div>
                        <div>
                          <strong className="text-white font-semibold">Scope of Work:</strong>{" "}
                          <span className="text-slate-400">{project.scope}</span>
                        </div>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technology.map((tech, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 border border-white/5 text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Outcome Bar & CTA */}
                      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-2 text-xs font-semibold text-brand-lime">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                          <span>{project.outcome}</span>
                        </div>

                        <Link
                          href={`/case-studies/${project.caseStudyId}`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-md group/btn self-start sm:self-auto"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3 h-3 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
