import Styled, { css } from 'styled-components'
interface ContainerProps {

    isErrored?: boolean;
  }
  
export const TextArea = Styled.textarea<ContainerProps>`

    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-textarea-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;


`;