'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@src/utils/supabase'

export default function Auth() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        alert(error?.message)
        return
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        alert(error?.message)
        return
      }
    }
    router.push('/')
  }
  
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none rounded border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex items-center justify-between mb-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              { isLogin ? 'ログイン' : 'サインアップ'}
          </button>
        </div>
        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-sm cursor-pointer font-medium hover:text-indigo-500"
        >
          { isLogin ? 'Create new account ?' : 'Back to login' }
        </p>
      </form>
    </div>
  )
}
