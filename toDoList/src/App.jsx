import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

export default function App() {
  return (
    <div className="app">
      <h1> To-Do List com Recoil</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  );
}
