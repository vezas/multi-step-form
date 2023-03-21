import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledParagraph } from 'lib/components/Typography';
import { devices } from 'lib/styles';

interface ListProps {
  urlMobile: string;
  urlDesktop: string;
}

export const List = styled.ol<ListProps>`
  height: 200px;
  padding-top: 5vh;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.layout.gapElementsSmall};
  background-image: url(${({ urlMobile }) => urlMobile});
  background-repeat: no-repeat;
  background-size: cover;
  list-style: none;

  @media ${devices.tablet} {
    height: 100%;
    width: 250px;
    padding-inline: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.layout.gapElementsMedium};
    background-image: url(${({ urlDesktop }) => urlDesktop});
    background-position: left bottom;
    border-radius: ${({ theme }) => theme.layout.radiusCard};
    grid-area: stepper;
  }
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  column-gap: ${({ theme }) => theme.layout.gapElementsSmall};
`;

export const StyledNavLink = styled(NavLink)`
  width: 3.5rem;
  aspect-ratio: 1;
  grid-area: 1 / 1 / -1 / span 1;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight500};
  transition: all 100ms;

  &:focus-visible {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.marineBlue};
    color: ${({ theme }) => theme.colors.marineBlue};
  }

  &.active {
    color: ${({ theme }) => theme.colors.marineBlue};
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const MenuStyledParagraph = styled(StyledParagraph)`
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
`;
