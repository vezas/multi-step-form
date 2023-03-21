import { FC, ReactNode } from 'react';
import { RectangleLabel, FormFieldContainer } from './FormField.styled';

interface RadioFieldProps {
  children: ReactNode;
  id: string;
  name: string;
  type: 'radio' | 'checkbox';
  variant?: 'select-plan' | 'add-ons';
}

export const RecktangleField: FC<RadioFieldProps> = ({ id, name, type, children }) => {
  return (
    <FormFieldContainer>
      <RectangleLabel htmlFor={id}>
        {children}
        <input type={type} id={id} name={name} />
      </RectangleLabel>
    </FormFieldContainer>
  );
};
