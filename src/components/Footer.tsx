"use client";

import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin
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
    { label: "FAQs", href: "/faqs" },
    { label: "Support", href: "#support" }
  ];

  return (
    <footer className="bg-[#040B13] border-t border-white/5 pt-16 pb-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10 lg:gap-x-10 mb-12">
          
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
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-white/5 bg-[#081325]/50 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:bg-[#0c1a2d]/60 transition-all active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns — equal spacing on desktop */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 xl:gap-x-10 gap-y-8">
          {/* Solutions */}
          <div className="flex flex-col gap-4">
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

          {/* Industries */}
          <div className="flex flex-col gap-4">
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

          {/* Company */}
          <div className="flex flex-col gap-4">
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

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-xs text-slate-400">
                <Phone className="h-3.5 w-3.5 text-[#06B6D4] shrink-0" />
                <a href="tel:+919711888111" className="hover:text-white transition-colors">
                  +91 97118 88111
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-400">
                <Mail className="h-3.5 w-3.5 text-[#06B6D4] shrink-0" />
                <a href="mailto:info@incsmart.in" className="hover:text-white transition-colors break-all">
                  info@incsmart.in
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-[#06B6D4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
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
