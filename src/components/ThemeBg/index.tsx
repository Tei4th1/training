import styled from "styled-components";
import { useTheme } from "../../context";

export const ThemeBg = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;
  background: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`;
