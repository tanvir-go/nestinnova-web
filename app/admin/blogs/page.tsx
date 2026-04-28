'use client'

import { useState, useEffect } from 'react'
import { getBlogs, deleteBlog } from '@/app/actions/blogs'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit, 
  ExternalLink,
  FileText,
  Calendar,
  User
} from 'lucide-react'

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBlogs()
  }, [])

  async function loadBlogs() {
    setLoading(true)
    const data = await getBlogs()
    setBlogs(data)
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const result = await deleteBlog(id)
      if (result.success) {
        loadBlogs()
      } else {
        alert('Error deleting blog: ' + result.error)
      }
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Blog Management</h1>
          <p className="text-slate-500 mt-1">Publish and manage your latest insights.</p>
        </div>
        <Link 
          href="/admin/blogs/new" 
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} /> Create Post
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center p-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-100 p-20 text-center">
           <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-slate-300" />
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2">No blog posts found</h3>
           <p className="text-slate-500 mb-8 max-w-sm mx-auto">Start sharing your knowledge by creating your first blog post.</p>
           <Link href="/admin/blogs/new" className="text-blue-600 font-bold hover:underline">Write your first post &rarr;</Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead>
                   <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Post Title</th>
                      <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Category</th>
                      <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Author</th>
                      <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                      <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 italic">
                   {blogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-8 rounded-lg bg-slate-100 overflow-hidden shrink-0 relative">
                                  <Image src={blog.img} alt={blog.title} fill className="object-cover" />
                               </div>
                               <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{blog.title}</div>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                               {blog.category}
                            </span>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                               <User size={14} className="text-slate-400" /> {blog.author}
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                               <Calendar size={14} className="text-slate-400" /> {new Date(blog.published_at).toLocaleDateString()}
                            </div>
                         </td>
                         <td className="px-8 py-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                               <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                                  <Edit size={18} />
                                </button>
                                <button 
                                  onClick={() => handleDelete(blog.id)}
                                  className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-slate-400"
                                >
                                  <Trash2 size={18} />
                                </button>
                                <Link 
                                  href={`/blog/${blog.slug}`} 
                                  target="_blank"
                                  className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-slate-400"
                                >
                                  <ExternalLink size={18} />
                                </Link>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      )}
    </div>
  )
}
