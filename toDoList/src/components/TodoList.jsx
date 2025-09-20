import React, { useMemo } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, filter, onToggle, onRemove }) {
  const filtered = useMemo(() => {
    switch (filter) {
      case "completed":
        return todos.filter((t) => t.completed);
      case "pending":
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  if (filtered.length === 0)
    return <p className="small">Nenhuma tarefa encontrada.</p>;

  return (
    <ul>
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
