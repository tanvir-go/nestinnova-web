'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createTeamMember } from '@/app/actions/team'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  User, 
  Briefcase, 
  FileText,
  Linkedin,
  AlertCircle
} from 'lucide-react'

export default function NewTeamMemberPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState('')

  async function handleSubmit(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const result = await createTeamMember(formData)
      if (result.success) {
        router.push('/admin/team')
        router.refresh()
      } else {
        setError(result.error || 'Failed to add team member')
      }
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center">
        <Link 
          href="/admin/team" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Team</span>
        </Link>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -z-0"></div>
           <div className="relative z-10">
              <h1 className="text-3xl font-extrabold italic">Welcome a New Expert</h1>
              <p className="text-slate-400 mt-2 uppercase tracking-widest text-xs font-bold">New Team Member Profile</p>
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
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User size={16} className="text-blue-600" /> Full Name
              </label>
              <input 
                name="name" 
                required 
                placeholder="e.g. Sarah Jenkins" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Briefcase size={16} className="text-blue-600" /> Job Title / Role
              </label>
              <input 
                name="role" 
                required 
                placeholder="e.g. CTO & Co-Founder" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Profile Image URL */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <ImageIcon size={16} className="text-blue-600" /> profile Image URL
            </label>
            <div className="flex gap-6 items-start">
               <div className="flex-1">
                  <input 
                    name="img" 
                    required 
                    placeholder="https://images.unsplash.com/..." 
                    value={previewUrl}
                    onChange={(e) => setPreviewUrl(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
                  />
               </div>
               {previewUrl && (
                  <div className="w-16 h-16 rounded-2xl border-2 border-slate-100 overflow-hidden shrink-0">
                     <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
               )}
            </div>
          </div>

          {/* LinkedIn URL */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Linkedin size={16} className="text-blue-600" /> LinkedIn Profile URL (Optional)
            </label>
            <input 
              name="linkedin_url" 
              placeholder="https://linkedin.com/in/username" 
              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <FileText size={16} className="text-blue-600" /> Professional Bio
            </label>
            <textarea 
              name="bio" 
              required 
              rows={4}
              placeholder="A short description of their experience and focus..." 
              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none placeholder:text-slate-300"
            ></textarea>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
            <Link 
              href="/admin/team" 
              className="px-8 py-4 text-slate-600 font-bold hover:bg-slate-50 rounded-2xl transition-all uppercase tracking-widest text-xs"
            >
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={isPending}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 uppercase tracking-widest text-sm disabled:opacity-50"
            >
              {isPending ? 'Onboarding...' : (
                <>
                  <Save size={18} /> Add Member
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
