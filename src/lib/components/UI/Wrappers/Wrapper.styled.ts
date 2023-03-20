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
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.layout.gapElementsSmall};
  border-radius: ${({ theme }) => theme.layout.radius};

  @media ${devices.tablet} {
    position: relative;
    inset: unset;
    transform: unset;
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
`;
