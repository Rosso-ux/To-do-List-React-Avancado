import { selector } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";
import { filterAtom } from "../atoms/filterAtom";

export const filterTodosSelector = selector({
  key: "filterTodosSelector",
  get: ({ get }) => {
    const todos = get(todoListAtom);
    const filter = get(filterAtom);

    switch (filter) {
      case "pending":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
});
