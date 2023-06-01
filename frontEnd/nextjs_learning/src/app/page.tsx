import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos(){
  return prisma.toDo.findMany()
}

async function toggleTodo(id: string, complete: boolean){
  'use server'

  await prisma.toDo.update({where: {id}, data: {complete}})
}

export default async function Home() {
  const todos = await getTodos();
  
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem toggleTodo={toggleTodo} {...todo} key={todo.id}>{todo.title}</TodoItem>
        ))}
      </ul>
    </>
  );
}
