import React from "react";
import styled from "styled-components";

import Button from "components/presentationals/Button";

import { boxShadows, colors } from "style/style-config";

const NavContainer = styled.div`
  background: ${colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: ${boxShadows.softWide};
`;

function Navbar() {
  return (
    <NavContainer>
      <Button key={1}>▶️ Start game</Button>
      <Button key={2}>📊 Top Score</Button>
    </NavContainer>
  );
}

export default Navbar;
