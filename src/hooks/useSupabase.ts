'use client'

import { useContext } from 'react'

import { Context } from '../context/supabase-context'

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return context
}
