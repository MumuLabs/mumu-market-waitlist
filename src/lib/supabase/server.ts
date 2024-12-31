/*
 * ANCHOR: Supabase Client Setup
 */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error(
		`Provided Supabase URL or ANON key is invalide. Got: ${supabaseUrl}, ${supabaseAnonKey}`,
	);
}

export const client = createClient(supabaseUrl, supabaseAnonKey);
