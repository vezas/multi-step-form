import { FC, ReactNode } from 'react';
import { StyledForm } from './Form.styled';

interface FormProps {
  children: ReactNode;
  variant?: 'radio';
}

export const Form: FC<FormProps> = ({ children, variant }) => (
  <StyledForm variant={variant}>{children}</StyledForm>
);
