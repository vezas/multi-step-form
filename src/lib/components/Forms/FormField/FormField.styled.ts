import styled from 'styled-components';

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.layout.gapElementsLittle};
`;

interface StyledLabelProps {
  hide?: boolean;
}

export const StyledLabel = styled.label<StyledLabelProps>`
  font-size: ${({ hide }) => (hide ? '0' : '1.4rem')};
  font-weight: ${({ theme }) => theme.font.weight400};
`;
