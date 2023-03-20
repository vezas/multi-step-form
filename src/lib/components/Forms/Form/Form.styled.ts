import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapElementsSmall};
`;
