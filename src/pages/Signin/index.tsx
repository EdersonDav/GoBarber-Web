import React from "react";
import { FiLogIn } from "react-icons/fi";
import logo from "../../assets/images/logo.svg";
import { Container, Content, Background } from "./styles";

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber_Logo" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
          <a href="senhaNova">Esqueci minha senha</a>
        </form>
        <a href="criar">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
