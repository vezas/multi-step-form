import styled from 'styled-components';

export const StyledFormContent = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.layout.gapElementsLittle};
  column-gap: ${({ theme }) => theme.layout.gapElementsLittle};
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: repeat(2, min-content);
  grid-template-areas: 'checkbox label price' 'checkbox description price';
  justify-content: center;
  align-items: center;

  & + input {
    opacity: 0;
    position: absolute;
  }

  &:before {
    grid-area: checkbox;
    display: block;
    content: '';
    width: 2rem;
    aspect-ratio: 1;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.layout.radius};
    color: ${({ theme }) => theme.colors.white};
    transition: all 100ms ease-in-out;
  }
  &:after {
    grid-area: checkbox;
    display: block;
    z-index: 1;
    content: '';
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.colors.white};
    transition: all 100ms ease-in-out;
  }

  & > span:nth-of-type(1) {
    grid-area: label;
  }
  & > span:nth-of-type(2) {
    grid-area: description;
  }
  & > span:nth-of-type(2) {
    grid-area: price;
  }

  &:has(+ input:checked)::before {
    background-color: ${({ theme }) => theme.colors.purplishBlue};
  }

  &:has(+ input:checked)::after {
    content: '\\2713';
  }
`;
