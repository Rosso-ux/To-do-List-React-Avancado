import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
