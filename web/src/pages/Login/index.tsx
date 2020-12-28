import React, { useRef, useCallback } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import Button from "../../components/Button";
import InputLogin from "../../components/InputLogin";
import getValidationErrors from "../../utils/getValidationsErros";

import { Container, Content, AnimationContainer, Background } from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { signIn } = useAuth();
  const history = useHistory();

  

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("Email required")
            .email("Enter a valid email address"),
          password: Yup.string().required("Password required"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push("/give-classes");
      } catch (err) {
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
      }
    },
    [signIn, addToast, history]
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
      
        
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Fazer Login</h1>

            <InputLogin name="email" placeholder="Email" />
            <InputLogin name="password" type="password" placeholder="Senha" />

            <Button type="submit"> Entrar </Button>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignIn;
