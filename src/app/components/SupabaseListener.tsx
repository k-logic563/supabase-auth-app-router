'use client'

import { useEffect } from 'react'
import { updateLoginUser } from '@src/store'
import { supabase } from '@app/utils/supabase'

export const SupabaseListener = () => {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({
        id: session?.user.id,
        email: session?.user.email,
      })
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return null
}
