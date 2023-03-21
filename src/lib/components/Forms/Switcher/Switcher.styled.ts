import styled from 'styled-components';

export const StyledSwitcher = styled.input`
  opacity: 0;
  position: absolute;

  & + label,
  & + label > span {
    font-size: 1.6rem;
    transition: color 100ms ease-in-out;
  }

  & + label {
    position: relative;
    display: flex;
    align-items: center;
    font-weight: ${({ theme }) => theme.font.weight500};
    cursor: pointer;
  }

  & + label > span {
    order: 1;
    margin-left: 1.5em;
    color: ${({ theme }) => theme.colors.coolGray};
  }

  & + label::before,
  & + label::after {
    display: block;
    content: '';
  }

  & + label::after {
    margin-left: 1.5em;
    height: 1.2em;
    aspect-ratio: 2 / 1;
    border-radius: 1em;
    background-color: ${({ theme }) => theme.colors.marineBlue};
  }

  & + label::before {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 5.5em;
    height: 0.9em;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 300ms ease-in-out;
  }

  &:checked + label::before {
    transform: translate(0.8em, -50%);
  }

  &:checked + label {
    font-weight: ${({ theme }) => theme.font.weight500};
    color: ${({ theme }) => theme.colors.coolGray};
  }

  &:checked + label > span {
    font-weight: ${({ theme }) => theme.font.weight500};
    color: ${({ theme }) => theme.colors.marineBlue};
  }
`;
