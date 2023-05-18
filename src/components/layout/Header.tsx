'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@nanostores/react'

import { loginUser } from '@src/store'
import { supabase } from '@src/utils/supabase'

export const Header = () => {
  const router = useRouter()
  const user = useStore(loginUser)

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      alert(error.message)
      return
    }
    router.push('/auth')
  }

  return (
    <header className="bg-teal-500 text-white px-6 py-4 flex justify-between items-center">
      <p>SB-Auth with AppRouter</p>
      { user.id && (
        <button type='button' onClick={logout}>
          Logout
        </button>
      )}
    </header>
  )
}
