'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
const supabase = createClient()
import { 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle2,
  Clock,
  Trash2
} from 'lucide-react'

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLeads() {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error) {
        setLeads(data || [])
      }
      setLoading(false)
    }

    fetchLeads()

    // Real-time subscription
    const channel = supabase
      .channel('public:leads')
      .on('postgres_changes', { event: '*', table: 'leads', schema: 'public' }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setLeads((prev) => [payload.new, ...prev])
        }
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leads Management</h1>
          <p className="text-slate-500 mt-1">Track and manage all your customer inquiries in real-time.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} /> Export
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
            Create Lead
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex items-center gap-4 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 flex-1 max-w-xl">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, email, or company..." 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>
        <div className="flex gap-3">
           <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-600">
              <Filter size={16} /> Filters
           </div>
           <select className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-600 outline-none">
              <option>All Services</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
           </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto text-slate-900">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-900">
                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Client Details</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Service Requested</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                 <tr>
                    <td colSpan={4} className="px-8 py-20 text-center text-slate-400">
                       <Clock className="w-8 h-8 mx-auto mb-2 animate-spin text-blue-200" />
                       Loading leads...
                    </td>
                 </tr>
              ) : leads.length === 0 ? (
                // Fallback / Sample Data if table is empty
                [
                  { name: 'Sarah Johnson', email: 'sarah@example.com', service: 'UI/UX Design', status: 'New', phone: '+1 234 567 890', date: 'Oct 24, 2023' },
                  { name: 'Michael Chen', email: 'mchen@tech.co', service: 'Web Development', status: 'Contacted', phone: '+1 987 654 321', date: 'Oct 23, 2023' },
                ].map((lead, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{lead.name}</div>
                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                            <Mail size={12} /> {lead.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                          {lead.service}
                       </div>
                       <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-tighter">
                          <Calendar size={12} /> Received: {lead.date}
                       </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        lead.status === 'New' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                        'bg-amber-50 text-amber-600 border border-amber-100'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <div className="flex items-center justify-end gap-2">
                          <button className="p-2 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors text-slate-400" title="Mark as contacted">
                             <CheckCircle2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors text-slate-400" title="Delete">
                             <Trash2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                             <MoreVertical size={18} />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))
              ) : (
                leads.map((lead, idx) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                    {/* Real Lead Rows */}
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                          {lead.full_name?.charAt(0) || 'L'}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{lead.full_name}</div>
                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                            <Mail size={12} /> {lead.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 uppercase">
                          {lead.subject}
                       </div>
                       <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-2 font-medium">
                          <Calendar size={12} /> {new Date(lead.created_at).toLocaleDateString()}
                       </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100">
                        Interested
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                          <MoreVertical size={18} />
                       </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
