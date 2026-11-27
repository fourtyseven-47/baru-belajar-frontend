import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import { FavoritProvider } from "./FavoritContext.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritProvider>
        <App />
      </FavoritProvider>
    </BrowserRouter>
  </StrictMode>
);