import { useRecoilValue } from "recoil";
import { filterTodosSelector } from "../selectors/filterTodosSelector";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const filteredTodos = useRecoilValue(filterTodosSelector);

  if (filteredTodos.length === 0)
    return <p className="small">Nenhuma tarefa encontrada.</p>;

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
