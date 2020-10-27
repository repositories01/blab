import styled, { css } from 'styled-components';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 1px solid var(--color-line-in-white);
  background: var(--color-input-background);
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}
  ${props =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text-base);
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

  