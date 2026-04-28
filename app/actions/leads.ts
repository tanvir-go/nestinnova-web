'use server'

import { createClient } from '@/utils/supabase/server'

export async function submitLead(formData: FormData) {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  const supabase = await createClient()

  const { data, error } = await supabase
    .from('leads')
    .insert([
      { 
        full_name: fullName, 
        email, 
        subject, 
        message,
        status: 'New'
      }
    ])

  if (error) {
    console.error('Error submitting lead:', error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
