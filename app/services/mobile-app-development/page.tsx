"use client";

import React from "react";
import Image from "next/image";
import { 
  Smartphone, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Cloud, 
  ArrowRight,
  Layers,
  Layout,
  Globe
} from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function MobileAppDevelopmentPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              High-Performance <br/>
              <span className="text-blue-600">Mobile Applications</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              We design and develop native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and robust performance.
            </p>
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Consult an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mobile Tech Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From MVP development to enterprise-level mobile ecosystems, we bring your vision to every mobile screen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-400">
            {[
              { icon: <Smartphone />, title: "Native iOS & Android", desc: "Pure Swift/Kotlin apps optimized for security and OS-level performance." },
              { icon: <Layers />, title: "Cross-Platform (React Native)", desc: "Build once, deploy everywhere with near-native performance for faster time-to-market." },
              { icon: <Cloud />, title: "Backend & API sync", desc: "Reliable, real-time data sync with high-available cloud backends like Firebase or AWS." },
              { icon: <Layout />, title: "Mobile UI/UX", desc: "Intuitive, thumb-friendly interfaces designed specifically for mobile users." },
              { icon: <ShieldCheck />, title: "App Security", desc: "End-to-end encryption and secure authentication models to protect user data." },
              { icon: <Zap />, title: "Performance Scaling", desc: "Optimized app startup, animations, and efficient resource handling for older devices." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Launch Your App</h2>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">We've helped over 100+ businesses launch their first digital product with exceptional results.</p>
            <button onClick={openModal} className="px-12 py-4 bg-blue-600 text-white rounded-full font-extrabold transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/10">Start App Development</button>
        </div>
      </section>
    </div>
  );
}
