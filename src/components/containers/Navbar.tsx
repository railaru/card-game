import React from "react";
import styled from "styled-components";

import Button from "components/presentationals/Button";

import { colors } from "style/style-config";

const NavContainer = styled.div`
  background: ${colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Navbar() {
  return (
    <NavContainer>
      <Button>Start game</Button>
    </NavContainer>
  );
}

export default Navbar;
