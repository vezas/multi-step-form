import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'back-btn' | 'accept-form-btn';
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 1.25rem 1.75rem;
  font-size: ${({ variant }) => (variant === 'back-btn' ? '1.4rem' : '1.6rem')};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.font.weight500};
  color: ${({ theme, variant }) =>
    variant === 'back-btn' ? theme.colors.coolGray : theme.colors.white};
  background-color: ${({ theme, variant }) =>
    variant === 'back-btn'
      ? 'transparent'
      : variant === 'accept-form-btn'
      ? theme.colors.purplishBlue
      : theme.colors.marineBlue};
  border: none;
  border-radius: ${({ theme }) => theme.layout.radius};
  cursor: pointer;
  transition: all 100ms;

  &:hover,
  &:active {
    background-color: ${({ theme, variant }) =>
      variant === 'back-btn'
        ? 'transparent'
        : variant === 'accept-form-btn'
        ? theme.colors.pastelBlue
        : theme.colors.purplishBlue};
  }

  &:focus-visible {
    outline: transparent;
    background-color: ${({ theme, variant }) =>
      variant === 'back-btn'
        ? theme.colors.pastelBlue
        : variant === 'accept-form-btn'
        ? theme.colors.pastelBlue
        : theme.colors.purplishBlue};
  }
`;
