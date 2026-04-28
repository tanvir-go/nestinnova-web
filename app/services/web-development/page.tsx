"use client";

import React from "react";
import Image from "next/image";
import { 
  Code, 
  Layers, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight,
  Database,
  Search,
  Layout
} from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function WebDevelopmentPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Enterprise-Grade <br/>
              <span className="text-blue-600">Web Development</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              We build high-performance, secure, and scalable web applications using the latest technologies like Next.js, Laravel, and Cloud-native architectures.
            </p>
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Web Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From complex SaaS platforms to high-converting landing pages, we cover the full spectrum of web technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-400">
            {[
              { icon: <Layout />, title: "Custom Web Apps", desc: "Bespoke software solutions designed specifically for your unique business processes." },
              { icon: <Globe />, title: "SaaS Platforms", desc: "Multi-tenant architectures with secure billing and robust user management." },
              { icon: <Search />, title: "SEO Optimization", desc: "Technical SEO and performance tuning to ensure your site ranks at the top." },
              { icon: <Database />, title: "Backend Systems", desc: "Scalable APIs and database architectures built for volume and speed." },
              { icon: <Shield />, title: "Web Security", desc: "Advanced protection against vulnerabilities and data breaches." },
              { icon: <Zap />, title: "Headless CMS", desc: "Content-rich sites powered by Sanity, Hygraph, or Contentful." }
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

      {/* Tech Stack CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">Ready to build the next big thing?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Join 50+ businesses that have scaled their operations with our high-end web development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openModal} className="px-10 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-bold transition-all shadow-lg shadow-blue-600/10">Get a Quote</button>
            <button className="px-10 py-4 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full font-bold transition-all">Browse Portfolio</button>
          </div>
        </div>
      </section>
    </div>
  );
}
