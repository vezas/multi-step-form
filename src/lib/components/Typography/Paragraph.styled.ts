import styled from 'styled-components';

interface StyledParagraphProps {
  size?: 'small';
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
  font-size: ${({ size }) => (size === 'small' ? '1.4rem' : '1.6rem')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
`;
