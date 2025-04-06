import styled from "styled-components";

interface ButtonProps {
  bgcolor?: string;
  onClick?: () => void;
  children?: React.ReactNode; 
}

export const ButtonClick = styled.button<ButtonProps>`
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) => props.bgcolor || "white"};
  padding: 8px 16px;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
