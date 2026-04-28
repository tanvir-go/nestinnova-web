"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FacebookSVG, TwitterSVG, LinkedinSVG, InstagramSVG } from "./Icons";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 mt-auto border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-slate-800 bg-slate-900 transition-transform group-hover:scale-110">
                <img 
                  src="/NestInnova_logo.png" 
                  alt="Nestinnova Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                Nestinnova<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses with modern, scalable, and high-performance software solutions to thrive in the digital age.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <FacebookSVG className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-blue-400 hover:text-white transition-all text-slate-400">
                <TwitterSVG className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white transition-all text-slate-400">
                <LinkedinSVG className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-pink-600 hover:text-white transition-all text-slate-400">
                <InstagramSVG className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-slate-300 hover:text-blue-500 transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-blue-500 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/web-development" className="text-slate-300 hover:text-blue-500 transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-slate-300 hover:text-blue-500 transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services/ui-ux-design" className="text-slate-300 hover:text-blue-500 transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/cloud-solutions" className="text-slate-300 hover:text-blue-500 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/devops-setup" className="text-slate-300 hover:text-blue-500 transition-colors">DevOps Setup</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a href="mailto:info@nestinnova.com" className="hover:text-white transition-colors">info@nestinnova.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a href="tel:+8801972372395" className="hover:text-white transition-colors">+880 1972 372395</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nestinnova. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
