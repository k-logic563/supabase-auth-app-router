import { Suspense } from "react"
import type { Metadata } from "next";

import { TodoList } from "@app/components/todo/List"
import { Loader } from "@app/components/Loader"

export const metadata: Metadata = {
  title: 'Todo List',
};

export default async function Todo () {
  return (
    <section>
      <h1 className="font-bold mb-4 text-xl">Todo List</h1>
      <Suspense fallback={<Loader />}>
        {/* @ts-ignore */}
        <TodoList />
      </Suspense>
    </section>
  )
}
