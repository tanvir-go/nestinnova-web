"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function CRMPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.3),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-emerald-600/20 border border-emerald-600/30 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6">
              Customer Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Next-Gen <span className="text-emerald-500">CRM</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Transform your customer relationships with our intelligent CRM platform. Manage leads, track interactions, and drive sales growth with data-driven decision making.
            </p>
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                  alt="CRM Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-emerald-600 rounded-3xl -z-10 opacity-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Drive Sales with Intelligence</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our CRM solution goes beyond simple contact management. It leverages predictive analytics to identify high-value opportunities and automates routine follow-ups.
              </p>
              <div className="space-y-4">
                {[
                  "360-Degree Customer View",
                  "Sales Pipeline Visualization",
                  "Automated Email Marketing",
                  "Team Collaboration Tools",
                  "Mobile CRM Integration"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
