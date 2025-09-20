import React, { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import { TodoProvider } from "./context/TodoProvider";

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const [filter, setFilter] = useState("all");

  return (
    <div className="app">
      <div className="header">
        <h1>To-do-List React Avançado</h1>
        <div className="small">Total: {todos.length}</div>
      </div>

      <TodoProvider>
        <TodoForm onAdd={addTodo} />
        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          count={todos.length}
        />

        <TodoList
          todos={todos}
          filter={filter}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      </TodoProvider>
    </div>
  );
}
