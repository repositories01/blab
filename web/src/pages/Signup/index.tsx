import React, { useRef, useState, useCallback } from "react";
import { FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import getValidationErrors from "../../utils/getValidationsErros";

import InputLogin from "../../components/InputLogin";
import Button from "../../components/Button";

import { Container, Content, AnimationContainer, Background } from "./styles";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Name required"),
          email: Yup.string()
            .required("Email required")
            .email("Enter a valid email address"),
          password: Yup.string().min(6, "At least 6 digits"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await api.post("/signup", data);
        await signUp({
          name: data.name,
          email: data.email,
          password: data.password,
        });

        // setIsAuth(true);
        history.push("/give-classes");
        addToast({
          type: "success",
          title: "Registration completed!",
          description: "You can now login!",
        });
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: "error",
          title: "Registration error",
          description: "An error occurred while registering, please try again.",
        });
      } finally {
        setLoading(false);
      }
    },
    [history]
  );

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

            <Button loading={loading} type="submit">
              {" "}
              Cadastrar{" "}
            </Button>
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
