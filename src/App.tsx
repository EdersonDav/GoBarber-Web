import React from "react";
import GlobalStyled from "./styles/global";
import Signin from "./pages/Signin";
// import SignUp from "./pages/SignUp";

import AppProvider from "./hooks";

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Signin />
      </AppProvider>
      <GlobalStyled />
    </>
  );
};

export default App;
