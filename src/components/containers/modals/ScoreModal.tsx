import React from "react";
import { useAppDispatch } from "store";
import styled from "styled-components";

import { toggleScoreModal } from "store/client/modals";

import Button from "components/presentationals/Button";

import { colors, devices } from "style/style-config";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${colors.light};
  padding: 20px;
  z-index: 101;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  @media ${devices.tablet} {
    width: auto;
    height: auto;
    position: relative;
    min-width: 400px;
    min-height: 300px;
  }
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  @media ${devices.tablet} {
    margin-right: 0;
  }
`;

const ModalTitle = styled.h3`
  font-size: 16px;
`;

function ScoreModal() {
  const dispatch = useAppDispatch();

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTop>
          <ModalTitle>Scoreboard</ModalTitle>
          <Button onClick={() => dispatch(toggleScoreModal())}>Close</Button>
        </ModalTop>
      </ModalContent>
    </ModalContainer>
  );
}

export default ScoreModal;
