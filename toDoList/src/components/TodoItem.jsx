import React from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item" data-id={todo.id}>
      <div className="todo-main">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <div>
          <div className={todo.completed ? "completed" : ""}>{todo.text}</div>
          <div className="small">
            {new Date(todo.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
      <div>
        <button
          className="remove"
          onClick={() => onRemove(todo.id)}
          aria-label={`remover-${todo.id}`}
        >
          Remover
        </button>
      </div>
    </li>
  );
}

export default React.memo(TodoItem);
