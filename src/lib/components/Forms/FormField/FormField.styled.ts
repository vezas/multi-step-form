import styled from 'styled-components';

export const FormFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.layout.gapElementsLittle};
`;

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight400};
`;

export const RectangleLabel = styled(StyledLabel)`
  padding: ${({ theme }) => theme.layout.gapElementsSmall};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.layout.radius};
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors.purplishBlue};
  }

  &:has(> input:checked) {
    border-color: ${({ theme }) => theme.colors.purplishBlue};
  }
`;
