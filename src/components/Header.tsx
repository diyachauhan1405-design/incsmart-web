"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  HelpCircle, 
  Star, 
  Briefcase 
} from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
  description: string;
  icon: React.ComponentType<any>;
  badge?: string;
}

interface NavItem {
  name: string;
  href?: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { name: "Solutions", href: "/solutions" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about/our-team" },
  { 
    name: "Resources", 
    isDropdown: true,
    dropdownItems: [
      { 
        name: "FAQ", 
        href: "/faqs", 
        description: "Answers to common questions", 
        icon: HelpCircle 
      },
      { 
        name: "Client Reviews", 
        href: "/reviews", 
        description: "Client stories & feedback", 
        icon: Star 
      },
      { 
        name: "Careers", 
        href: "/careers", 
        description: "Join our IoT & automation team", 
        icon: Briefcase,
        badge: "Hiring"
      },
    ]
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileResourcesOpen(false);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    }
    if (isResourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResourcesOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsResourcesOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
                alt="IncSmart Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center ml-auto mr-4 lg:mr-8">
            {navItems.map((item) => {
              if (item.isDropdown && item.dropdownItems) {
                return (
                  <div key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsResourcesOpen((prev) => !prev)}
                      className={`inline-flex items-center space-x-1.5 text-sm font-medium transition-colors py-2 whitespace-nowrap cursor-pointer rounded-lg px-2 -mx-2 select-none ${
                        isResourcesOpen 
                          ? "text-[#06B6D4]" 
                          : "text-slate-300 hover:text-white"
                      }`}
                      aria-expanded={isResourcesOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isResourcesOpen ? "rotate-180 text-[#06B6D4]" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    {isResourcesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-[#081325]/95 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        {/* Little top notch glow */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#081325] border-t border-l border-white/10"></div>

                        <div className="relative z-10 flex flex-col space-y-1">
                          {item.dropdownItems.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsResourcesOpen(false)}
                                className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all group/sub border border-transparent hover:border-white/5"
                              >
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/sub:border-[#06B6D4]/40 group-hover/sub:bg-[#06B6D4]/10 transition-colors">
                                  <Icon className="h-4 w-4 text-slate-300 group-hover/sub:text-[#06B6D4] transition-colors" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-white group-hover/sub:text-[#06B6D4] transition-colors">
                                      {sub.name}
                                    </span>
                                    {sub.badge && (
                                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-brand-lime/15 text-brand-lime border border-brand-lime/25">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[11px] text-slate-400 leading-tight block mt-0.5">
                                    {sub.description}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-between pl-5 pr-2 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group cursor-pointer"
            >
              <span className="mr-3">Demo</span>
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
                {navItems.map((item) => {
                  if (item.isDropdown && item.dropdownItems) {
                    return (
                      <div key={item.name} className="border-b border-white/10 py-1">
                        <button
                          type="button"
                          onClick={() => setIsMobileResourcesOpen((prev) => !prev)}
                          className="flex items-center justify-between w-full py-2.5 text-left hover:text-white transition-colors cursor-pointer"
                        >
                          <span className={isMobileResourcesOpen ? "text-[#06B6D4]" : ""}>
                            {item.name}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                              isMobileResourcesOpen ? "rotate-180 text-[#06B6D4]" : ""
                            }`}
                          />
                        </button>

                        {isMobileResourcesOpen && (
                          <div className="pl-3 pr-1 py-1 space-y-1 mb-2 bg-white/[0.03] rounded-xl border border-white/5">
                            {item.dropdownItems.map((sub) => {
                              const Icon = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                  <div className="flex items-center space-x-2.5">
                                    <Icon className="h-3.5 w-3.5 text-[#06B6D4]" />
                                    <span>{sub.name}</span>
                                  </div>
                                  {sub.badge && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-brand-lime/15 text-brand-lime border border-brand-lime/25">
                                      {sub.badge}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href!}
                      className="hover:text-white py-2.5 border-b border-white/10 last:border-b-0 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="flex flex-col items-center pt-3 border-t border-white/10 space-y-3 mt-1">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="relative inline-flex w-full items-center justify-between pl-4 pr-1.5 py-2 rounded-full text-[11px] font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group cursor-pointer"
                >
                  <span className="mr-2">Demo</span>
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
