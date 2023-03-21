import { FC, Children } from 'react';
import { StyledLabel, FormFieldContainer } from './FormField.styled';

interface FormFieldProps {
  label: string;
  children: JSX.Element;
}

export const FormField: FC<FormFieldProps> = ({ label, children }) => {
  const id = Children.only(children)?.props.id;

  return (
    <FormFieldContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {children}
    </FormFieldContainer>
  );
};
