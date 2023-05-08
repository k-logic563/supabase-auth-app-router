import { headers, cookies } from 'next/headers'
import type { Metadata } from "next";
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '@src/types/database'

type Props = {
  params: {
    id: string
  }
}

const getTodo = async (id: string) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data, error } = await supabase
    .from('todos')
    .select()
    .eq('id', id)
    .single()
  if (error) {
    throw new Error('Network response was not ok')
  }
  return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getTodo(params.id);
  return { title: product.title };
}

export default async function TodoPage({ params }: Props) {
  const todo = await getTodo(params.id)

  return (
    <div>
      <h1 className="font-bold text-xl mb-4">{ todo.title }</h1>
      <p>created_date: { todo.created_at }</p>
    </div>
  )
}
