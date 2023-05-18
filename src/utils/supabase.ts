import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@src/types/database";

export const supabase = createBrowserSupabaseClient<Database>();
