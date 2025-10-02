import { useRecoilState } from "recoil";
import { filterAtom } from "../atoms/filterAtom";

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(filterAtom);
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Concluídas
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={filter === "pending" ? "active" : ""}
      >
        Pendentes
      </button>
    </div>
  );
}
