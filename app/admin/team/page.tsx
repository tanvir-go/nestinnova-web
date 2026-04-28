'use client'

import { useState, useEffect } from 'react'
import { getTeamMembers, deleteTeamMember } from '@/app/actions/team'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Plus, 
  Trash2, 
  Edit, 
  Users as UsersIcon,
  UserCheck
} from 'lucide-react'
import { LinkedinSVG as Linkedin } from '@/components/Icons'

export default function AdminTeamPage() {
  const [members, setMembers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMembers()
  }, [])

  async function loadMembers() {
    setLoading(true)
    const data = await getTeamMembers()
    setMembers(data)
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure you want to remove this team member?')) {
      const result = await deleteTeamMember(id)
      if (result.success) {
        loadMembers()
      } else {
        alert('Error deleting member: ' + result.error)
      }
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Team Management</h1>
          <p className="text-slate-500 mt-1">Manage the experts driving Nestinnova forward.</p>
        </div>
        <Link 
          href="/admin/team/new" 
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} /> Add Member
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center p-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : members.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-100 p-20 text-center">
           <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <UsersIcon className="w-10 h-10 text-slate-300" />
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2">No team members yet</h3>
           <p className="text-slate-500 mb-8 max-w-sm mx-auto">Build your team presence by adding your first member profile.</p>
           <Link href="/admin/team/new" className="text-blue-600 font-bold hover:underline">Add a team member &rarr;</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group p-6">
              <div className="w-24 h-24 rounded-2xl bg-slate-100 mx-auto mb-6 overflow-hidden relative border-4 border-slate-50">
                 <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <div className="text-center mb-6">
                 <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                 <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{member.role}</p>
              </div>
              
              <div className="flex items-center justify-center gap-2 pt-6 border-t border-slate-50">
                 <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                    <Edit size={16} />
                 </button>
                 <button 
                   onClick={() => handleDelete(member.id)}
                   className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-slate-400"
                 >
                    <Trash2 size={16} />
                 </button>
                 {member.linkedin_url && (
                    <a href={member.linkedin_url} target="_blank" className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-slate-400">
                       <Linkedin size={16} />
                    </a>
                 )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
