'use client'

import { useRouter } from 'next/navigation'
import { useStore } from '@nanostores/react'

import { useSupabase } from '@src/hooks/useSupabase'
import { loginUser } from '@src/store'

export const Profile = () => {
  const user = useStore(loginUser)

  return (
    <div>
      <div className="mb-4">Hello {user.email}</div>
    </div>
  )
}
