import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import "./assets/styles/global.css";
import AppProvider from "./hooks/index";
import GlobalStyle from './styles/global'

function App() {
  return (
      <BrowserRouter>
    <AppProvider>
        <Routes />
    </AppProvider>

    <GlobalStyle />
      </BrowserRouter>
  );
}

export default App;
