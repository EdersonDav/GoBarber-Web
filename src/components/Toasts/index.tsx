import React from "react";

import { FiXCircle, FiAlertCircle } from "react-icons/fi";

import { Container, Toasts } from "./style";

const Toast: React.FC = () => {
  return (
    <Container>
      <Toasts hastDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
          <p>Essa é a descrição do erro que ocorreu</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toasts>

      <Toasts type="success" hastDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
          <p>Essa é a descrição do erro que ocorreu</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toasts>

      <Toasts type="error" hastDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toasts>
    </Container>
  );
};

export default Toast;
