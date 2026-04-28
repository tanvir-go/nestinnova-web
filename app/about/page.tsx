import React from "react";
import Image from "next/image";
import { 
  Target, 
  History, 
  Award, 
  Linkedin,
} from "lucide-react";
import { QuoteModalWrapper } from "@/components/QuoteModalWrapper";
import { getTeamMembers } from "@/app/actions/team";

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Innovating the Future of <br/>
              <span className="text-blue-600">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed uppercase tracking-wide font-medium">
              We are a team of expert developers, designers, and strategists dedicated to helping modern businesses thrive in the digital age.
            </p>
            <QuoteModalWrapper 
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Learn More About Us
            </QuoteModalWrapper>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 border-b border-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses globally by delivering high-performance, scalable, and high-impact digital solutions that solve real-world problems.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our History</h3>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2024, Nestinnova started with a simple vision: to bridge the gap between complex technology and business needs.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the core innovation partner for startups and enterprises, driving the next wave of digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Team Section */}
      {teamMembers.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">The Experts</h2>
               <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 italic tracking-tighter capitalize underline underline-offset-8 decoration-blue-100">Meet our core team</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member: any) => (
                <div key={member.id} className="group flex flex-col items-center text-center">
                   <div className="w-48 h-48 rounded-[2.5rem] bg-slate-100 mb-6 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 grayscale group-hover:grayscale-0">
                      <Image src={member.img} alt={member.name} fill className="object-cover" />
                      {member.linkedin_url && (
                        <a href={member.linkedin_url} target="_blank" className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                           <Linkedin size={20} />
                        </a>
                      )}
                   </div>
                   <h4 className="text-xl font-extrabold text-slate-900">{member.name}</h4>
                   <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">{member.role}</p>
                   <p className="text-slate-500 text-sm mt-4 px-4 line-clamp-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team CTA */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 leading-tight">Ready to collaborate with the experts?</h2>
                <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed uppercase tracking-wider">
                    Our team of consultants is ready to help you navigate your digital transformation journey.
                </p>
                <QuoteModalWrapper className="px-12 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all">
                  Get in Touch
                </QuoteModalWrapper>
          </div>
      </section>
    </div>
  );
}
