'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

const supabase = createClient()

export default function SupabaseTest() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    async function checkConnection() {
      try {
        // Try to fetch something simple, like the current user or just check if client exists
        // A simple query to a non-existent table will also confirm if the URL/Key work for auth
        const { error } = await supabase.from('_test_connection_').select('*').limit(1)
        
        // If error is code 'PGRST116' (no rows) or just a table not found, 
        // it means we connected but the table doesn't exist.
        // If it's an auth error or connection error, the URL/Key are wrong.
        
        if (error && error.message.includes('FetchError')) {
          setStatus('error')
          setErrorMsg(error.message)
        } else {
          setStatus('connected')
        }
      } catch (e: any) {
        setStatus('error')
        setErrorMsg(e.message)
      }
    }

    checkConnection()
  }, [])

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      {status === 'loading' && <p className="text-blue-600">Testing connection...</p>}
      {status === 'connected' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          <p className="font-bold">✅ Connected Successfully!</p>
          <p className="text-sm mt-1">The Supabase client has been initialized and reached the API.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <p className="font-bold">❌ Connection Failed</p>
          <p className="text-sm mt-1">{errorMsg}</p>
        </div>
      )}
      
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Configured URL:</h2>
        <code className="block p-2 bg-slate-100 rounded text-sm">
          {process.env.NEXT_PUBLIC_SUPABASE_URL}
        </code>
      </div>
    </div>
  )
}
