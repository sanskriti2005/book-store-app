import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HashRouter>
  </StrictMode>
);
