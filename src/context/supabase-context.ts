import { createContext } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'

import type { Database } from '@src/types/database'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

export const Context = createContext<SupabaseContext | undefined>(undefined)
