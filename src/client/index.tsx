import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

// Criando a raiz do React
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Renderizando o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);