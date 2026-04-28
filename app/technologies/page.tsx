"use client";

import React from "react";
import { 
  Code, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Cloud, 
  ArrowRight,
  Database,
  MonitorSmartphone,
  Smartphone,
  Server,
  Globe,
  Terminal,
  Cpu
} from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function TechnologiesPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Our Modern <br/>
              <span className="text-blue-400 font-mono">Tech Stack</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed uppercase tracking-wider">
              We leverage the most advanced frameworks and tools to build fast, secure, and infinitely scalable digital products.
            </p>
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-blue-500 text-slate-950 rounded-full font-bold text-lg hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20"
            >
              Get a Technical Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Tech Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-slate-400">
            {/* Category 1 */}
            <div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-mono tracking-tighter">Frontend Development</h3>
              <ul className="space-y-4">
                {["Next.js / React", "Tailwind CSS", "TypeScript", "Redux / Zustand", "Framer Motion"].map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className="font-medium text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-mono tracking-tighter">Backend & APIs</h3>
              <ul className="space-y-4">
                {["Laravel / PHP 8+", "Node.js / Express", "Go / Rust", "RESTful & GraphQL", "Firebase"].map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    <span className="font-medium text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-mono tracking-tighter">Cloud & Infrastructure</h3>
              <ul className="space-y-4">
                {["AWS (EC2, Lambda, S3)", "Docker & Kubernetes", "Terraform / IaC", "CI/CD Pipelines", "MySQL / MongoDB"].map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                    <span className="font-medium text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Stack? */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why we choose our tools?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don't follow hype; we follow stability, performance, and developer experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">✓</div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900">Performance First</h4>
                        <p className="text-slate-600 text-sm mt-1">Every tool in our stack is benchmarked for millisecond performance and lightning-fast user interactions.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600 shrink-0">✓</div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900">Security Built-in</h4>
                        <p className="text-slate-600 text-sm mt-1">We prioritize frameworks with active security communities and built-in protection against OWASP threats.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="mt-1 bg-cyan-100 p-2 rounded-lg text-cyan-600 shrink-0">✓</div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900">Long-term Scalability</h4>
                        <p className="text-slate-600 text-sm mt-1">We architectures your application so it can evolve from an MVP into a global enterprise platform without rewrites.</p>
                    </div>
                 </div>
             </div>
             <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -z-0" />
                <div className="relative z-10 text-center uppercase tracking-widest font-mono">
                    <div className="text-6xl font-extrabold text-blue-600 mb-4">100%</div>
                    <div className="text-slate-900 font-bold">Cutting Edge</div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
