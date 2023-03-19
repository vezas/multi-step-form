import { FC, HTMLProps, ReactNode } from 'react';
import { StyledButton } from './Buttons.styled';

interface ButtonProps extends HTMLProps<ButtonProps> {
  variant?: 'back-btn' | 'accept-form-btn';
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, variant }, props) => (
  <StyledButton {...props} variant={variant}>
    {children}
  </StyledButton>
);
