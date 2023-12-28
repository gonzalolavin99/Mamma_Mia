import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PizzaProvider } from "./context/PizzaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaProvider>
      <App />
    </PizzaProvider>
  </React.StrictMode>
);
