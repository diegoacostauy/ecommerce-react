import React from 'react';
import { ButtonContainer } from './Button.styles';

const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props} className='btn'>
      {children}
     </ButtonContainer>
  );
};

export default Button;