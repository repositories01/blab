import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
// import { useToast } from '../../hooks/toast';
// import getValidationErrors from '../../utils/getValidationErrors';
// import logoImg from '../../assets/logo.svg';
// import Button from '../../components/Button';
import Input from '../../components/Input';
import InputLogin from '../../components/InputLogin';
import { Container, Content, AnimationContainer, Background, Button } from './styles'

interface SignInFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

//   const { signIn } = useAuth();
//   const { addToast } = useToast();
//   const history = useHistory();

//   const handleSubmit = useCallback(
//     async (data: SignInFormData) => {
//       try {
//         formRef.current?.setErrors({});

//         const schema = Yup.object().shape({
//           email: Yup.string()
//             .required('Email obrigatório')
//             .email('Digite um e-mail válido'),
//           password: Yup.string().required('Senha obrigatória'),
//         });

//         await schema.validate(data, {
//           abortEarly: false,
//         });

//         await signIn({
//           email: data.email,
//           password: data.password,
//         });

//         history.push('/dashboard');
//       } catch (err) {
//         if (err instanceof Yup.ValidationError) {
//           const errors = getValidationErrors(err);

//           formRef.current?.setErrors(errors);

//           return;
//         }
//         addToast({
//           type: 'error',
//           title: 'Erro na autenticação',
//           description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
//         });
//       }
//     },
//     [signIn, addToast, history],
//   );

const handleSubmit = () => {
    console.log('')
}

  return (
    <Container>
            <Background />
      <Content>

        <AnimationContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <span>Preencha dos dados abaixo<br/> para começar.</span>
            <InputLogin name="name"  placeholder="Nome" />

            <InputLogin name="email"  placeholder="Email" />
            <InputLogin
              name="password"
              type="password"
              placeholder="Senha"
            />

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