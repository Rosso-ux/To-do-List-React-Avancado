import { useState, useCallback, useMemo } from "react";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  // Adicionar tarefa
  const addTodo = useCallback((text) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random().toString(36).substr(2, 9),
        text,
        completed: false,
        createdAt: Date.now(),
      },
    ]);
  }, []);

  // Alternar concluído/não concluído
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  // Remover tarefa
  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Memorizar os valores para performance
  const value = useMemo(
    () => ({ todos, addTodo, toggleTodo, removeTodo }),
    [todos, addTodo, toggleTodo, removeTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
