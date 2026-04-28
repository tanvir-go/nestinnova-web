import React from "react";
import Image from "next/image";
import { 
  ArrowRight,
} from "lucide-react";
import { QuoteModalWrapper } from "../../components/QuoteModalWrapper";
import { getProjects } from "@/app/actions/projects";

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Our <span className="text-blue-600">Premium Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Explore our selection of state-of-the-art digital products shipped for market leaders globally.
            </p>
            <div className="flex justify-center gap-4">
                <QuoteModalWrapper 
                   className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                >
                  Start Your Project
                </QuoteModalWrapper>
            </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {projects.length === 0 ? (
             <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-slate-400">Our portfolio is being updated...</h3>
                <p className="text-slate-500 mt-2">Please check back soon to see our latest works.</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any, idx: number) => (
                <div key={project.id || idx} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer block relative">
                  <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl scale-75 group-hover:scale-100 transition-transform">
                              <ArrowRight className="w-6 h-6" />
                          </div>
                      </div>
                      <Image 
                        src={project.img.startsWith('http') ? project.img : `${project.img}?auto=format&fit=crop&q=80&w=800`} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                  </div>
                  <div className="p-8">
                      <div className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-widest">{project.category}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                          {project.tech?.map((tech: string, tIdx: number) => (
                            <span key={tIdx} className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase">{tech}</span>
                          ))}
                      </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to be our next success story?</h2>
                <QuoteModalWrapper className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest">
                   Start Now
                </QuoteModalWrapper>
          </div>
      </section>
    </div>
  );
}
