import '@src/styles/globals.css'
import { Inter } from 'next/font/google'

import SupabaseProvider from '@src/provider/supabase-provider'
import { Header } from '@src/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SupabaseProvider>
          <Header />
          <main>
            <div className="p-24">
              {children}
            </div>
          </main>
        </SupabaseProvider>
      </body>
    </html>
  )
}
