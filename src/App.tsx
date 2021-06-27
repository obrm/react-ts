import React, { useState } from 'react'

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [{ id: new Date().getTime().toString(), text }, ...prev])
  }

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className='App'>
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  )
}

export default App
