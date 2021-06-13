import styled from 'styled-components';


export const Container = styled.button`
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

  &:hover {
    background:var(--color-secundary-dark)
  }
`;

export const Load  = styled.img`


`;