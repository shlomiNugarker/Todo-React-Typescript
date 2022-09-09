import { ActionType } from '../action-types/index'
import { Todo } from '../../models'

interface LoadTodoAction {
  type: ActionType.LOAD_TODOS
  todos: Todo[]
}
interface AddTodoAction {
  type: ActionType.ADD_TODO
  todo: Todo
}

interface RemoveTodoAction {
  type: ActionType.REMOVE_TODO
  todoId: string | number
}

interface UpdateTodoAction {
  type: ActionType.UPDATE_TODO
  todo: Todo
}
interface SetFilterByAction {
  type: ActionType.SET_FILTER_BY
  filterBy: object
}

export type Action =
  | LoadTodoAction
  | RemoveTodoAction
  | UpdateTodoAction
  | SetFilterByAction
  | AddTodoAction
