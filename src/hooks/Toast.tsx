import React, { createContext, useContext, useCallback, useState } from "react";
import { v4 } from "uuid";
import Toasts from "../components/Toasts";

export interface ToastMessages {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}

interface ToastContextDTO {
  addToast(message: Omit<ToastMessages, "id">): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<ToastContextDTO>({} as ToastContextDTO);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMesages] = useState<ToastMessages[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessages, "id">) => {
      const id = v4();
      const newMessage = {
        id,
        title,
        description,
        type,
      };
      setMesages((state) => [...state, newMessage]);
    },
    []
  );
  const removeToast = useCallback((id: string) => {
    setMesages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toasts messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextDTO => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

export { ToastProvider, useToast };
