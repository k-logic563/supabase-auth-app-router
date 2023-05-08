'use client'

import { useEffect, useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import { updateLoginUser } from '@src/store'
import { Context } from '@src/context/supabase-context'

type Props = {
  children: React.ReactNode
}

export default function SupabaseProvider({ children }: Props) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.user) {
        updateLoginUser({
          id: session?.user?.id,
          email: session?.user?.email,
        })
      } else {
        updateLoginUser({
          id: undefined,
          email: undefined,
        })
      }
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  return (
    <Context.Provider value={{ supabase }}>
      {children}
    </Context.Provider>
  )
}
