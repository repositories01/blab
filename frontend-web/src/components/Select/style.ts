import Styled, {css} from 'styled-components'


interface ContainerProps {

    isErrored?: boolean;
  }


export const SelectForm = Styled.select<ContainerProps>`

${props =>
    props.isErrored &&
    css`
      border: 1.8px solid;
      border-color: #c53030;
    `}

`;