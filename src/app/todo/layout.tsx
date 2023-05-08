import React from 'react'

export const metadata = {
  title: 'Todo List',
  description: '',
}

type Props = {
  children: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <section>
      <h1 className="mb-4 font-bold text-lg">Todo List</h1>
      {children}
    </section>
  )
}

export default layout
