import styled from 'styled-components';
import { devices } from 'lib/styles';

export const Card = styled.main`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content;
  align-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  @media ${devices.tablet} {
    min-height: auto;
    height: 75vh;
    max-height: 600px;
    max-width: 800px;
    grid-template-columns: min-content 1fr;
    grid-template-areas: 'stepper form-part' 'stepper buttons-part';
    column-gap: ${({ theme }) => theme.layout.gapElementsMedium};
    padding: ${({ theme }) => theme.layout.gapElementsSmall};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.layout.radiusCard};
  }
`;
