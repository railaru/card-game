import React from "react";
import { useAppDispatch } from "store";
import styled from "styled-components";

import { GAME_STATUS, setGameStatus } from "store/client/game";
import { toggleScoreModal } from "store/client/modals";

import Button from "components/presentationals/Button";

import { colors, transitions } from "style/style-config";

const GameFinishScreenContainer = styled.div`
  height: calc(100vh - 68px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameFinishScreenContent = styled.div`
  padding: 20px;
`;

const GameFinishScreenContentBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameFinishScreenTitle = styled.h3`
  font-size: 30px;
  text-align: center;
`;

function GameFinishScreen() {
  const dispatch = useAppDispatch();

  return (
    <GameFinishScreenContainer>
      <GameFinishScreenContent>
        <GameFinishScreenTitle>
          Congratulations for finishing the game! 🎉🎉🎉
        </GameFinishScreenTitle>
        <GameFinishScreenContentBottom>
          <Button
            key={1}
            onClick={() => dispatch(setGameStatus(GAME_STATUS.RESTARTED))}
          >
            🔁 Restart Game
          </Button>

          <Button key={2} onClick={() => dispatch(toggleScoreModal())}>
            📊 Top Score
          </Button>
        </GameFinishScreenContentBottom>
      </GameFinishScreenContent>
    </GameFinishScreenContainer>
  );
}

export default GameFinishScreen;
