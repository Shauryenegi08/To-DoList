"use client";

import { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../services/api";
import ToDoItem from '../components/toDoItem';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
  try {
    const res = await getTodos();
    setTodos(res?.data || []);
  } catch (error) {
    setTodos([]);
  }
};

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTodo(title);
    setTitle("");
    fetchTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, !todo.completed);
    fetchTodos();
  };

  const handleDelete = async (todo) => {
    await deleteTodo(todo.id);
    fetchTodos();
  };

  const remaining = todos.filter((t) => !t.completed).length;
  
  return (
    <div suppressHydrationWarning={true}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            To-Do List
          </h1>

          <form onSubmit={handleAdd} className="flex mb-6">
            <input
              type="text"
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add new task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 transition">
              Add
            </button>
          </form>

          <div>
            {todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </div>

          <div className="text-sm text-gray-600 mt-6 text-center">
            {remaining} task{remaining !== 1 ? "s" : ""} remaining
          </div>
        </div>
      </div>
    </div>
  );
}
