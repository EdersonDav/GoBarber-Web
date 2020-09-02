import React from "react";
import GlobalStyled from "./styles/global";
// import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyled />
    </>
  );
};

export default App;
