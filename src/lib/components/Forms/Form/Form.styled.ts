import styled from 'styled-components';
import { devices } from 'lib/styles';

interface StyledFormProps {
  variant?: 'radio';
}

export const StyledForm = styled.form<StyledFormProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapElementsSmall};

  @media ${devices.tablet} {
    display: ${({ variant }) => variant === 'radio' && 'grid'};
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'card card card' 'switcher switcher switcher';
  }
`;
