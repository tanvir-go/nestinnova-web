"use client";

import React from "react";
import { 
  Layout, 
  Layers, 
  Zap, 
  ArrowRight,
  Palette
} from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function UIUXDesignPage() {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Intuitive & Modern <br/>
              <span className="text-blue-600">UI/UX Design</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              We design digital products that look stunning and feel natural to use. Our focus is on user satisfaction and brand impact.
            </p>
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Start Designing
            </button>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Design Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We follow a rigorous design methodology to ensure your product meets business goals and user needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-400">
            {[
              { icon: <Search />, title: "Research", desc: "Understanding the market, user personas, and core business goals." },
              { icon: <Layout />, title: "Wireframing", desc: "Building the skeletal structure and user flows of the application." },
              { icon: <Palette />, title: "UI Design", desc: "Creating the visual elements, color palettes, and typography." },
              { icon: <Zap />, title: "Prototyping", desc: "Interactive mockups to test and refine the user experience before code." }
            ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
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

      {/* Features Grid */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">Visual Excellence</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Designs that drive engagement and growth.</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    A great product is more than just code. It's an emotional connection with your users. We ensure every interaction is meaningful and every pixel is intentional.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">✓</div>
                        <span className="font-semibold text-slate-900">User-Centric Design Principles</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">✓</div>
                        <span className="font-semibold text-slate-900">Responsive & Adaptive Layouts</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">✓</div>
                        <span className="font-semibold text-slate-900">Accessibility First Standards</span>
                    </div>
                </div>
             </div>
             <div className="bg-blue-50/50 p-10 rounded-3xl">
                 <div className="aspect-[4/3] bg-white rounded-2xl shadow-xl overflow-hidden relative border border-blue-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent p-6 flex flex-col justify-end">
                        <div className="w-full h-8 bg-slate-100 rounded-lg mb-2" />
                        <div className="w-3/4 h-8 bg-slate-50 rounded-lg" />
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Search = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
