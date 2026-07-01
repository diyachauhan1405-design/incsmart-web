"use client";

import { useState } from "react";
import { 
  Zap, 
  Clock, 
  Network, 
  Building, 
  Headphones, 
  Layers,
  Plus,
  Minus,
  TrendingUp,
  Leaf
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  iconBg: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does INCSMART reduce energy consumption?",
      answer: "INCSMART uses intelligent IoT sensors and AI-driven analytics to monitor and optimize HVAC, lighting, and equipment performance in real time, helping organizations achieve up to 20% average energy savings.",
      icon: Zap,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines depend on the scale of the facility, typically ranging from 2 to 4 weeks. We perform site assessments and smart design first to ensure minimal disruption to your daily operations.",
      icon: Clock,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      question: "Can the platform integrate with existing systems?",
      answer: "Yes, our edge gateways support standard industry protocols (Modbus, BACnet, MQTT, etc.), allowing seamless integration with your existing HVAC, BMS, and electrical systems.",
      icon: Network,
      iconColor: "text-brand-lime",
      iconBg: "bg-brand-lime/10 border-brand-lime/20"
    },
    {
      question: "Which industries do you serve?",
      answer: "We serve manufacturing plants, commercial buildings, railways, hospitals, hotels, solar plants, educational campuses, and retail spaces across India.",
      icon: Building,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10 border-purple-500/20"
    },
    {
      question: "Do you provide remote monitoring and support?",
      answer: "Yes, we offer 24x7 remote monitoring through our unified cloud platform, backed by proactive support alerts and predictive diagnostics to prevent any downtime.",
      icon: Headphones,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      question: "Is the platform scalable for multiple locations?",
      answer: "Absolutely. The INCSMART platform is cloud-native and highly scalable. You can monitor and manage a single facility or coordinate operations across hundreds of pan-India locations from a single dashboard.",
      icon: Layers,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#07111D] py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
            FAQs
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent"></span>
        </div>

        {/* Heading & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 font-heading">
            Everything You Need to Know <br /> Before <span className="text-gradient-cyan-lime font-bold">Getting Started</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Find answers to the most common questions about our IoT solutions, 
            energy optimization, deployment process, and enterprise support.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const FAQIcon = faq.icon;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 bg-[#081325]/45 backdrop-blur-sm overflow-hidden ${
                  isOpen ? 'border-[#06B6D4]/30 shadow-[0_0_20px_rgba(6,182,212,0.08)]' : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer select-none group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${faq.iconBg} ${faq.iconColor}`}>
                      <FAQIcon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#06B6D4] transition-all" />
                    ) : (
                      <Plus className="h-4 w-4 text-slate-400 group-hover:text-white transition-all" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
                    
                    {/* Answer text */}
                    <div className="flex-1 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </div>

                    {/* Custom SVG telemetry visual for the first open item */}
                    {isOpen && idx === 0 && (
                      <div className="flex-shrink-0 w-[200px] h-[110px] bg-[#0c1a2d] border border-white/10 rounded-xl p-3.5 shadow-2xl relative overflow-hidden flex items-center justify-between select-none">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        
                        {/* Cylinder Graphic */}
                        <div className="flex flex-col items-center space-y-1 relative z-10">
                          <div className="w-12 h-16 rounded-xl border border-brand-lime/30 bg-brand-lime/10 flex flex-col justify-between p-2 items-center relative overflow-hidden">
                            {/* Inner Green Glow */}
                            <div className="absolute bottom-0 inset-x-0 h-2/3 bg-brand-lime/20 animate-pulse"></div>
                            
                            {/* Cap */}
                            <div className="w-8 h-[2px] rounded-full bg-brand-lime/50"></div>
                            {/* Icon */}
                            <Leaf className="w-4 h-4 text-brand-lime relative z-10 animate-bounce" />
                            {/* Base */}
                            <div className="w-8 h-[2px] rounded-full bg-brand-lime/50"></div>
                          </div>
                          <span className="text-[7px] text-slate-500 tracking-wider uppercase font-bold">HVAC Node</span>
                        </div>

                        {/* Connection Line */}
                        <div className="flex-grow flex items-center justify-center relative px-2">
                          <svg className="w-full h-4 overflow-visible" fill="none">
                            <path d="M 0 8 H 40" stroke="#84cc16" strokeWidth="1" strokeDasharray="3 3" />
                            <circle r="2.5" fill="#06B6D4">
                              <animateMotion dur="1.5s" repeatCount="indefinite" path="M 0 8 H 40" />
                            </circle>
                          </svg>
                        </div>

                        {/* Dashboard Analytics Graphic */}
                        <div className="flex flex-col items-center space-y-1 relative z-10">
                          <div className="w-16 h-12 rounded-lg border border-brand-cyan/30 bg-brand-cyan/10 p-1 flex flex-col justify-between">
                            <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold">
                              <span>Live</span>
                              <span className="text-brand-lime">20%</span>
                            </div>
                            {/* SVG Mini Line Chart */}
                            <div className="h-5">
                              <svg className="w-full h-full" viewBox="0 0 50 20" preserveAspectRatio="none">
                                <path d="M 0 20 L 10 12 L 20 16 L 30 8 L 40 10 L 50 4" fill="none" stroke="#06B6D4" strokeWidth="1" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-[7px] text-slate-500 tracking-wider uppercase font-bold">Telemetry</span>
                        </div>

                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
