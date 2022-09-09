import React from 'react'
import { Todo } from '../models'
import SingleTodo from './SingleTodo'

interface Props {
  todos: Todo[]
  onUpdateTodo: (todoToUpdate: Todo) => void
  onRemoveTodo: (id: number | string) => void
}

const TodoList: React.FC<Props> = ({
  todos,
  onUpdateTodo,
  onRemoveTodo,
}: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          onUpdateTodo={onUpdateTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
