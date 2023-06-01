'use client'
import React from 'react'

type TodoItemProps = {
    id: string
    title: string
    complete: boolean,
    toggleTodo: (id:string, complete: boolean) => void
}

const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        onChange={(e) => toggleTodo(id, e.target.checked)}
        defaultChecked={complete}
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
      />
      <label
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
        htmlFor={id}
      >
        {title}
      </label>
    </li>
  );
};

export default TodoItem