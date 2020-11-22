
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';


interface ContainerProps {

  isErrored?: boolean;
}

export const InputForm = styled.input<ContainerProps>`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  ${props =>
    props.isErrored &&
    css`
      border: 1.8px solid;
      border-color: #c53030;
    `}

`;

