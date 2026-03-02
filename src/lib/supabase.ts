import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  "https://cdpusealrtsahaxqlnfs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcHVzZWFscnRzYWhheHFsbmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0NjM2MTksImV4cCI6MjA4ODAzOTYxOX0.MjZ2edU3vBbJAq3mLXzQqIvWjMvJoJjVSTujK6duHA4"
);