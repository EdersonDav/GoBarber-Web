import React, { useRef, useCallback } from "react";
import { FiLogIn, FiLock, FiMail } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import logo from "../../assets/images/logo.svg";
import { Container, Content, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/AuthContext";

interface SigInData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SigInData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail é obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha é obrigatório"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber_Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
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
