import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.font.weight500};
  color: ${({ theme }) => theme.colors.marineBlue};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.layout.radius};
  cursor: pointer;
  transition: all 100ms;

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.purplishBlue};
  }

  &:invalid {
    border-color: ${({ theme }) => theme.colors.strawberryRed};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
