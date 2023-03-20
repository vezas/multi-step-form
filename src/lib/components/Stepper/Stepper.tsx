import { FC } from 'react';
import MobileBgc from 'assets/images/bg-sidebar-mobile.svg';
import DesktopBgc from 'assets/images/bg-sidebar-desktop.svg';
import { List, ListItem, StyledNavLink, MenuStyledParagraph } from './Stepper.styled';
import { stepperData } from './data';

export const Stepper: FC = () => {
  return (
    <List urlMobile={MobileBgc} urlDesktop={DesktopBgc}>
      {stepperData.map(({ to, description }, index) => (
        <ListItem key={to}>
          <StyledNavLink to={to}>{index + 1}</StyledNavLink>
          <MenuStyledParagraph weight='light' color='white' uppercase>
            Step {index + 1}
          </MenuStyledParagraph>
          <MenuStyledParagraph weight='bold' color='white' uppercase>
            {description}
          </MenuStyledParagraph>
        </ListItem>
      ))}
    </List>
  );
};
