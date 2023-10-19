import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyles.js";
import { Router } from "./router.jsx";
import Provider from "./context/Provider.jsx";
import Home from "./pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider>
      <Router>
        <Home />
      </Router>
    </Provider>
  </React.StrictMode>
);
