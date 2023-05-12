import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@app/types/database";

export const supabase = createBrowserSupabaseClient<Database>();
