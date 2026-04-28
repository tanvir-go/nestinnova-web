"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MonitorSmartphone,
  Smartphone,
  PenTool,
  Cloud,
  ShoppingCart,
  Server,
  Code,
  CircleCheck,
  Clock,
  Zap,
  Headphones,
  Mail,
  Phone,
  ArrowRight,
  Layers,
  Star
} from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function Home() {
  const { openModal } = useQuoteModal();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Innovating the Future
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Building Scalable Digital <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Solutions for Modern Businesses
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We design, develop, and deploy high-performance web and mobile applications using cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Get a Quote
              </button>
              <Link href="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium text-lg hover:bg-slate-50 transition-all hover:-translate-y-0.5">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transforming Ideas into Reality</h3>
            <p className="text-slate-600 text-lg">Comprehensive digital solutions tailored to accelerate your business growth and streamline operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Link href="/services/web-development" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Web Development</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Custom web applications tailored to your specific needs using scalable frameworks like Next.js, Laravel, and WordPress.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service Card 2 */}
            <Link href="/services/mobile-app-development" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 text-indigo-600">
                <Smartphone className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Mobile App Development</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Native and cross-platform applications for iOS and Android that deliver exceptional mobile experiences.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/services/ui-ux-design" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 text-purple-600">
                <PenTool className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">UI/UX Design</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Intuitive, user-centric interfaces designed to maximize engagement and provide seamless user journeys.
              </p>
              <div className="flex items-center text-purple-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service Card 4 */}
            <Link href="/services/devops-solutions" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 text-cyan-600">
                <Cloud className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">DevOps & Cloud</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Scalable infrastructure setups, cloud migrations, and CI/CD pipelines to ensure reliability and performance.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service Card 5 */}
            <Link href="/services/cloud-services" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 text-emerald-600">
                <ShoppingCart className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">E-commerce Solutions</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Robust online stores optimized for conversion, featuring secure payment integrations and inventory management.
              </p>
              <div className="flex items-center text-emerald-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service Card 6 */}
            <Link href="/services/web-development" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 text-rose-600">
                <Server className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">API & Backend</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Secure, high-performance architectures and custom APIs bridging systems seamlessly.
              </p>
              <div className="flex items-center text-rose-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section id="technologies" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Tech Stack</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built with the Best Technologies</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We leverage modern, state-of-the-art frameworks and tools to build digital products that are fast, secure, and infinitely scalable.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Frontend</h4>
                    <p className="text-slate-600 mt-1">Next.js, React, Tailwind CSS, TypeScript</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Backend & CMS</h4>
                    <p className="text-slate-600 mt-1">Laravel, Node.js, Express, WordPress</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-cyan-100 p-2 rounded-lg text-cyan-600">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">DevOps & Database</h4>
                    <p className="text-slate-600 mt-1">Docker, AWS, CI/CD, MySQL, MongoDB</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/technologies" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  Explore our full stack <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">N</div>
                  <span className="font-semibold text-slate-900">Next.js</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-[#61DAFB] rounded-full flex items-center justify-center text-slate-900">
                    <MonitorSmartphone className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-900">React</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-[#FF2D20] rounded-full flex items-center justify-center text-white">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-900">Laravel</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-[#FF9900] rounded-full flex items-center justify-center text-white">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-900">AWS / Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Nestinnova</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Your Partner in Digital Excellence</h3>
            <p className="text-slate-600 text-lg">We don't just write code; we build the core foundations that enable businesses to scale predictably and efficiently.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <CircleCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Experienced Team</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Seasoned developers, designers, and strategists with deep industry expertise.</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Scalable Solutions</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Architectures tailored for growth, ensuring your software evolves seamlessly with your business.</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Fast Delivery</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Agile methodologies and automated pipelines for rapid time-to-market without compromising quality.</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-5">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">24/7 Support</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Continuous monitoring, proactive maintenance, and dedicated support when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h3>
              <p className="text-slate-600 text-lg">A selection of premium digital experiences we've shipped for clients globally.</p>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 block relative hover:shadow-xl transition-shadow cursor-pointer">
              <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent z-10" />
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fintech Dashboard" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 relative z-20">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md">Next.js</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">Tailwind</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">FinSync Financial Dashboard</h4>
                <p className="text-slate-600">A high-performance SaaS platform for enterprise financial analytics and real-time reporting.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 block relative hover:shadow-xl transition-shadow cursor-pointer">
              <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent z-10" />
                <Image 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                  alt="E-commerce App" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 relative z-20">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md">React Native</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">Node.js</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Lumina E-Commerce Mobile App</h4>
                <p className="text-slate-600">Cross-platform mobile shopping experience with seamless payment flow and real-time tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Workflow</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Development Process</h3>
            <p className="text-slate-600 text-lg">A systematic approach to building high-performance digital products from concept to scale.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-16">
            {/* Process Card 1 */}
            <div className="card">
              <p className="heading">01. Discovery</p>
              <p>Mapping out the vision and user needs.</p>
              <p>Phase One</p>
            </div>

            {/* Process Card 2 */}
            <div className="card">
              <p className="heading">02. Strategy</p>
              <p>Defining the tech stack and roadmap.</p>
              <p>Phase Two</p>
            </div>

            {/* Process Card 3 */}
            <div className="card">
              <p className="heading">03. Execution</p>
              <p>Agile development with high standards.</p>
              <p>Phase Three</p>
            </div>

            {/* Process Card 4 */}
            <div className="card">
              <p className="heading">04. Growth</p>
              <p>Scaling to production with zero downtime.</p>
              <p>Phase Four</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Market Leaders</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "Nestinnova transformed our outdated platform into a lightning-fast modern application. Their attention to detail in UX and robust backend architecture helped us scale our user base by 300% in six months."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden shrink-0">
                  <img src="https://i.pravatar.cc/150?u=a" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Sarah Jenkins</h5>
                  <p className="text-sm text-slate-500">CTO, TechFlow Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "The mobile app they delivered is flawless. It's rare to find an IT partner who truly understands both the business goals and the deep technical requirements needed to execute them so perfectly."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden shrink-0">
                  <img src="https://i.pravatar.cc/150?u=b" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Michael Chen</h5>
                  <p className="text-sm text-slate-500">Founder, RetailPro</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "Working with Nestinnova feels like having an in-house elite engineering team. Their DevOps strategies reduced our cloud costs while simultaneously improving our system uptime and overall reliability."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden shrink-0">
                  <img src="https://i.pravatar.cc/150?u=c" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Elena Rodriguez</h5>
                  <p className="text-sm text-slate-500">VP Engineering, DataSync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section id="blog" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Insights</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest from the Blog</h3>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="aspect-[16/10] bg-slate-200 overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
                  alt="Code on screen" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">Web Development</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  Why Next.js App Router is Changing Enterprise Development
                </h4>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  A deep dive into server components, caching strategies, and performance gains seen when migrating legacy react apps to the latest Next.js architectures.
                </p>
                <Link href="/blog" className="text-sm font-medium text-slate-900 group-hover:text-blue-600 flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="aspect-[16/10] bg-slate-200 overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&q=80&w=600" 
                  alt="Server room" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">DevOps</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  Optimizing AWS Infrastructure for Scale: A Startup's Guide
                </h4>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  Learn how to leverage EC2, Lambda, and proper containerization to balance performance and cost when building hyperscale environments.
                </p>
                <Link href="/blog" className="text-sm font-medium text-slate-900 group-hover:text-blue-600 flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="aspect-[16/10] bg-slate-200 overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600" 
                  alt="UI UX Design" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">Design</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  Micro-interactions: The Secret to High-Converting SaaS Products
                </h4>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  How tiny interface animations can drastically improve user retention, satisfaction scores, and ultimately impact your bottom line.
                </p>
                <Link href="/blog" className="text-sm font-medium text-slate-900 group-hover:text-blue-600 flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 -skew-y-3 origin-top-left -z-10 translate-y-24 scale-110" />
        <div className="absolute inset-0 bg-slate-900 -z-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between border border-slate-100">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Let’s Build Something <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Great Together</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Ready to transform your business? Reach out to our team of experts and let's discuss your next big project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Email Us</div>
                    <a href="mailto:info@nestinnova.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">info@nestinnova.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Call / WhatsApp</div>
                    <a href="tel:+8801972372395" className="text-lg font-bold text-slate-900 hover:text-green-600 transition-colors">+880 1972 372395</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <form className="space-y-5 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white" />
                  </div>
                  <div>
                    <textarea rows={4} placeholder="Project Details" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white resize-none"></textarea>
                  </div>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white font-semibold py-4 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
