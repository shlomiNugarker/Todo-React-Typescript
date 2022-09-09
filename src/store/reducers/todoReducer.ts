import { ActionType } from '../action-types/index'
import { Action } from '../actionInterfaces/index'
import { Todo } from '../../models'

interface initialState {
  todos: Todo[]
  filterBy: any
}

const INITIAL_STATE: initialState = {
  todos: [],
  filterBy: null,
}

function todosReducer(state = INITIAL_STATE, action: Action): initialState {
  switch (action.type) {
    case ActionType.LOAD_TODOS:
      return {
        ...state,
        todos: action.todos,
      }

    case ActionType.ADD_TODO:
      console.log('ADD_TODO', action.todo)

      return {
        ...state,
        todos: [...state.todos, action.todo],
      }

    case ActionType.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.todoId),
      }

    case ActionType.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.todo.id ? action.todo : todo
        ),
      }
    case ActionType.SET_FILTER_BY:
      return {
        ...state,
        filterBy: { ...action.filterBy },
      }

    default:
      return state
  }
}

export default todosReducer
