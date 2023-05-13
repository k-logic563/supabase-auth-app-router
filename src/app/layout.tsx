import '@src/styles/globals.css'
import { headers, cookies } from 'next/headers'
import { Inter } from 'next/font/google'

import { Header } from './components/layout/Header'
import { SupabaseListener } from './components/SupabaseListener'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './types/database'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies
  })
  const { data: { session } } = await supabase.auth.getSession()
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SupabaseListener accessToken={session?.access_token} />
        <Header />
        <main>
          <div className="p-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
