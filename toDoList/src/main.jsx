import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/TodoProvider";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
