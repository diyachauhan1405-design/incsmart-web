"use client";

import { useState } from "react";
import { Phone, Send, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "918980001836";
const CALL_NUMBER = "+918980001836";

export default function HomeContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact-us"
      className="bg-[#081325]/25 py-14 sm:py-20 border-t border-white/5 relative z-10 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[1.5px] bg-[#06B6D4]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#06B6D4] uppercase">
              Contact Us
            </span>
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading mb-4">
            Get in Touch With <span className="text-brand-cyan">Our Team</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Have questions about our IoT solutions? Reach out via WhatsApp or call us
            directly, or fill in the form and we&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left — WhatsApp & Call */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20INCSMART%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solutions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-[#0b1a2d]/55 border border-white/5 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  WhatsApp
                </p>
                <p className="text-base font-bold text-white font-heading">Chat With Us</p>
                <p className="text-xs text-slate-400 mt-1">+91 89800 01836</p>
              </div>
            </a>

            <a
              href={`tel:${CALL_NUMBER}`}
              className="group flex items-center gap-5 bg-[#0b1a2d]/55 border border-white/5 hover:border-brand-blue/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-brand-blue" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-blue mb-1">
                  Call Us
                </p>
                <p className="text-base font-bold text-white font-heading">Talk to an Expert</p>
                <p className="text-xs text-slate-400 mt-1">+91 89800 01836</p>
              </div>
            </a>

            <div className="bg-[#0b1a2d]/40 border border-white/5 rounded-2xl p-6 space-y-4 flex-1">
              <p className="text-xs font-bold text-white font-heading">Quick Information</p>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Email</p>
                  <p className="text-xs text-slate-300">info@incsmart.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Head Office</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    305, The Landmark, Mota Varachha, Surat, Gujarat 394101
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Business Hours</p>
                  <p className="text-xs text-slate-300">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Inquiry form */}
          <div className="lg:col-span-7 bg-[#081325]/30 border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white font-heading mb-2">
                Send Us Your Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                Fill out the form below and our team will get back to you shortly.
              </p>

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
                    placeholder="Company Name"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all"
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

                <textarea
                  placeholder="Tell us about your project or requirements... *"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-blue/30 transition-all resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-blue-600 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs font-bold text-emerald-400">
                    Thank you! Your inquiry has been sent successfully.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
