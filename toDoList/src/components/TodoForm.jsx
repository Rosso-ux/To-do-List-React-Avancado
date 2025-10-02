import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";

export default function TodoForm() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoListAtom);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} aria-label="form-adicionar-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicione uma tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
