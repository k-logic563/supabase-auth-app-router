'use client'

import { useRouter } from 'next/navigation'
import { useStore } from '@nanostores/react'

import { useSupabase } from '@src/app/hooks/useSupabase'
import { loginUser } from '@src/store'

export const Profile = () => {
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
    <div>
      <div className="mb-4">Hello {user.email}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={logout}>ログアウト</button>
    </div>
  )
}
