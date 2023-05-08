import { Suspense } from "react"

import { TodoList } from "@src/components/todo/List"
import { Spinner } from "@src/components/Spinner"

export default async function Todo () {
  return (
    <section>
      <h1 className="font-bold mb-4 text-xl">Todo List</h1>
      <Suspense fallback={<Spinner />}>
        {/* @ts-ignore */}
        <TodoList />
      </Suspense>
    </section>
  )
}
