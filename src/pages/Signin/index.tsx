import React from "react";
import { FiLogIn, FiLock, FiMail } from "react-icons/fi";
import logo from "../../assets/images/logo.svg";
import { Container, Content, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber_Logo" />
        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
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
