import { Todo } from '../models'

function store(key: string, value: Todo[]) {
  localStorage[key] = JSON.stringify(value)
}

function load(key: string, defaultValue: Todo | null = null): Todo[] {
  var value = localStorage[key] || defaultValue
  return JSON.parse(value)
}
export const storageService = {
  store,
  load,
}
