import '@src/styles/globals.css'
import { Inter } from 'next/font/google'

import { Header } from '@src/components/layout/Header'
import { SupabaseListener } from '@src/components/SupabaseListener'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SupabaseListener />
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
