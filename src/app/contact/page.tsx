"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  Shield,
  Zap,
  Users,
  CheckCircle,
  HelpCircle,
  MessageSquare,
  Building,
  Headphones
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndiaMap from "@/components/IndiaMap";
import { storeLocations } from "@/data/storeLocations";

// Graphic resources
import cloudDiagram from "../../../public/cloud-diagram.png";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#07111D] text-white flex flex-col overflow-hidden">
      <Header />

      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="relative py-20 border-b border-white/5 bg-[#07111D] overflow-hidden bg-grid-pattern">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column content */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[1.5px] bg-[#06B6D4]"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
                    CONTACT US
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
                  Let's Build Smarter <br />
                  Infrastructure <span className="text-brand-cyan">Together.</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Have a project in mind or need more information about our solutions? Our team is here to help you transform your facilities with intelligent IoT, automation, and real-time insights.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link href="#form-section" className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto">
                    <span>Send us a Message</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+918980001836" className="border border-white/10 hover:bg-white/5 active:scale-95 text-white rounded-lg px-6 py-3 text-xs font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                    <Phone className="w-4 h-4 text-brand-blue" />
                    <span>Talk to an Expert</span>
                  </a>
                </div>
              </div>

              {/* Right Column Visual layout */}
              <div className="lg:col-span-7 relative flex justify-center">
                <div className="relative w-full aspect-[4/3] rounded-3xl border border-white/5 bg-[#081325]/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <Image 
                    src={cloudDiagram} 
                    alt="INCSMART Contact Connection Overview Diagram" 
                    fill 
                    className="object-contain opacity-90 group-hover:scale-[1.01] transition-transform duration-500"
                    priority
                  />

                  {/* Hotspots matching the diagram */}
                  <div className="absolute top-[8%] left-[55%] bg-[#081325]/90 border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-bold text-slate-300 backdrop-blur-md hidden md:block">
                    IoT Solutions
                  </div>
                  <div className="absolute top-[12%] right-[10%] bg-[#081325]/90 border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-bold text-slate-300 backdrop-blur-md hidden md:block">
                    Energy Optimization
                  </div>
                  <div className="absolute top-[38%] left-[45%] bg-[#081325]/90 border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-bold text-slate-300 backdrop-blur-md hidden md:block">
                    Real-time Monitor
                  </div>
                  <div className="absolute top-[42%] right-[6%] bg-[#081325]/90 border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-bold text-slate-300 backdrop-blur-md hidden md:block">
                    Smart Automation
                  </div>
                  <div className="absolute bottom-[10%] left-[60%] bg-[#081325]/90 border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-bold text-slate-300 backdrop-blur-md hidden md:block">
                    24x7 Support
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WE'RE HERE TO HELP */}
        <section className="py-20 bg-[#081325]/25 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                We're Here to Help
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Reach out to us through any of the channels below or fill out the form and our team will get back to you shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-brand-blue mb-4" />
                <h4 className="text-sm font-bold text-white font-heading">Head Office</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  INCSMART Technologies Pvt. Ltd.<br />
                  305, The Landmark, Near Swaminarayan Temple, Mota Varachha, Surat, Gujarat 394101, India
                </p>
              </div>

              <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center">
                <Phone className="w-8 h-8 text-brand-lime mb-4" />
                <h4 className="text-sm font-bold text-white font-heading">Phone</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  +91 89800 01836<br />
                  +91 63588 20335
                </p>
              </div>

              <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center">
                <Mail className="w-8 h-8 text-brand-cyan mb-4" />
                <h4 className="text-sm font-bold text-white font-heading">Email</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  info@incsmart.in<br />
                  sales@incsmart.in
                </p>
              </div>

              <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-sm font-bold text-white font-heading">Business Hours</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FORM & MAP LOCATIONS */}
        <section id="form-section" className="py-20 bg-[#07111D] relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form card */}
              <div className="lg:col-span-6 bg-[#081325]/30 border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <h3 className="text-xl font-bold text-white font-heading mb-2">Send us a Message</h3>
                <p className="text-xs text-slate-400 mb-8">Fill out the form and our team will get back to you.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name *"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all"
                      required
                    />
                    <input 
                      type="text" 
                      placeholder="Company Name *"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="email" 
                      placeholder="Email Address *"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all"
                      required
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number *"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all"
                      required
                    />
                  </div>

                  <select 
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-400 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all"
                    required
                  >
                    <option value="" disabled>Select a Topic *</option>
                    <option value="iot">Industrial IoT</option>
                    <option value="energy">Energy Optimization</option>
                    <option value="hvac">HVAC Controls</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>

                  <textarea 
                    placeholder="Tell us about your project or requirements... *"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all resize-none"
                    required
                  ></textarea>

                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-blue-600 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  {submitted && (
                    <div className="text-center text-xs font-bold text-emerald-400 mt-2">
                      Thank you! Your inquiry has been sent successfully.
                    </div>
                  )}
                </form>
              </div>

              {/* Map/Offices Column */}
              <div className="lg:col-span-6">
                <IndiaMap
                  locations={storeLocations}
                  title="Our Offices"
                  subtitle="We have a strong presence to serve you better."
                />
              </div>

            </div>
          </div>
        </section>

        {/* BOTTOM METRICS BADGES */}
        <section className="py-20 bg-[#081325]/25 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 flex items-start space-x-4">
                <Zap className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Quick Response</h4>
                  <p className="text-[10px] text-slate-500 mt-1">We respond to all inquiries within 24 hours.</p>
                </div>
              </div>

              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 flex items-start space-x-4">
                <Users className="w-6 h-6 text-brand-lime flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Expert Consultation</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Get expert advice for your unique requirements.</p>
                </div>
              </div>

              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 flex items-start space-x-4">
                <Building className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Customized Solutions</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Tailored IoT solutions that fit your business perfectly.</p>
                </div>
              </div>

              <div className="bg-[#0b1a2d]/45 border border-white/5 rounded-2xl p-6 flex items-start space-x-4">
                <Headphones className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">End-to-End Support</h4>
                  <p className="text-[10px] text-slate-500 mt-1">From planning to deployment and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BOTTOM PANEL */}
        <section className="py-20 relative bg-[#07111D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-[#0b1a2d] to-[#081325] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col space-y-4 max-w-2xl text-left">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-[2px] bg-[#3b82f6]"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase">
                      Ready to Transform
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    Your Infrastructure?
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Partner with INCSMART and experience the power of intelligent infrastructure, automation, and real-time insights.
                  </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <a
                    href="tel:+918980001836"
                    className="bg-brand-blue hover:bg-blue-600 active:scale-95 text-white rounded-lg px-8 py-4 text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
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
