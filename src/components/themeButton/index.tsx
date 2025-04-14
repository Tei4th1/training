import styled from "styled-components";

export const ThemeButton = styled.button`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`;
