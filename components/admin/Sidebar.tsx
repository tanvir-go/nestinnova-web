'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  FileText
} from 'lucide-react'
import { useState } from 'react'
import { logout } from '@/app/actions/auth'

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
  { name: 'Leads', icon: MessageSquare, href: '/admin/leads' },
  { name: 'Portfolio', icon: Briefcase, href: '/admin/portfolio' },
  { name: 'Blogs', icon: FileText, href: '/admin/blogs' },
  { name: 'Team', icon: Users, href: '/admin/team' },
  { name: 'Settings', icon: Settings, href: '/admin/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside 
      className={`bg-slate-900 text-white h-screen transition-all duration-300 flex flex-col sticky top-0 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        {!isCollapsed && (
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Nestinnova
          </span>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-white' : 'group-hover:text-blue-400 transition-colors'} />
              {!isCollapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-white/5">
        <button 
          onClick={() => logout()}
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-400/5 transition-all group ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  )
}
