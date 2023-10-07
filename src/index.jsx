import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Provider from "./context/Provider.jsx";
import { GlobalStyle } from "./GlobalStyles.js";
import { Router } from "./router.jsx";

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
