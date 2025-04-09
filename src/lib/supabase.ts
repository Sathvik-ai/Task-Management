import { createClient } from '@supabase/supabase-js';

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          id: number;
          title: string;
          status: 'pending' | 'completed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          status?: 'pending' | 'completed';
        };
        Update: {
          title?: string;
          status?: 'pending' | 'completed';
        };
      };
    };
  };
}

// Note: You'll need to replace these with your actual Supabase credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);