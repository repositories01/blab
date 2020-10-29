import React, { ButtonHTMLAttributes } from 'react';
import loadIcon  from '../../assets/images/icons/loading.svg'

import { Container, Load } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Load src={loadIcon}/> : children}
  </Container>
);

export default Button;