import React, { useEffect } from "react";
import { FiXCircle, FiCheck, FiInfo, FiAlertCircle } from "react-icons/fi";
import { Container } from "./style";
import { ToastMessages, useToast } from "../../../hooks/Toast";

interface ToastProps {
  message: ToastMessages;
}

const iconsToasts = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheck size={24} />,
};

const ToastContent: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);
  return (
    <Container hastDescription={!!message.description} type={message.type}>
      {iconsToasts[message.type || "info"]}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastContent;
