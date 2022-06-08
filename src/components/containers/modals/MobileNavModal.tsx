import React from "react";
import { useAppDispatch, useTypedSelector } from "store";
import styled from "styled-components";

import {
  GAME_STATUS,
  getCurrentElapsedTime,
  getCurrentGameStatus,
  getCurrentTurnCount,
  setGameStatus,
} from "store/client/game";
import {
  toggleDeckSizeModalOpened,
  toggleMobileMenuModal,
  toggleScoreModal,
} from "store/client/modals";

import Button from "components/presentationals/Button";
import Pill from "components/presentationals/Pill";

import { colors } from "style/style-config";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  background: ${colors.light};
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 20px;
`;

const ModalBottom = styled.div`
  border-top: 2px solid ${colors.dark};
  padding-bottom: 15px;
  display: flex;
  flex-flow: column nowrap;
`;

function MobileMenuNavModal() {
  const dispatch = useAppDispatch();
  const currentGameStatus = useTypedSelector(getCurrentGameStatus);
  const currentTurnCount = useTypedSelector(getCurrentTurnCount);
  const currentElapsedTime = useTypedSelector(getCurrentElapsedTime);
  const showStartButton = currentGameStatus === GAME_STATUS.NOT_STARTED;
  const showRestartButton = currentGameStatus === GAME_STATUS.FINISHED;
  const showDeckSizeButton = currentGameStatus === GAME_STATUS.NOT_STARTED;

  return (
    <ModalContainer>
      <ModalTop>
        <Button onClick={() => dispatch(toggleMobileMenuModal())}>Close</Button>
      </ModalTop>
      <ModalBottom>
        {showDeckSizeButton && (
          <Button key={0} onClick={() => dispatch(toggleDeckSizeModalOpened())}>
            🃏 Deck Size
          </Button>
        )}
        {showStartButton && (
          <Button
            key={1}
            onClick={() => dispatch(setGameStatus(GAME_STATUS.PLAYING))}
          >
            ▶️ Start Game
          </Button>
        )}
        {showRestartButton && (
          <Button
            key={2}
            onClick={() => dispatch(setGameStatus(GAME_STATUS.RESTARTED))}
          >
            🔁 Restart Game
          </Button>
        )}
        <Button key={3} onClick={() => dispatch(toggleScoreModal())}>
          📊 Top Score
        </Button>
        {currentTurnCount > 0 && (
          <Pill key={4}>
            <>🖱️ Turns: {currentTurnCount}</>
          </Pill>
        )}
        {currentElapsedTime > 0 && (
          <Pill key={5}>
            <>⏱️ Elapsed seconds: {currentElapsedTime}</>
          </Pill>
        )}
      </ModalBottom>
    </ModalContainer>
  );
}

export default MobileMenuNavModal;
