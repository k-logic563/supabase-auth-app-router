import React, { Suspense } from 'react'

import { TodoList } from '../components/TodoList'
import { Spinner } from '@src/app/components/Spinner'

const Todo = () => {
  return (
    <>
      <div>Todo Page</div>
      <Suspense fallback={<Spinner />}>
        <TodoList />
      </Suspense>
    </>
  )
}

export default Todo
