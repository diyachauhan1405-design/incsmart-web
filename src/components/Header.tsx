"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

type DropdownItem = { name: string; href: string };

type NavItem = {
  name: string;
  href?: string;
  hasDropdown: boolean;
  type: string;
  dropdownItems?: DropdownItem[];
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current?.contains(target)) return;
      if (mobileMenuRef.current?.contains(target)) return;
      setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems: NavItem[] = [
    { name: "Solutions", href: "/solutions", hasDropdown: false, type: "" },
    {
      name: "About Us",
      hasDropdown: true,
      type: "about",
      dropdownItems: [
        { name: "Our Team", href: "/about/our-team" },
        { name: "FAQs", href: "/about/faqs" },
      ],
    },
    { name: "Projects", href: "/solutions#projects", hasDropdown: false, type: "" },
    { name: "Contact", href: "/contact", hasDropdown: false, type: "" },
  ];

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
          <nav className="hidden md:flex space-x-8 items-center ml-auto mr-10" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.type)}
                      className={`flex items-center text-sm font-medium transition-colors py-2 focus:outline-none cursor-pointer ${
                        activeDropdown === item.type ? "text-white" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.type ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.type && item.dropdownItems && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-[#0b1a2d] border border-white/10 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 relative"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
          <div
            ref={mobileMenuRef}
            className="md:hidden fixed inset-x-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto px-3 py-1.5 animate-in fade-in slide-in-from-top-5 duration-200"
          >
          <div className="bg-[#0b1a2d] border border-white/10 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-4 text-slate-200 space-y-4 flex flex-col">
            {/* Logo Row */}
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                <Image
                  src="/logo-main.png"
                  alt="INCSMART Logo"
                  width={120}
                  height={34}
                  className="h-7 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col text-sm font-semibold text-slate-200">
              <Link 
                href="/solutions" 
                className="hover:text-white py-2 border-b border-white/10 transition-colors" 
                onClick={closeMobileMenu}
              >
                Solutions
              </Link>
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleDropdown("about-mobile")}
                  className={`flex items-center justify-between w-full py-2 transition-colors text-left ${
                    activeDropdown === "about-mobile" ? "text-white" : "hover:text-white"
                  }`}
                >
                  About Us
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                      activeDropdown === "about-mobile" ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about-mobile" && (
                  <div className="mb-2 rounded-lg border border-white/10 bg-[#07111D]/80 overflow-hidden">
                    <Link
                      href="/about/our-team"
                      className="block px-3 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 border-b border-white/5 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/about/faqs"
                      className="block px-3 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      FAQs
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/solutions#projects" 
                className="hover:text-white py-2 border-b border-white/10 transition-colors" 
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-white py-2 transition-colors" 
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </nav>

            {/* Phone and CTA */}
            <div className="flex flex-col items-center pt-3 border-t border-white/10 space-y-3">
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
