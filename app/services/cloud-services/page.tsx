"use client";

import React from "react";
import { 
  Cloud, 
  Database, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowRight,
  Server,
  Lock,
  Workflow
} from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function CloudServicesPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Enterprise <br/>
              <span className="text-blue-600">Cloud Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed uppercase tracking-wide">
              Scale your business infrastructure with our expert cloud solutions for AWS, Azure, and Google Cloud Platform.
            </p>
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Get Cloud Consultancy
            </button>
          </div>
        </div>
      </section>

      {/* Cloud Tech Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cloud Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We help you migrate, manage, and optimize your cloud environments for maximum efficiency and security.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-400">
            {[
              { icon: <Cloud />, title: "Cloud Migration", desc: "Seamless and secure migration of your on-premise infrastructure to AWS/Azure/GCP." },
              { icon: <Server />, title: "Serverless Solutions", desc: "Build highly-scalable event-driven applications with Lambda, S3, and DynamoDB." },
              { icon: <ShieldCheck />, title: "Cloud Security", desc: "Advanced cloud-native security setups and IAM policies to protect sensitive data." },
              { icon: <Database />, title: "Cloud Databases", desc: "Fully managed database architectures for massive scalability and durability." },
              { icon: <Workflow />, title: "Managed Services", desc: "24/7 cloud management and proactive monitoring for zero-downtime operations." },
              { icon: <Globe />, title: "CDN & Edge Computing", desc: "Global distribution of your content for low-latency user experiences anywhere." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">Reduce Costs, Maximize Scale</h2>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                Unlock the full potential of cloud technology with our specialized engineering services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={openModal} className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/10">Get a Cloud Audit</button>
                <button className="px-10 py-4 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-full font-bold transition-all">Case Studies</button>
            </div>
        </div>
      </section>
    </div>
  );
}
