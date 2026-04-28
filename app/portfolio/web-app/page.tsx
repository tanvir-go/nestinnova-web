"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function WebAppPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-bold uppercase tracking-wider mb-6">
              Development & Design
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Website | <span className="text-blue-500">Web App</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Crafting high-performance, scalable, and visually stunning web applications tailored to your business needs using the latest technologies.
            </p>
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Scalable Digital Products</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From simple landing pages to complex SaaS platforms, we build web solutions that are optimized for speed, security, and exceptional user experience.
              </p>
              <div className="space-y-4">
                {[
                  "Responsive & Modern UI/UX",
                  "Progressive Web App (PWA) Support",
                  "SEO Optimized Architecture",
                  "Fast Load Times & Performance",
                  "Third-Party API Integration"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                  alt="Web Application Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600 rounded-3xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
