import React from "react";
import GlobalStyled from "./styles/global";
import Signin from "./pages/Signin";
// import SignUp from "./pages/SignUp";

import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Signin />
      </AuthProvider>
      <GlobalStyled />
    </>
  );
};

export default App;
