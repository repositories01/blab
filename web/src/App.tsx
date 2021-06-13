import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./presentation/routes";

import "./assets/styles/global.css";
import AppProvider from "./presentation/hooks/index";
import GlobalStyle from './presentation/styles/global'

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
