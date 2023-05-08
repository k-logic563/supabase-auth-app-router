'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useStore } from '@nanostores/react'

import { loginUser } from '@src/store'
import { useSupabase } from '@src/hooks/useSupabase'

export const Header = () => {
  const user = useStore(loginUser)
  const router = useRouter()
  const { supabase } = useSupabase()

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
        <div className="flex items-center gap-x-8">
          <nav>
            <ul className="flex items-center gap-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/todo">Todo</Link>
              </li>
            </ul>
          </nav>
          <button type='button' onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </header>
  )
}
