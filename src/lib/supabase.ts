import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hxxjkmgznhhvvmpokfih.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check for required environment variables
if (!supabaseKey) {
  // Missing environment variable - client will be null
}

// Create single Supabase client instance
export const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Export configuration values for any additional use
export { supabaseUrl, supabaseKey };

// Helper function to check if Supabase is available
export const isSupabaseAvailable = (): boolean => {
  return supabase !== null;
};

// Export types for TypeScript
export type SupabaseClient = typeof supabase;
