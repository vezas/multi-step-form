import styled from 'styled-components';
import { devices } from 'lib/styles';

export const Card = styled.main`
  min-height: 100vh;
  overflow-y: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content;
  gap: ${({ theme }) => theme.layout.gapElementsLittle};
  align-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  @media ${devices.tablet} {
    min-height: 520px;
    height: 75vh;
    max-height: 600px;
    max-width: 800px;
    grid-template-columns: min-content 1fr;
    grid-template-areas: 'stepper form-part' 'stepper buttons-part';
    row-gap: 0;
    column-gap: ${({ theme }) => theme.layout.gapElementsSmall};
    padding: ${({ theme }) => theme.layout.gapElementsSmall};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.layout.radiusCard};
  }
`;
