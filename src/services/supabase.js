import { createClient } from "@supabase/supabase-js";

const API_URL = "https://lvdhvpmyyjypeekvwgdk.supabase.co";
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(API_URL, API_KEY);

export default supabase;
