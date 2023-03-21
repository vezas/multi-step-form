import styled from 'styled-components';
import { devices } from 'lib/styles';

export const StyledFormContent = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.layout.gapElementsLittle};
  column-gap: ${({ theme }) => theme.layout.gapElementsSmall};
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(3, min-content);

  @media ${devices.tablet} {
    grid-template-columns: max-content;
    grid-template-rows: max-content;
  }

  & + input {
    opacity: 0;
    position: absolute;
  }

  & > img {
    grid-area: 1/ 1/ -1 / span 1;
    object-fit: contain;

    @media ${devices.tablet} {
      margin-bottom: ${({ theme }) => theme.layout.gapElementsMedium};
    }
  }
`;
