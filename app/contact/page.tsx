"use client";

import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  MessageCircle,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { LinkedinSVG, TwitterSVG, InstagramSVG } from "@/components/Icons";
import { submitLead } from "@/app/actions/leads";
import { useState, useTransition } from "react";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('idle');
    startTransition(async () => {
      const result = await submitLead(formData);
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    });
  }
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Let’s Start a <br/>
              <span className="text-blue-600">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed uppercase tracking-widest font-medium">
              We're here to help you scale your digital presence. Reach out to our team for expert consultation and customized software development services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tighter">Send us a message</h2>
                <p className="text-slate-600">Drop us a line and we'll get back to you within 24 business hours.</p>
              </div>

              <form action={handleSubmit} className="space-y-6">
                {status === 'success' && (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-700 animate-in fade-in zoom-in duration-300">
                    <p className="font-bold flex items-center gap-2">
                       <CheckCircle2 className="w-5 h-5" /> Message Sent Successfully!
                    </p>
                    <p className="text-sm mt-1">We'll get back to you within 24 business hours.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-6 bg-red-50 border border-red-100 rounded-2xl text-red-700">
                    <p className="font-bold uppercase tracking-widest text-xs mb-1">Error</p>
                    <p className="text-sm">Something went wrong. Please try again or call us directly.</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input name="fullName" type="text" required placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input name="email" type="email" required placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                    <select name="subject" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all appearance-none bg-white">
                      <option>General Inquiry</option>
                      <option>Service Request</option>
                      <option>Partnership</option>
                      <option>Career Opportunities</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea name="message" required rows={6} placeholder="Tell us more about your project goals..." className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 uppercase tracking-widest disabled:opacity-50"
                >
                  {isPending ? 'Sending...' : 'Send Message'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Our Presence</h3>
                  <div className="space-y-8">
                     <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                           <a href="mailto:info@nestinnova.com" className="text-slate-600 hover:text-blue-600 transition-colors uppercase font-medium">info@nestinnova.com</a>
                        </div>
                     </div>

                     <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                           <Phone className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 mb-1">Call / WhatsApp</h4>
                           <a href="tel:+8801972372395" className="text-slate-600 hover:text-blue-600 transition-colors uppercase font-medium">+880 1972 372395</a>
                        </div>
                     </div>

                     <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 mb-1">Our Office</h4>
                           <p className="text-slate-600 uppercase font-medium">Dhaka, Bangladesh <br/> Global Delivery Center</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Follow Us</h3>
                   <div className="flex gap-4">
                      <a href="#" className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl hover:bg-blue-700 hover:text-white transition-all text-slate-400">
                         <LinkedinSVG className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl hover:bg-blue-400 hover:text-white transition-all text-slate-400">
                         <TwitterSVG className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl hover:bg-pink-600 hover:text-white transition-all text-slate-400">
                         <InstagramSVG className="w-6 h-6" />
                      </a>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
