import React from "react";
import styled from "styled-components";

import { colors, transitions } from "style/style-config";

interface ButtonContainerProps {
  readonly isActive?: boolean;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  color: ${colors.dark};
  transition: color ${transitions.fast};
  background: ${(props) => (props.isActive ? colors.blue : "transparent")};
  color: ${(props) => (props.isActive ? colors.light : colors.dark)};
  &:hover,
  &:focus {
    color: ${colors.accent};
    transition: color ${transitions.fast};
  }
`;

interface Props {
  children: JSX.Element | string;
  onClick: () => void;
  isActive?: boolean;
}

function Button({ children, onClick, isActive }: Props) {
  return (
    <ButtonContainer isActive={isActive} onClick={() => onClick()}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
