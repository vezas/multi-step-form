import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'lib/types';

export const theme: DefaultTheme = {
  colors: {
    marineBlue: 'hsl(213, 96%, 18%)',
    purplishBlue: 'hsl(243, 100%, 62%)',
    pastelBlue: 'hsl(228, 100%, 84%)',
    lightBlue: 'hsl(206, 94%, 87%)',
    strawberryRed: 'hsl(354, 84%, 57%)',
    coolGray: 'hsl(231, 11%, 63%)',
    lightGray: 'hsl(229, 24%, 87%)',
    magnolia: 'hsl(217, 100%, 97%)',
    alabaster: 'hsl(231, 100%, 99%)',
    white: 'hsl(0, 0%, 100%)'
  },
  font: {
    family: '"Ubuntu", sans-serif',
    weight400: '400',
    weight500: '500',
    weight700: '700'
  },
  layout: {
    gapElementsLittle: '0.5rem',
    gapElementsSmall: '1.5rem',
    gapElementsMedium: '3rem',
    gapElementsBig: '5rem',
    radius: '7.5px',
    radiusCard: '15px'
  }
};

interface ThemeProps {
  children: ReactNode;
}

export const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
