import { Dispatch } from 'redux'
import { todoService } from '../../services/todoService'
import { ActionType } from '../action-types'
import { Action } from '../actionInterfaces/index'
import { Todo } from '../../models'

export function loadTodos() {
  return async (dispatch: Dispatch<Action>, getState: any): Promise<void> => {
    try {
      const { filterBy } = getState().todosModule
      const todos = await todoService.query(filterBy)
      dispatch({ type: ActionType.LOAD_TODOS, todos })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function addTodo(todo: Todo) {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      await todoService.save(todo)
      dispatch({ type: ActionType.ADD_TODO, todo })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function removeTodo(todoId: string | number | undefined) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      if (!todoId) return
      await todoService.remove(todoId)
      dispatch({ type: ActionType.REMOVE_TODO, todoId })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function updateTodo(todo: Todo) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await todoService.save(todo)
      dispatch({ type: ActionType.UPDATE_TODO, todo })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function setFilterBy(filterBy: any) {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SET_FILTER_BY, filterBy })
  }
}
