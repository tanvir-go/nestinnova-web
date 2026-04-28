'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

const ADMIN_UID = process.env.ADMIN_UID

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()

  // 1. Authenticate with Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error || !data.user) {
    return { success: false, error: error?.message || 'Invalid credentials' }
  }

  // 2. Verify if the user is the designated Admin
  if (data.user.id !== ADMIN_UID) {
    // If authenticated but not admin, sign them out immediately
    await supabase.auth.signOut()
    return { success: false, error: 'Unauthorized: You do not have admin privileges' }
  }

  // 3. Set the admin_session cookie
  const cookieStore = await cookies()
  cookieStore.set('admin_session', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })

  redirect('/admin/dashboard')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  
  redirect('/login')
}

export async function getSession() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'true'
}
