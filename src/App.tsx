import React from "react";
import GlobalStyled from "./styles/global";
import Signin from "./pages/Signin";
// import SignUp from "./pages/SignUp";
import Toast from "./components/Toasts";

import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Signin />
      </AuthProvider>
      <Toast />
      <GlobalStyled />
    </>
  );
};

export default App;
