import React, { createContext, useCallback, useState, useContext } from "react";

import api from "../services/api";

interface AuthData {
  token: string;
  user: object;
}
interface Credentials {
  email: string;
  password: string;
}
interface AuthContextDTO {
  user: object;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem("Gobarber:token");
    const user = localStorage.getItem("Gobarber:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem("Gobarber:token", token);
    localStorage.setItem("Gobarber:user", JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("Gobarber:token");
    localStorage.removeItem("Gobarber:user");
    setData({} as AuthData);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextDTO => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
