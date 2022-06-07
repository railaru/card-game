import React from "react";
import { useAppDispatch, useTypedSelector } from "store";
import styled from "styled-components";

import {
  GAME_STATUS,
  getCurrentGameStatus,
  setGameStatus,
} from "store/client/game";
import { toggleScoreModal } from "store/client/modals";

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
  const dispatch = useAppDispatch();
  const currentGameStatus = useTypedSelector(getCurrentGameStatus);
  const showStartButton = currentGameStatus === GAME_STATUS.NOT_STARTED;
  const showRestartButton = currentGameStatus === GAME_STATUS.FINISHED;

  return (
    <NavContainer>
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
    </NavContainer>
  );
}

export default Navbar;
