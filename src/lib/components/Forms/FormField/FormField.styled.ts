import styled from 'styled-components';
import { devices } from 'lib/styles';

export const FormFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.layout.gapElementsLittle};
`;

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight400};
`;

export const StyledRadioLabel = styled(StyledLabel)`
  padding: ${({ theme }) => theme.layout.gapElementsSmall};
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(3, min-content);
  row-gap: ${({ theme }) => theme.layout.gapElementsLittle};
  column-gap: ${({ theme }) => theme.layout.gapElementsSmall};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.layout.radius};
  cursor: pointer;
  transition: all 100ms;

  &:has(+ input:checked),
  &:has(+ input:focus) {
    border-color: ${({ theme }) => theme.colors.purplishBlue};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.purplishBlue};
  }

  @media ${devices.tablet} {
    grid-template-columns: max-content;
    grid-template-rows: max-content;
  }

  & > img {
    grid-area: 1/ 1/ -1 / span 1;
    object-fit: contain;

    @media ${devices.tablet} {
      margin-bottom: ${({ theme }) => theme.layout.gapElementsMedium};
    }
  }

  & + input {
    position: absolute;
    opacity: 0;
  }
`;
