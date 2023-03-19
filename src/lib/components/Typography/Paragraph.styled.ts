import styled from 'styled-components';

interface StyledParagraphProps {
  color?: 'white' | 'gray';
  weight?: 'light' | 'bold';
  uppercase?: boolean;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${({ theme, color }) =>
    color === 'white'
      ? theme.colors.white
      : color === 'gray'
      ? theme.colors.coolGray
      : theme.colors.marineBlue};
  font-weight: ${({ theme, weight }) =>
    weight === 'light'
      ? theme.font.weight400
      : weight === 'bold'
      ? theme.font.weight700
      : theme.colors.weight500};
  font-size: 1.6rem;
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
`;
