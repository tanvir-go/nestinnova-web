"use client";

import React from "react";
import { X, ArrowRight } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="absolute top-6 right-6">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Get a Quote</h3>
            <p className="text-slate-600">Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Service Interest</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all appearance-none bg-white">
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
                <option>DevOps & Cloud</option>
                <option>E-commerce Solutions</option>
              </select>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Project Details</label>
              <textarea rows={4} placeholder="Briefly describe your goals..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"></textarea>
            </div>
            
            <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 mt-4 flex items-center justify-center gap-2">
              Send Request <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
