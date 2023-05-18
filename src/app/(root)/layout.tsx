import React from 'react'

import { Header } from '@src/components/layout/Header'

export default async function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto py-24">
          { children }
        </div>
      </main>
    </>
  )
}
