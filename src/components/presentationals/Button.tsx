import React from "react";
import styled from "styled-components";

import { colors, transitions } from "style/style-config";

const ButtonContainer = styled.button`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  color: ${colors.dark};
  transition: color ${transitions.fast};
  &:hover,
  &:focus {
    color: ${colors.accent};
    transition: color ${transitions.fast};
  }
`;

interface Props {
  children: JSX.Element | string;
}

function Button({ children }: Props) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
