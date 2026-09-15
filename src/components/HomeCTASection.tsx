"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export default function HomeCTASection() {
  const whatsappUrl = "https://wa.me/919711888111?text=Hello%20IncSmart%20Team%2C%20I%20would%20like%20to%20discuss%20your%20IoT%20and%20automation%20solutions%20and%20schedule%20a%20consultation.%20Please%20connect%20with%20me%20regarding%20the%20same.";

  return (
    <section className="py-20 bg-[#07111D] border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-[#081325]/90 via-[#0C1A2E]/90 to-[#081325]/90 p-8 sm:p-12 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
            <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
              Start Your Smart Infrastructure Journey
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
            Ready to Cut Energy Costs & <br />
            <span className="text-gradient-cyan-lime font-bold">Automate Your Operations?</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Connect with our IoT specialists for a facility audit and customized operational roadmap tailored to your infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group"
            >
              <span>Demo</span>
              <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 active:scale-95 transition-all"
            >
              <MessageSquare className="h-3.5 w-3.5 mr-2 text-emerald-400" />
              <span>Book a Consultation</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
