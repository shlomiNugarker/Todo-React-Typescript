import React, { useState } from 'react'
import './assets/scss/global.scss'
import InputFeild from './cmps/InputFeild'
import TodoList from './cmps/TodoList'
import { Todo } from './models'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (ev: React.FormEvent) => {
    ev.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }

  return (
    <div className="App">
      <span className="heading">Todo with Typescript</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
