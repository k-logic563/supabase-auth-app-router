'use client'

import { useStore } from '@nanostores/react'

import { loginUser } from '@src/store'

export const Profile = () => {
  const user = useStore(loginUser)

  return (
    <div>
      <div className="mb-4">Hello {user.email}</div>
    </div>
  )
}
