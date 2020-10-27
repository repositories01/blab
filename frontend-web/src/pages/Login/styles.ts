import styled, { keyframes } from 'styled-components';

import signInBackgrondImg from '../../assets/images/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items:flex-start;
  animation: ${apperFromLeft} 1s;
  form {
    
    margin: 70px 0;
    width: 340px;
    text-align: center;
    h1 {
   
      color: var(--color-text-title);
      margin-bottom: 1rem;
      padding-bottom: 1.6rem;
      margin-right: 160px;
      border-bottom: 1px solid var(--color-line-in-white);
    }
    a { 
      color: #f4ede8;
      display: block;
      margin-top: 4px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: #f4ede8;
      }
    }
  }
  > a {
    color: var(--color-text-base);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: var(--color-text-base);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;
  background: url(${signInBackgrondImg}) no-repeat ;
  `;

  export const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 20px;
  `;