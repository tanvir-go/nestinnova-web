import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // During build or if keys are missing, return a proxy that allows 
    // the code to load but will fail if actual calls are made.
    // This prevents the build from crashing during prerendering.
    return {} as any;
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
};
