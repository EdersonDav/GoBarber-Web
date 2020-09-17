import React from "react";
import { useTransition } from "react-spring";

import { Container } from "./style";

import { ToastMessages } from "../../hooks/Toast";

import Toasts from "./ToastContent";

interface ToastProps {
  messages: ToastMessages[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "0%", opacity: 1 },
      leave: { right: "-120%", opacity: 0 },
    }
  );
  return (
    <Container>
      {messagesWithTransition.map(({ key, item, props }) => {
        return <Toasts key={key} message={item} style={props} />;
      })}
    </Container>
  );
};

export default Toast;
