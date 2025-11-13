import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://qsaowtibdsouszwyupvl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYW93dGliZHNvdXN6d3l1cHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMDE1NDYsImV4cCI6MjA3Nzc3NzU0Nn0.xtW53Uh4qq6XeEUoz6_eiAJN-NbRAL82rJA15FRydk8"; // tu clave real

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
