import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PropertyContextProvider from "./context/PropertyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PropertyContextProvider>
        <App />
      </PropertyContextProvider>
    </BrowserRouter>
  </StrictMode>
);
