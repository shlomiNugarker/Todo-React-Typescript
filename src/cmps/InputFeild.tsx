import React, { useRef, useState } from 'react'

interface Props {
  onAddTodo: (ev: React.FormEvent, txt: string | number) => void
}
type Field = {
  txt: string | number
}

const InputFeild: React.FC<Props> = ({ onAddTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [field, setField] = useState<Field>({ txt: '' })

  const handleChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    let value =
      ev.target.type === 'number' ? +ev.target.value || '' : ev.target.value

    setField({ txt: value })
  }

  return (
    <form
      className="input"
      onSubmit={(e) => {
        onAddTodo(e, field.txt)
        inputRef.current?.blur()
        setField({ txt: '' })
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input-box"
        onChange={handleChange}
        id="txt"
        name="txt"
        value={field.txt}
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  )
}

export default InputFeild
