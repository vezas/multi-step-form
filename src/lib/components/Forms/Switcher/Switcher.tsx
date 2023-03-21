import { FC, ChangeEventHandler } from 'react';
import { SwitcherWrapper } from 'lib/components/UI';
import { StyledSwitcher } from './Switcher.styled';

interface SwitcherProps {
  id: string;
  name: string;
  uncheckedText: string;
  checkedText: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Switcher: FC<SwitcherProps> = ({ id, name, onChange, uncheckedText, checkedText }) => {
  return (
    <SwitcherWrapper as='div'>
      <StyledSwitcher type='checkbox' id={id} name={name} onChange={onChange} />
      <label htmlFor={id}>
        {uncheckedText} <span>{checkedText}</span>
      </label>
    </SwitcherWrapper>
  );
};
