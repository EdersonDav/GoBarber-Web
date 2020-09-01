import React from "react";
import GlobalStyled from "./styles/global";
import Signin from "./pages/Signin/index";

const App: React.FC = () => {
  return (
    <>
      <Signin />
      <GlobalStyled />
    </>
  );
};

export default App;
