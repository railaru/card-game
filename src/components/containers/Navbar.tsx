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

import { boxShadows, colors, devices } from "style/style-config";

const NavContainer = styled.div`
  background: ${colors.light};
  box-shadow: ${boxShadows.softWide};
  @media ${devices.laptop} {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;

const NavContentDesktop = styled.div`
  display: none;
  @media ${devices.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavContentMobile = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  @media ${devices.laptop} {
    height: 100%;
    display: none;
  }
`;

function Navbar() {
  const dispatch = useAppDispatch();
  const currentGameStatus = useTypedSelector(getCurrentGameStatus);
  const currentTurnCount = useTypedSelector(getCurrentTurnCount);
  const currentElapsedTime = useTypedSelector(getCurrentElapsedTime);
  const showStartButton = currentGameStatus === GAME_STATUS.NOT_STARTED;
  const showRestartButton = currentGameStatus === GAME_STATUS.FINISHED;
  const showDeckSizeButton = currentGameStatus === GAME_STATUS.NOT_STARTED;

  return (
    <NavContainer>
      <NavContentDesktop>
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
      </NavContentDesktop>
      <NavContentMobile>
        <Button onClick={() => dispatch(toggleMobileMenuModal())}>Menu</Button>
      </NavContentMobile>
    </NavContainer>
  );
}

export default Navbar;
