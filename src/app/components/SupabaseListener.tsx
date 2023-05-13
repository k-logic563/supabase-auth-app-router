'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { updateLoginUser } from '@src/store'
import { supabase } from '@app/utils/supabase'

export const SupabaseListener = ({
  accessToken
}: {
  accessToken?: string
}) => {
  const router = useRouter()

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        updateLoginUser({
          id: data.session.user.id,
          email: data.session.user.email,
        })
      }
    }
    getUserInfo()
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({
        id: session?.user.id,
        email: session?.user.email,
      })
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [accessToken])

  return null
}
