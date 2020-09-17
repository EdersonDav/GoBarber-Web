import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyled from "./styles/global";
import Router from "./routes";

import AppProvider from "./hooks";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
      <GlobalStyled />
    </BrowserRouter>
  );
};

export default App;
