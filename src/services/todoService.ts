import { MdDialerSip } from 'react-icons/md'
import { Todo } from '../models.js'
import { storageService } from './storageService'
import { makeId } from './utilService'

export const todoService = {
  query,
  save,
  remove,
  getById,
  getEmptyTodo,
}

const STORAGE_KEY = 'todos'

const gDefaultTodos: Todo[] = [
  { id: makeId(), isDone: false, todo: 'To buy guitar' },
  { id: makeId(), isDone: false, todo: 'Go to the bank' },
  { id: makeId(), isDone: false, todo: 'Coding' },
]

var gTodos = _loadTodos()

function query(filterBy: any) {
  let todosToReturn = gTodos
  if (filterBy) {
  }
  return Promise.resolve([...todosToReturn])
}

function getById(id: number | string) {
  const todo = gTodos.find((todo: Todo) => todo.id === id)
  return Promise.resolve({ ...todo })
}

function remove(id: number | string) {
  const idx = gTodos.findIndex((todo: Todo) => todo.id === id)
  gTodos.splice(idx, 1)
  if (!gTodos.length) gTodos = gDefaultTodos.slice()
  storageService.store(STORAGE_KEY, gTodos)
  return Promise.resolve()
}

function save(todoToSave: Todo) {
  if (todoToSave.id) {
    const idx = gTodos.findIndex((todo: Todo) => todo.id === todoToSave.id)
    gTodos.splice(idx, 1, todoToSave)
  } else {
    todoToSave.id = makeId()

    gTodos.push(todoToSave)
  }
  storageService.store(STORAGE_KEY, gTodos)
  return Promise.resolve(todoToSave)
}

function getEmptyTodo(): Todo {
  return {
    isDone: false,
    todo: '',
  }
}

function _loadTodos(): Todo[] {
  let todos: Todo[] = storageService.load(STORAGE_KEY)
  console.log(todos)

  if (!todos || !todos.length) todos = gDefaultTodos
  storageService.store(STORAGE_KEY, todos)
  return todos
}
