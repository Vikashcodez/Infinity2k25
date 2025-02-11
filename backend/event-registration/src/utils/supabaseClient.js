import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://fevltbslkladqtcddffk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldmx0YnNsa2xhZHF0Y2RkZmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzAzNzAsImV4cCI6MjA1NDc0NjM3MH0.29gWYAAcSAT-KiWLe8niHu4NaBbqbn8rG9I1iEB0Fzg';
export const supabase = createClient(supabaseUrl, supabaseKey);
