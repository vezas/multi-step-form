import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { SwitcherWrapper } from 'lib/components/UI';
import { StyledSwitcher } from './Switcher.styled';

interface SwitcherProps {
  id: string;
  name?: string;
  uncheckedText: string;
  checkedText: string;
  register: UseFormRegisterReturn;
}

export const Switcher: FC<SwitcherProps> = ({ id, uncheckedText, checkedText, register }) => {
  return (
    <SwitcherWrapper as='div'>
      <StyledSwitcher {...register} type='checkbox' id={id} />
      <label htmlFor={id}>
        {uncheckedText} <span>{checkedText}</span>
      </label>
    </SwitcherWrapper>
  );
};
