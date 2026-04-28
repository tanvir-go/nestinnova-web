'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getProjects() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  return data
}

export async function createProject(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const img = formData.get('img') as string
  const description = formData.get('description') as string
  const techString = formData.get('tech') as string
  const tech = techString.split(',').map(t => t.trim()).filter(Boolean)

  const { data, error } = await supabase
    .from('projects')
    .insert([
      { title, category, img, description, tech }
    ])

  if (error) {
    console.error('Error creating project:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/portfolio')
  revalidatePath('/admin/portfolio')
  return { success: true }
}

export async function deleteProject(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting project:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/portfolio')
  revalidatePath('/admin/portfolio')
  return { success: true }
}
