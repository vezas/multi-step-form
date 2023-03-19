import { FC, Children } from 'react';
import { StyledLabel, FormFieldContainer } from './FormField.styled';

interface FormFieldProps {
  label: string;
  children: JSX.Element;
  hide?: boolean;
}

export const FormField: FC<FormFieldProps> = ({ label, children, hide }) => {
  const id = Children.only(children)?.props.id;

  return (
    <FormFieldContainer>
      <StyledLabel hide={hide} htmlFor={id}>
        {label}
      </StyledLabel>
      {children}
    </FormFieldContainer>
  );
};
