import React from 'react'
import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@src/types/database'
import Link from 'next/link'

const fetchTodos = async () => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data, error } = await supabase
    .from('todos')
    .select()
    .order('created_at', { ascending: true })
  if (error) {
    throw new Error('Network response was not ok')
  }
  return data
}

export const TodoList = async () => {
  const todos = await fetchTodos()
  return (
    <ul className="space-y-2">
      { todos.map(todo => (
        <li key={todo.id}>
          <Link href={`/todo/${todo.id}`}>
            <span>{todo.created_at}</span>
            <p>{todo.title}</p>            
          </Link>
        </li>
      ))}
    </ul>
  )
}

