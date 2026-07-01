"use client";

import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const solutionLinks = [
    { label: "Industrial IoT", href: "#industrial-iot" },
    { label: "HVAC Optimization", href: "#hvac-optimization" },
    { label: "Energy Management", href: "#energy-management" },
    { label: "Building Management", href: "#building-management" },
    { label: "Fire Monitoring", href: "#fire-monitoring" }
  ];

  const industryLinks = [
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Commercial Buildings", href: "#commercial-buildings" },
    { label: "Railways", href: "#railways" },
    { label: "Hospitals", href: "#hospitals" },
    { label: "Hotels", href: "#hotels" },
    { label: "Solar Plants", href: "#solar-plants" },
    { label: "Education", href: "#education" },
    { label: "Retail & Malls", href: "#retail-&-malls" }
  ];

  const companyLinks = [
    { label: "About Us", href: "#about-us" },
    { label: "Our Process", href: "#our-process" },
    { label: "Projects", href: "#projects" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" }
  ];

  const resourceLinks = [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Brochures", href: "#brochures" },
    { label: "FAQs", href: "#faqs" },
    { label: "Support", href: "#support" }
  ];

  return (
    <footer className="bg-[#040B13] border-t border-white/5 pt-16 pb-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <Link href="/" className="inline-flex items-center space-x-1.5 select-none">
              <span className="text-xl font-black text-white tracking-tight font-heading">
                INC<span className="text-[#06B6D4]">SMART</span>
              </span>
            </Link>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
              Smart Infrastructure. Smarter Future.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              INCSMART delivers intelligent IoT solutions that optimize energy, 
              automate operations, and create connected, efficient, and 
              sustainable environments.
            </p>
            {/* Social Links Row */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@incsmart.in" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-1.5 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div className="lg:col-span-1.5 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Contact & Newsletter */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-3 mt-3.5">
                <li className="flex items-center space-x-2.5 text-xs text-slate-400">
                  <Phone className="h-3.5 w-3.5 text-[#06B6D4]" />
                  <a href="tel:+919711888111" className="hover:text-white transition-colors">
                    +91 97118 88111
                  </a>
                </li>
                <li className="flex items-center space-x-2.5 text-xs text-slate-400">
                  <Mail className="h-3.5 w-3.5 text-[#06B6D4]" />
                  <a href="mailto:info@incsmart.in" className="hover:text-white transition-colors">
                    info@incsmart.in
                  </a>
                </li>
                <li className="flex items-start space-x-2.5 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-[#06B6D4] mt-0.5" />
                  <span className="leading-relaxed">Gurugram, Haryana, India</span>
                </li>
              </ul>
            </div>

            {/* Newsletter form */}
            <div className="space-y-2.5 pt-2 border-t border-white/5">
              <h4 className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Newsletter</h4>
              <form 
                onSubmit={(e) => e.preventDefault()} 
                className="flex items-stretch rounded-lg overflow-hidden border border-white/5 bg-[#081325]/40 focus-within:border-[#06B6D4]/30"
              >
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-transparent px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none w-full"
                  required 
                />
                <button 
                  type="submit" 
                  className="px-3 bg-brand-cyan hover:opacity-95 text-slate-900 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom copyright / policy row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} INCSMART Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="#terms-of-service" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
