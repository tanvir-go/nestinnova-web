'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createBlog } from '@/app/actions/blogs'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  Type, 
  Tag, 
  FileText,
  User,
  AlertCircle
} from 'lucide-react'

export default function NewBlogPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState('')

  async function handleSubmit(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const result = await createBlog(formData)
      if (result.success) {
        router.push('/admin/blogs')
        router.refresh()
      } else {
        setError(result.error || 'Failed to publish blog')
      }
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center">
        <Link 
          href="/admin/blogs" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Blogs</span>
        </Link>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0"></div>
           <div className="relative z-10">
              <h1 className="text-3xl font-extrabold italic">Craft a New Insight</h1>
              <p className="text-slate-400 mt-2 uppercase tracking-widest text-xs font-bold">New Blog Post</p>
           </div>
        </div>

        <form action={handleSubmit} className="p-10 space-y-8">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl flex items-center gap-3">
              <AlertCircle size={20} />
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Type size={16} className="text-blue-600" /> Post Title
              </label>
              <input 
                name="title" 
                required 
                placeholder="e.g. Navigating Next.js 15" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Author */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User size={16} className="text-blue-600" /> Author Name
              </label>
              <input 
                name="author" 
                required 
                placeholder="Your Name" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Tag size={16} className="text-blue-600" /> Category
              </label>
              <input 
                name="category" 
                required 
                placeholder="e.g. Engineering, Design" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

             {/* Image URL */}
             <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <ImageIcon size={16} className="text-blue-600" /> Cover Image URL
              </label>
              <input 
                name="img" 
                required 
                placeholder="https://images.unsplash.com/..." 
                value={previewUrl}
                onChange={(e) => setPreviewUrl(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          {previewUrl && (
             <div className="aspect-[21/9] relative rounded-3xl overflow-hidden border-4 border-slate-50 shadow-inner">
                <img src={previewUrl} alt="Cover Preview" className="w-full h-full object-cover" />
             </div>
          )}

          {/* Excerpt */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <FileText size={16} className="text-blue-600" /> Short Excerpt
            </label>
            <textarea 
              name="excerpt" 
              required 
              rows={2}
              placeholder="A brief summary for the blog listing..." 
              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none placeholder:text-slate-300"
            ></textarea>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <FileText size={16} className="text-blue-600" /> Full Content (HTML/Markdown)
            </label>
            <textarea 
              name="content" 
              required 
              rows={12}
              placeholder="Write your blog post here..." 
              className="w-full px-8 py-6 rounded-[2rem] border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
            ></textarea>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
            <Link 
              href="/admin/blogs" 
              className="px-8 py-4 text-slate-600 font-bold hover:bg-slate-50 rounded-2xl transition-all uppercase tracking-widest text-xs"
            >
              Discard Draft
            </Link>
            <button 
              type="submit" 
              disabled={isPending}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 uppercase tracking-widest text-sm disabled:opacity-50"
            >
              {isPending ? 'Publishing...' : (
                <>
                  <Save size={18} /> Publish Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
