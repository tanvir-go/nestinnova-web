'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getBlogs() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
  return data
}

export async function createBlog(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const img = formData.get('img') as string
  const author = formData.get('author') as string
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  
  // Simple slug generation
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const { data, error } = await supabase
    .from('blogs')
    .insert([
      { title, slug, category, img, author, excerpt, content, published_at: new Date().toISOString() }
    ])

  if (error) {
    console.error('Error creating blog:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/blog')
  revalidatePath('/admin/blogs')
  return { success: true }
}

export async function deleteBlog(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting blog:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/blog')
  revalidatePath('/admin/blogs')
  return { success: true }
}
