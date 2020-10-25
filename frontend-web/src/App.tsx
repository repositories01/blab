import React from "react";
import Routes from "./routes";

import "./assets/styles/global.css";
import AppProvider from "./hooks/index";

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
