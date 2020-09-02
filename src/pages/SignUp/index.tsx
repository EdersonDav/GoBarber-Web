import React from "react";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import logo from "../../assets/images/logo.svg";
import { Container, Content, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup: React.FC = () => {
  const handleSubmit = (data: any): void => {
    console.log(data);
  };
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber_Logo" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="criar">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
