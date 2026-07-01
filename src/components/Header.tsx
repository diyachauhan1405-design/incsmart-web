"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X, ArrowRight, Mail, Lock } from "lucide-react";

interface HeaderProps {
  isLoggedIn?: boolean;
  onSignInSuccess?: () => void;
}

export default function Header({ isLoggedIn = false, onSignInSuccess }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const navItems = isLoggedIn ? [
    { name: "Home", href: "/", isActive: true, hasDropdown: false, type: "" },
    { name: "Solutions", href: "/solutions", hasDropdown: false, type: "" },
    { name: "Industries", href: "/solutions#industries", hasDropdown: false, type: "" },
    { name: "Projects", href: "/solutions#projects", hasDropdown: false, type: "" },
    { name: "About Us", href: "/about", hasDropdown: false, type: "" },
    { name: "Contact Us", href: "/contact", hasDropdown: false, type: "" }
  ] : [
    { name: "Solutions", href: "/solutions", hasDropdown: false, type: "" },
    { name: "About Us", href: "/about", hasDropdown: false, type: "" },
    { name: "Projects", href: "/solutions#projects", hasDropdown: false, type: "" },
    { name: "Contact", href: "/contact", hasDropdown: false, type: "" }
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
          <nav className="hidden md:flex space-x-8 items-center ml-auto mr-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.type!)}
                    className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 focus:outline-none cursor-pointer"
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.type ? 'transform rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className={`text-sm font-medium hover:text-white transition-colors py-2 relative ${
                      item.isActive 
                        ? 'text-white after:absolute after:-bottom-[26px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500' 
                        : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu (mock implementation for beautiful user experience) */}
                {item.hasDropdown && activeDropdown === item.type && (
                  <div className="absolute left-0 mt-2 w-56 rounded-xl bg-[#0d1b2a]/95 border border-white/10 shadow-2xl backdrop-blur-xl p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.type === "solutions" && (
                      <>
                        <Link href="/solutions#iot" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">IoT & Automation Architecture</Link>
                        <Link href="/solutions#hvac" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">HVAC Management Systems</Link>
                        <Link href="/solutions#energy" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">Smart Energy Management</Link>
                        <Link href="/solutions#bms" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">Building Management (BMS)</Link>
                        <Link href="/solutions#fire" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">Smart Hydrant & Sprinklers</Link>
                      </>
                    )}
                    {item.type === "industries" && (
                      <>
                        <Link href="/solutions#industries" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">Manufacturing & Plants</Link>
                        <Link href="/solutions#industries" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">Commercial Real Estate</Link>
                        <Link href="/solutions#industries" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg">Infrastructure Projects</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Side CTA & Phone */}
          <div className="hidden md:flex items-center space-x-6">
            {isLoggedIn ? (
              <>
                <a
                  href="tel:+919711888111"
                  className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2 text-[#3B82F6]" />
                  +91 97118 88111
                </a>
                <Link
                  href="#book-audit"
                  className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-lg px-5 py-2.5 text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Book a Free Audit
                </Link>
              </>
            ) : (
              <button
                onClick={() => setIsSignInOpen(true)}
                className="relative inline-flex items-center justify-between pl-5 pr-2 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-brand-cyan/20 group cursor-pointer"
              >
                <span className="mr-3">Sign In</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-slate-900 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 z-50 px-4 py-2 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="bg-[#F3F4F6] border border-slate-200/80 rounded-3xl shadow-2xl p-6 text-slate-800 space-y-6 flex flex-col">
            {/* Logo Row */}
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo-main.png"
                  alt="INCSMART Logo"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain brightness-0"
                  priority
                />
              </Link>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-4 text-base font-semibold text-slate-800">
              {isLoggedIn ? (
                <>
                  <Link 
                    href="/" 
                    className="hover:text-black py-1 border-b border-slate-200/60 transition-colors text-blue-600 font-bold" 
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="#solutions" 
                    className="hover:text-black py-1 border-b border-slate-200/60 transition-colors" 
                    onClick={() => setIsOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link 
                    href="#industries" 
                    className="hover:text-black py-1 border-b border-slate-200/60 transition-colors" 
                    onClick={() => setIsOpen(false)}
                  >
                    Industries
                  </Link>
                </>
              ) : (
                <Link 
                  href="#solutions" 
                  className="hover:text-black py-1 border-b border-slate-200/60 transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
              )}
              <Link 
                href="#about-us" 
                className="hover:text-black py-1 border-b border-slate-200/60 transition-colors" 
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="#case-studies" 
                className="hover:text-black py-1 border-b border-slate-200/60 transition-colors" 
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="hover:text-black py-1 transition-colors" 
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>

            {/* Phone and CTA */}
            <div className="flex flex-col items-center pt-4 border-t border-slate-200/80 space-y-4">
              {isLoggedIn ? (
                <>
                  <a
                    href="tel:+919711888111"
                    className="flex items-center text-sm font-bold text-slate-700 hover:text-black transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2 text-[#3B82F6]" />
                    +91 97118 88111
                  </a>
                  <Link
                    href="#book-audit"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Book a Free Audit
                  </Link>
                </>
              ) : (
                <>
                  <a
                    href="tel:+919737896176"
                    className="flex items-center text-sm font-bold text-slate-700 hover:text-black transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2 text-slate-700" />
                    +91 97378 96176
                  </a>
                  <button
                    onClick={() => { setIsOpen(false); setIsSignInOpen(true); }}
                    className="w-full text-center py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-black transition-colors shadow-md cursor-pointer"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Sign In Modal Backdrop Overlay */}
      {isSignInOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          {/* Modal Panel container */}
          <div className="bg-[#081325]/95 border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl overflow-hidden backdrop-blur-md animate-in zoom-in-95 duration-200">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Close Button */}
            <button 
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            {/* Heading */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-extrabold text-white font-heading">
                Sign In to <span className="text-[#06B6D4]">INCSMART</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Welcome back! Enter your details to access your dashboard.
              </p>
            </div>

            {/* Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSignInOpen(false);
                if (onSignInSuccess) {
                  onSignInSuccess();
                }
              }} 
              className="space-y-4"
            >
              
              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#06B6D4]/30 focus:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Password</label>
                  <a href="#forgot" className="text-[9px] font-semibold text-[#06B6D4] hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-[#040B13]/60 border border-white/5 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#06B6D4]/30 focus:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2 pt-1">
                <input 
                  type="checkbox" 
                  id="remember-me"
                  className="rounded border-white/10 bg-[#040B13] text-[#06B6D4] focus:ring-0 h-3.5 w-3.5 accent-[#06B6D4] cursor-pointer" 
                />
                <label htmlFor="remember-me" className="text-[10px] text-slate-400 font-semibold cursor-pointer select-none">
                  Keep me signed in on this device
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-95 active:scale-[0.98] transition-all shadow-lg hover:shadow-brand-cyan/20 cursor-pointer"
                >
                  Sign In to Dashboard
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </header>
  );
}
