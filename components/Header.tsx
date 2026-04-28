"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Database, Users, Globe, Layout, Package, ArrowRight } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `transition-colors duration-200 font-medium tracking-tight ${
      isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
    }`;
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-slate-200 py-2 shadow-sm" : "bg-white border-transparent py-4"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-full border border-slate-100 bg-slate-50 transition-transform group-hover:scale-110">
                  <img 
                    src="/NestInnova_logo.png" 
                    alt="Nestinnova Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold tracking-tighter text-blue-600">
                  Nestinnova<span className="text-slate-900">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 font-medium tracking-tight">
              <Link href="/" className={navLinkClass("/")}>Home</Link>
              <div className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${pathname.startsWith("/services") ? "text-blue-600" : "text-slate-800 hover:text-blue-600"}`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 overflow-hidden">
                  <Link href="/services/web-development" className="block px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-blue-600 rounded-xl transition-colors text-sm font-medium">Web Development</Link>
                  <Link href="/services/mobile-app-development" className="block px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-blue-600 rounded-xl transition-colors text-sm font-medium">Mobile App Development</Link>
                  <Link href="/services/ui-ux-design" className="block px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-blue-600 rounded-xl transition-colors text-sm font-medium">UI/UX Design</Link>
                  <Link href="/services/devops-solutions" className="block px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-blue-600 rounded-xl transition-colors text-sm font-medium">DevOps Solutions</Link>
                  <Link href="/services/cloud-services" className="block px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-blue-600 rounded-xl transition-colors text-sm font-medium">Cloud Services</Link>
                </div>
              </div>
              <Link href="/technologies" className={navLinkClass("/technologies")}>Technologies</Link>
              
              {/* Portfolio Mega Menu */}
              <div className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${pathname.startsWith("/portfolio") ? "text-blue-600" : "text-slate-800 hover:text-blue-600"}`}>
                <span>Portfolio</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full -left-1/2 mt-2 w-[500px] bg-white border border-slate-100 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 overflow-hidden">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Featured Projects</div>
                    
                    <Link href="/portfolio/stocksync-erp" className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover/item:scale-110 transition-transform">
                        <Package className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">Stocksync ERP</div>
                        <p className="text-sm text-slate-500 mt-1">Inventory & supply chain management solution.</p>
                      </div>
                    </Link>

                    <Link href="/portfolio/crm" className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover/item:scale-110 transition-transform">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover/item:text-emerald-600 transition-colors">CRM</div>
                        <p className="text-sm text-slate-500 mt-1">Advanced customer relationship platform.</p>
                      </div>
                    </Link>

                    <Link href="/portfolio/web-app" className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 group-hover/item:scale-110 transition-transform">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover/item:text-indigo-600 transition-colors">Website | Web Application</div>
                        <p className="text-sm text-slate-500 mt-1">High-performance digital products & designs.</p>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <Link href="/portfolio" className="flex items-center justify-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      View Full Portfolio <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className={navLinkClass("/about")}>About Us</Link>
              <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>
              <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>
            </nav>

            {/* Login Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/login"
                className="text-[#142339] border border-slate-200 px-7 py-2.5 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-slate-900 hover:text-blue-600 p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 md:hidden ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Drawer */}
        <div className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white transition-transform duration-500 shadow-2xl flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between p-6 border-b border-slate-50">
            <span className="text-xl font-bold text-blue-600">Nestinnova<span className="text-slate-900">.</span></span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-6 px-6">
            <nav className="flex flex-col gap-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-lg font-medium text-slate-800 hover:bg-slate-50">Home</Link>
              
              <div className="border-t border-slate-50 my-2 pt-2">
                <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Services</div>
                <Link href="/services/web-development" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 flex items-center gap-3 text-slate-700 hover:text-blue-600">
                  <Layout className="w-4 h-4" /> Web Development
                </Link>
                <Link href="/services/mobile-app-development" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 flex items-center gap-3 text-slate-700 hover:text-blue-600">
                  <Package className="w-4 h-4" /> Mobile App Dev
                </Link>
              </div>

              <Link href="/technologies" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-lg font-medium text-slate-800 hover:bg-slate-50">Technologies</Link>

              <div className="border-t border-slate-50 my-2 pt-2">
                <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Portfolio</div>
                <Link href="/portfolio/stocksync-erp" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 flex items-center gap-3 text-slate-700 hover:text-blue-600">
                  <Package className="w-4 h-4 text-blue-500" /> Stocksync ERP
                </Link>
                <Link href="/portfolio/crm" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 flex items-center gap-3 text-slate-700 hover:text-blue-600">
                  <Users className="w-4 h-4 text-emerald-500" /> CRM
                </Link>
                <Link href="/portfolio/web-app" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 flex items-center gap-3 text-slate-700 hover:text-blue-600">
                  <Globe className="w-4 h-4 text-indigo-500" /> Web Application
                </Link>
              </div>

              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-lg font-medium text-slate-800 hover:bg-slate-50">About Us</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-lg font-medium text-slate-800 hover:bg-slate-50">Blog</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-lg font-medium text-slate-800 hover:bg-slate-50">Contact</Link>
            </nav>
          </div>
          
          <div className="p-6 border-t border-slate-50 mt-auto">
            <Link 
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
