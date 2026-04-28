'use client'

import { useState, useEffect } from 'react'
import { getProjects, deleteProject } from '@/app/actions/projects'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  ExternalLink,
  Layers
} from 'lucide-react'

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    setLoading(true)
    const data = await getProjects()
    setProjects(data)
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      const result = await deleteProject(id)
      if (result.success) {
        loadProjects()
      } else {
        alert('Error deleting project: ' + result.error)
      }
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Portfolio Management</h1>
          <p className="text-slate-500 mt-1">Showcase your best work to the world.</p>
        </div>
        <Link 
          href="/admin/portfolio/new" 
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} /> Add Project
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Layers size={24} />
               </div>
               <div>
                  <p className="text-sm font-medium text-slate-500">Total Projects</p>
                  <p className="text-2xl font-bold text-slate-900">{projects.length}</p>
               </div>
            </div>
         </div>
      </div>

      {/* Grid View of Projects */}
      {loading ? (
        <div className="flex justify-center p-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : projects.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-100 p-20 text-center">
           <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Layers className="w-10 h-10 text-slate-300" />
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2">No projects found</h3>
           <p className="text-slate-500 mb-8 max-w-sm mx-auto">Start by adding your first project to showcase it on your public portfolio page.</p>
           <Link href="/admin/portfolio/new" className="text-blue-600 font-bold hover:underline">Create your first project &rarr;</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white/90 backdrop-blur-md rounded-xl text-slate-700 hover:text-blue-600 transition-colors shadow-lg">
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="p-2 bg-white/90 backdrop-blur-md rounded-xl text-slate-700 hover:text-red-600 transition-colors shadow-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 px-2 py-1 bg-blue-50 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {new Date(project.created_at).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-1">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((t: string, i: number) => (
                    <span key={i} className="text-[9px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                   <Link href={`/portfolio/${project.id}`} className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1">
                      Preview <ExternalLink size={14} />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
