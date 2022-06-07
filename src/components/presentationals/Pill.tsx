import React from "react";
import styled from "styled-components";

import { colors } from "style/style-config";

const PillContainer = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  color: ${colors.dark};
`;

interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

function Pill({ children }: Props) {
  return <PillContainer>{children}</PillContainer>;
}

export default Pill;
