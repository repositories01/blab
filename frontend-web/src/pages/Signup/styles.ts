import styled, { css, keyframes } from 'styled-components';

import signInBackgrondImg from '../../assets/images/background.png';
import auth from '../../assets/images/component1.png';




interface ContainerProps {
  isAuth: boolean;

}

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
    h1 {
   
      color: var(--color-text-title);
      /* margin-bottom: 1rem; */
      padding-bottom: 1.6rem;
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
    margin-top: 0px;
    margin-bottom: 50px;
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

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Background = styled.div<ContainerProps>`
  flex: 1;
  background-size: cover;
  /* background: url(${signInBackgrondImg}) no-repeat ; */
  background: var(--color-primary)
  


  ${props =>
    props.isAuth &&
    css`
       animation: ${FadeInAnimation} 1s;
        background: url(${auth}) no-repeat center ;
        background-color: var(--color-primary);
    `}



  `;

