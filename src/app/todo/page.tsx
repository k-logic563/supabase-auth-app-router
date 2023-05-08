import { Suspense } from 'react'

import { TodoList } from '@src/components/todo/List'

const Todo = () => {
  return (
    <>
      {/*@ts-ignore*/}
      <TodoList />
    </>
  )
}

export default Todo
