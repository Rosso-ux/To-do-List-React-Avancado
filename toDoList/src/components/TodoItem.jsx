import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoListAtom);
  function toggle() {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }
  function remove() {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  }
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={toggle} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={remove}>Remover</button>
    </li>
  );
}
