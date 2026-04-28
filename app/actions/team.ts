'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getTeamMembers() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching team members:', error)
    return []
  }
  return data
}

export async function createTeamMember(formData: FormData) {
  const supabase = await createClient()
  
  const name = formData.get('name') as string
  const role = formData.get('role') as string
  const img = formData.get('img') as string
  const bio = formData.get('bio') as string
  const linkedin_url = formData.get('linkedin_url') as string

  const { data, error } = await supabase
    .from('team_members')
    .insert([
      { name, role, img, bio, linkedin_url }
    ])

  if (error) {
    console.error('Error creating team member:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/about')
  revalidatePath('/admin/team')
  return { success: true }
}

export async function deleteTeamMember(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('team_members')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting team member:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/about')
  revalidatePath('/admin/team')
  return { success: true }
}
