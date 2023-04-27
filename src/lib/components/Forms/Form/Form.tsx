import { forwardRef, ReactNode, BaseSyntheticEvent, FormEvent, HTMLProps } from 'react';
import { StyledForm } from './Form.styled';

interface FormProps extends HTMLProps<FormProps> {
  children: ReactNode;
  variant?: 'select-plan';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

export const Form = forwardRef<HTMLInputElement, FormProps>(function Form(
  { children, variant, onSubmit },
  ref
) {
  const submitFn = (e: FormEvent<HTMLFormElement> | FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <StyledForm onSubmit={submitFn} variant={variant} noValidate>
      {children}
      <input ref={ref} type='submit' />
    </StyledForm>
  );
});
