import styled from 'styled-components';
import { devices } from 'lib/styles';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapElementsMedium};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentGroup = styled(Wrapper)`
  width: 90%;
  margin-inline: auto;
  margin-top: -125px;
  padding: ${({ theme }) => theme.layout.gapElementsMedium};
  border-radius: ${({ theme }) => theme.layout.radius};

  @media ${devices.tablet} {
    margin-top: 0;
    padding-top: 5vh;
  }
`;

export const TextWrapper = styled(Wrapper)`
  gap: ${({ theme }) => theme.layout.gapElementsLittle};
`;

export const ButtonsWrapper = styled(Wrapper)`
  padding: ${({ theme }) => theme.layout.gapElementsSmall};
  flex-direction: row-reverse;
  justify-content: space-between;
  justify-items: flex-end;
  margin-top: auto;
`;

export const SwitcherWrapper = styled(Wrapper)`
  grid-area: switcher;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
`;
