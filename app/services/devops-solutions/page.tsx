"use client";

import React from "react";
import { 
  Server, 
  Terminal, 
  Shield, 
  Zap, 
  Cloud, 
  ArrowRight,
  Database,
  Lock,
  Globe
} from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function DevOpsSolutionsPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Scalable & Secure <br/>
              <span className="text-blue-600">DevOps Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed uppercase tracking-wide">
              Automate your infrastructure, optimize CI/CD pipelines, and ensure 99.9% uptime with our expert DevOps services.
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
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Specializations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We bridge the gap between development and operations with high-performance automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Terminal />, title: "CI/CD Automation", desc: "Robust pipelines using GitHub Actions, GitLab CI, or Jenkins for rapid delivery." },
              { icon: <Server />, title: "Infrastucture as Code", desc: "Manage your cloud with Terraform, Ansible, or Pulumi for predictable environments." },
              { icon: <Shield />, title: "Security as a Priority", desc: "Integrated security scans, secret management, and compliance-ready architectures." },
              { icon: <Database />, title: "Database Optimization", desc: "High-available database setups and real-time backup strategies." },
              { icon: <Lock />, title: "Server Hardening", desc: "Hardened OS configurations and firewall management for maximum security." },
              { icon: <Zap />, title: "Performance Monitoring", desc: "Real-time metrics with Prometheus, Grafana, or Datadog for zero-downtime." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-200 bg-white hover:bg-slate-50 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 italic leading-tight">Maximize Your Stability</h2>
          <p className="text-slate-600 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Stop worrying about downtime and start focusing on growth with our specialized DevOps strategies.
          </p>
          <button onClick={openModal} className="px-12 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:shadow-lg transition-all">Get an Infrastructure Audit</button>
        </div>
      </section>
    </div>
  );
}
