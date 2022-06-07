import React from "react";
import { useAppDispatch, useTypedSelector } from "store";
import styled from "styled-components";

import { DECK_SIZE, getCurrentDeckSize, setDeckSize } from "store/client/game";
import { toggleDeckSizeModalOpened } from "store/client/modals";

import Button from "components/presentationals/Button";

import { colors, devices } from "style/style-config";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 101;
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
  z-index: 102;
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
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalBottom = styled.div`
  overflow-y: scroll;
  padding-bottom: 15px;
  @media ${devices.tablet} {
    height: 200px;
  }
`;

const ModalTitle = styled.h3`
  font-size: 16px;
`;

const ModalText = styled.p`
  margin-top: 10px;
  padding: 20px;
`;

const ModalControls = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ScoreModal() {
  const dispatch = useAppDispatch();
  const currentDeckSize = useTypedSelector(getCurrentDeckSize);

  console.log(currentDeckSize);

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTop>
          <ModalTitle>🃏 Choose the deck size</ModalTitle>
          <Button onClick={() => dispatch(toggleDeckSizeModalOpened())}>
            Close
          </Button>
        </ModalTop>
        <ModalBottom>
          <ModalText>
            Pick with how many cards you want to play with. The larger the
            amount the harder the game will be.
          </ModalText>
          <ModalControls>
            <Button
              onClick={() => dispatch(setDeckSize(DECK_SIZE.TWENTY_FOUR))}
              isActive={currentDeckSize === DECK_SIZE.TWENTY_FOUR}
            >
              24 cards
            </Button>
            <Button
              onClick={() => dispatch(setDeckSize(DECK_SIZE.EIGHT))}
              isActive={currentDeckSize === DECK_SIZE.EIGHT}
            >
              8 cards
            </Button>
            <Button
              onClick={() => dispatch(setDeckSize(DECK_SIZE.FOUR))}
              isActive={currentDeckSize === DECK_SIZE.FOUR}
            >
              4 cards
            </Button>
          </ModalControls>
        </ModalBottom>
      </ModalContent>
    </ModalContainer>
  );
}

export default ScoreModal;
