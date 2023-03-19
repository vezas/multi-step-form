import { FC } from 'react';
import { List, ListItem, StyledNavLink, MenuStyledParagraph } from './Stepper.styled';
import { stepperData } from './data';

export const Stepper: FC = () => {
  return (
    <List>
      {stepperData.map(({ to, description }, index) => (
        <ListItem key={to}>
          <StyledNavLink to={to}>{index + 1}</StyledNavLink>
          <MenuStyledParagraph weight='light' color='gray' uppercase>
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
