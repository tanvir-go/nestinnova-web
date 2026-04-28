import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Users, 
  MessageSquare, 
  Eye, 
  Target 
} from 'lucide-react'

const stats = [
  { 
    name: 'Total Leads', 
    value: '124', 
    change: '+12.5%', 
    trend: 'up', 
    icon: MessageSquare,
    color: 'blue'
  },
  { 
    name: 'Conversions', 
    value: '3.2%', 
    change: '+0.4%', 
    trend: 'up', 
    icon: Target,
    color: 'emerald'
  },
  { 
    name: 'Site Visits', 
    value: '12,405', 
    change: '-2.1%', 
    trend: 'down', 
    icon: Eye,
    color: 'indigo'
  },
  { 
    name: 'Active Clients', 
    value: '18', 
    change: '+2', 
    trend: 'up', 
    icon: Users,
    color: 'amber'
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-bold ${
                stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.name}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recent Leads</h2>
            <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-200">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Sarah Johnson', email: 'sarah@example.com', service: 'UI/UX Design', status: 'New', date: '2h ago' },
                  { name: 'Michael Chen', email: 'mchen@tech.co', service: 'Web App', status: 'Contacted', date: '5h ago' },
                  { name: 'David Miller', email: 'david@agency.net', service: 'DevOps', status: 'Follow-up', date: '1d ago' },
                  { name: 'Emma Wilson', email: 'emma.w@startup.io', service: 'Mobile App', status: 'Closed', date: '2d ago' },
                ].map((lead, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{lead.name}</div>
                      <div className="text-xs text-slate-400">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{lead.service}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        lead.status === 'New' ? 'bg-blue-50 text-blue-600' :
                        lead.status === 'Contacted' ? 'bg-amber-50 text-amber-600' :
                        lead.status === 'Follow-up' ? 'bg-indigo-50 text-indigo-600' :
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 text-right">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6 font-primary">System Health</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-600">Supabase Connection</span>
                <span className="text-emerald-500 font-bold">Stable</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[98%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-600">Frontend Performance</span>
                <span className="text-blue-500 font-bold">94/100</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[94%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-600">API Response Time</span>
                <span className="text-blue-500 font-bold">124ms</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[82%]"></div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
               <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">Active Server</h3>
               <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Production-Central-1</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
