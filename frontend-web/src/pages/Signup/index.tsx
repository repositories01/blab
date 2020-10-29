import React, { useRef, useState, useCallback } from "react";
import { FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import getValidationErrors from "../../utils/getValidationsErros";
import api from "../../services/api";
import InputLogin from "../../components/InputLogin";
import {
  Container,
  Content,
  AnimationContainer,
  Background,
  Button,
} from "./styles";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isAuth, setIsAuth] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post("/signup", data);

      setIsAuth(true);

      history.push("/give-classes");
    } catch (err) {
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
    }
  }, []);

  return (
    <Container>
      <Background isAuth={isAuth} />
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <span>
              Preencha dos dados abaixo
              <br /> para começar.
            </span>
            <InputLogin name="name" placeholder="Nome" />

            <InputLogin name="email" placeholder="Email" />
            <InputLogin name="password" type="password" placeholder="Senha" />

            <Button type="submit"> Entrar </Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
