import React from 'react'
import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@src/types/database'

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
    <ul>
      { todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

