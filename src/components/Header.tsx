"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Solutions", href: "/solutions" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/solutions#projects" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07111D]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-main.png"
                alt="INCSMART Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center ml-auto mr-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side CTA & Phone */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+919711888111"
              className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 mr-2 text-[#3B82F6]" />
              +91 97118 88111
            </a>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-between pl-5 pr-2 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group cursor-pointer"
            >
              <span className="mr-3">Book a Demo</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-slate-900 group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => (isOpen ? closeMobileMenu() : setIsOpen(true))}
              className="text-slate-400 hover:text-white p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-20 z-40 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="md:hidden fixed inset-x-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto px-3 py-1.5 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="bg-[#0b1a2d] border border-white/10 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-4 text-slate-200 flex flex-col">
              <nav className="flex flex-col text-sm font-semibold text-slate-200">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-white py-2 border-b border-white/10 last:border-b-0 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name === "Contact" ? "Contact Us" : item.name}
                  </Link>
                ))}
              </nav>

              {/* Phone and CTA */}
              <div className="flex flex-col items-center pt-3 border-t border-white/10 space-y-3 mt-1">
                <a
                  href="tel:+919737896176"
                  className="flex items-center text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 mr-1.5 text-[#3B82F6]" />
                  +91 97378 96176
                </a>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="relative inline-flex w-full items-center justify-between pl-4 pr-1.5 py-2 rounded-full text-[11px] font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group cursor-pointer"
                >
                  <span className="mr-2">Book a Demo</span>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-slate-900 group-hover:translate-x-0.5 transition-transform duration-200">
                    <ArrowRight className="h-2.5 w-2.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
