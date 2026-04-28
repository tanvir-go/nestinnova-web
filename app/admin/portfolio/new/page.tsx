'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createProject } from '@/app/actions/projects'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  Type, 
  Tag, 
  Code,
  AlertCircle,
  FileText
} from 'lucide-react'

export default function NewProjectPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState('')

  async function handleSubmit(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const result = await createProject(formData)
      if (result.success) {
        router.push('/admin/portfolio')
        router.refresh()
      } else {
        setError(result.error || 'Failed to create project')
      }
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/portfolio" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Portfolio</span>
        </Link>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0"></div>
           <div className="relative z-10">
              <h1 className="text-3xl font-extrabold">Add New Project</h1>
              <p className="text-slate-400 mt-2">Fill in the details to showcase your latest masterpiece.</p>
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
                <Type size={16} className="text-blue-600" /> Project Title
              </label>
              <input 
                name="title" 
                required 
                placeholder="e.g. FinSync Dashboard" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Tag size={16} className="text-blue-600" /> Category
              </label>
              <select 
                name="category" 
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all appearance-none bg-white"
              >
                <option value="Web App">Web App</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Enterprise">Enterprise</option>
                <option value="SaaS">SaaS</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <ImageIcon size={16} className="text-blue-600" /> Image URL
            </label>
            <div className="flex gap-4">
              <input 
                name="img" 
                required 
                placeholder="https://images.unsplash.com/photo-..." 
                value={previewUrl}
                onChange={(e) => setPreviewUrl(e.target.value)}
                className="flex-1 px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            {previewUrl && (
              <div className="mt-4 aspect-video relative rounded-3xl overflow-hidden border-4 border-slate-50 shadow-inner">
                 <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                 <div className="absolute top-2 right-2 bg-slate-900/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    Preview
                 </div>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Code size={16} className="text-blue-600" /> Technologies (Comma separated)
            </label>
            <input 
              name="tech" 
              required 
              placeholder="Next.js, Tailwind, Supabase, TypeScript" 
              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
            />
            <p className="text-[10px] text-slate-400 font-medium px-1 uppercase tracking-widest">Separate each technology with a comma</p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <FileText size={16} className="text-blue-600" /> Project Description
            </label>
            <textarea 
              name="description" 
              required 
              rows={5}
              placeholder="Describe the challenges, solutions, and impact of this project..." 
              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none placeholder:text-slate-300"
            ></textarea>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
            <Link 
              href="/admin/portfolio" 
              className="px-8 py-4 text-slate-600 font-bold hover:bg-slate-50 rounded-2xl transition-all uppercase tracking-widest text-sm"
            >
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={isPending}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 uppercase tracking-widest text-sm disabled:opacity-50"
            >
              {isPending ? 'Saving Masterpiece...' : (
                <>
                  <Save size={18} /> Save Project
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
