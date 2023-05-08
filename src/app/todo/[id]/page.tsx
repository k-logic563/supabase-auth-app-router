import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@src/types/database'

type Props = {
  params: {
    id: string
  }
}

export default async function TodoPage({ params }: Props) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data, error } = await supabase
    .from('todos')
    .select()
    .eq('id', params.id)
    .single()
  if (error) {
    throw new Error('Network response was not ok')
  }

  return (
    <div>
      <h1 className="font-bold text-xl mb-4">{ data.title }</h1>
      <p>created_date: { data.created_at }</p>
    </div>
  )
}
