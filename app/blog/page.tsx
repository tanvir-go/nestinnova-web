import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/app/actions/blogs";

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-blue-600/10 -skew-y-3 origin-bottom-left -z-0 translate-y-12" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Latest <span className="text-blue-400">Insights</span> & Engineering
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest in software development, design, and cloud infrastructure.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20">
               <h3 className="text-2xl font-bold text-slate-400">Our engineering blog is on the way...</h3>
               <p className="text-slate-500 mt-2">We're preparing high-quality content for you. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post: any) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer flex flex-col">
                  <div className="aspect-[16/10] bg-slate-200 overflow-hidden relative">
                    <Image 
                      src={post.img.startsWith('http') ? post.img : `${post.img}?auto=format&fit=crop&q=80&w=600`} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-xs font-bold text-blue-600 mb-4 uppercase tracking-widest">
                          <span className="px-2.5 py-1 bg-blue-50 rounded-md">{post.category}</span>
                          <span className="text-slate-400">{new Date(post.published_at).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                      <div className="flex items-center gap-2 mt-auto pt-6 border-t border-slate-50">
                          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">{post.author.charAt(0)}</div>
                          <span className="text-sm font-semibold text-slate-500">{post.author}</span>
                      </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tighter italic">Join our tech ecosystem</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto uppercase tracking-wide">Subscribe to receive the latest case studies and industry insights directly in your inbox.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="name@company.com" className="w-full px-6 py-4 rounded-full border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" />
                <button type="button" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">Subscribe</button>
            </form>
        </div>
      </section>
    </div>
  );
}
