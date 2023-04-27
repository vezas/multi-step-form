import { ReactNode, FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { RectangleLabel, FormFieldContainer } from './FormField.styled';

interface RadioFieldProps {
  children: ReactNode;
  id: string;
  type: 'radio' | 'checkbox';
  register: UseFormRegisterReturn;
  value?: string;
}

export const RecktangleField: FC<RadioFieldProps> = ({ id, type, children, register, value }) => {
  return (
    <FormFieldContainer>
      <RectangleLabel htmlFor={id}>
        {children}
        <input {...register} value={value} type={type} id={id} />
      </RectangleLabel>
    </FormFieldContainer>
  );
};
