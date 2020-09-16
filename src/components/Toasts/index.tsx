import React from "react";

import { Container } from "./style";

import { ToastMessages } from "../../hooks/Toast";

import Toasts from "./ToastContent";

interface ToastProps {
  messages: ToastMessages[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => {
        return <Toasts key={message.id} message={message} />;
      })}
    </Container>
  );
};

export default Toast;
