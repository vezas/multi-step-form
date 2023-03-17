import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'lib/types';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 62.5%;
  font-weight: ${({ theme }) => theme.font.weight400};
  color: ${({ theme }) => theme.colors.marineBlue};
}

body {
  background-color: ${({ theme }) => theme.colors.lightBlue}
}
`;
