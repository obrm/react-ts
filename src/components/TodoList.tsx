import React from 'react'

interface TodoListProps {
  todos: { id: string; text: string }[]
  deleteTodoHandler: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.deleteTodoHandler.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
