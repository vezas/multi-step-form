import { FC, ChangeEventHandler } from 'react';
import { SwitcherWrapper } from 'lib/components/UI';
import { StyledCheckbox } from './Switcher.styled';

interface SwitcherProps {
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Switcher: FC<SwitcherProps> = ({ id, name, onChange }) => {
  return (
    <SwitcherWrapper as='div'>
      <StyledCheckbox type='checkbox' id={id} name={name} onChange={onChange} />
      <label htmlFor={id}>
        Monthly <span>Yearly</span>
      </label>
    </SwitcherWrapper>
  );
};
