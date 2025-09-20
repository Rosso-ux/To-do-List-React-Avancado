import React from "react";

export default function TodoFilters({ filter, setFilter, count }) {
  const options = [
    { id: "all", label: `Todas (${count})` },
    { id: "pending", label: "Pendentes" },
    { id: "completed", label: "Concluídas" },
  ];

  return (
    <div className="filters">
      {options.map((o) => (
        <button
          key={o.id}
          className={`filter-btn ${filter === o.id ? "active" : ""}`}
          onClick={() => setFilter(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
