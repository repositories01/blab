import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import "./assets/styles/global.css";
import AppProvider from "./hooks/index";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
