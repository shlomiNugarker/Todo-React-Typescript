import React, { useEffect } from 'react'
import './assets/scss/global.scss'
import InputFeild from './cmps/InputFeild'
import TodoList from './cmps/TodoList'
import { Todo } from './models'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/index'
import { bindActionCreators } from 'redux'
import { actions } from './store/allActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const { todos } = useSelector((state: RootState) => state.todosModule)

  const { loadTodos, addTodo, removeTodo, updateTodo } = bindActionCreators(
    actions,
    dispatch
  )

  useEffect(() => {
    loadTodos()
  }, [])

  const onAddTodo = (ev: React.FormEvent, txt: string | number) => {
    ev.preventDefault()
    addTodo({ todo: txt, isDone: false })
  }

  const onUpdateTodo = (todoToUpdate: Todo) => {
    updateTodo(todoToUpdate)
  }

  const onRemoveTodo = (id: number | string) => {
    removeTodo(id)
  }

  return (
    <div className="App">
      <span className="heading">Todo with Typescript</span>
      <InputFeild onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onUpdateTodo={onUpdateTodo}
        onRemoveTodo={onRemoveTodo}
      />
    </div>
  )
}

export default App
