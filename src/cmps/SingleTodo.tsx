import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
  todo: Todo
  onUpdateTodo: (todoToUpdate: Todo) => void
  onRemoveTodo: (id: number | string) => void
}

type Field = {
  txt: string | number
}

const SingleTodo = ({ todo, onUpdateTodo, onRemoveTodo }: Props) => {
  const [isEdit, setIsEdit] = useState<Boolean>(false)

  const handleDone = (todo: Todo) => {
    const todoToUpdate = { ...todo, isDone: !todo.isDone }
    onUpdateTodo(todoToUpdate)
  }

  const [field, setField] = useState<Field>({ txt: todo.todo })

  const handleChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    let value =
      ev.target.type === 'number' ? +ev.target.value || '' : ev.target.value
    setField({ txt: value })
  }

  const handleDelete = (id: string | number | undefined) => {
    if (id) {
      onRemoveTodo(id)
    }
  }

  const handleEdit = (ev: React.FormEvent, todo: Todo) => {
    ev.preventDefault()
    const todoToUpdate = {
      ...todo,
      todo: field.txt,
    }
    onUpdateTodo(todoToUpdate)
    setField({ txt: '' })
    setIsEdit((prev) => !prev)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEdit])

  return (
    <form className="todos-single" onSubmit={(e) => handleEdit(e, todo)}>
      {isEdit ? (
        <input
          ref={inputRef}
          value={field.txt}
          id="txt"
          name="txt"
          type="text"
          className="todos-single-text"
          onChange={handleChange}
        />
      ) : todo.isDone ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!isEdit && !todo.isDone) {
              setIsEdit(!isEdit)
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
