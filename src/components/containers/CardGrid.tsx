import { Card } from "models";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "store";
import styled from "styled-components";
import { formatCharactersToCards, shuffleCards } from "utilities";

import { characterApi } from "store/api/characters";
import {
  GAME_STATUS,
  getCurrentElapsedTime,
  getCurrentGameStatus,
  getCurrentTurnCount,
  increaseElapsedTime,
  setElapsedTime,
  setGameStatus,
  setTurnCount,
} from "store/client/game";

import GameCard from "components/presentationals/GameCard";

import { devices } from "style/style-config";

const GridContainer = styled.div`
  padding: 40px 20px;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;

  @media ${devices.mobileXl} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  @media ${devices.desktop} {
    max-width: 1280px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`;

function CardGrid() {
  const currentGameStatus = useTypedSelector(getCurrentGameStatus);
  const currentTurnCount = useTypedSelector(getCurrentTurnCount);
  const currentEllapsedTime = useTypedSelector(getCurrentElapsedTime);
  const { data } = characterApi.useGetAllQuery();
  const [cards, setCards] = useState<Card[]>([]);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [trackTime, setTrackTime] = useState(false);
  const [isCardSelectionDisabled, setIsCardSelectionDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const formattedCards = formatCharactersToCards(data?.results);
  const cardPreviewTimeout = 1000;

  // double the card array, sort them randomly
  const startGame = () => {
    const shuffledCards = shuffleCards(formattedCards);

    setCards(shuffledCards);
    dispatch(setTurnCount(0));
    setTrackTime(true);
    dispatch(setElapsedTime(0));
  };

  // one turn is 2 clicked cards, fill tate for both cards for the same turn
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //reset current turn
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    dispatch(setTurnCount(currentTurnCount + 1));
    setIsCardSelectionDisabled(false);
  };

  useEffect(() => {
    // check if cards match

    if (choiceOne && choiceTwo) {
      setIsCardSelectionDisabled(true);

      if (choiceOne.imgSrc === choiceTwo.imgSrc) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.imgSrc === choiceOne.imgSrc) {
              // check if cards are matching using imgSrc property, if they do append matched property value
              return { ...card, isMatching: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        // show not matching turn cards briefly before flipping them back
        setTimeout(() => resetTurns(), cardPreviewTimeout);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (currentGameStatus === GAME_STATUS.PLAYING) {
      startGame();
    }
    if (currentGameStatus === GAME_STATUS.RESTARTED) {
      startGame();
    }
  }, [currentGameStatus]);

  useEffect(() => {
    let flippedCardCount = 0;

    cards.forEach((card) => {
      if (card.isMatching) {
        flippedCardCount++;
      }
    });

    if (flippedCardCount === cards.length && cards.length > 0) {
      setTimeout(() => {
        dispatch(setGameStatus(GAME_STATUS.FINISHED));
      }, cardPreviewTimeout);
    }
  }, [cards]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackTime) {
        dispatch(increaseElapsedTime(currentEllapsedTime + 1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [trackTime]);

  return (
    <GridContainer>
      {cards.map((card, index) => (
        <GameCard
          key={index}
          card={card}
          onClick={handleChoice}
          isFlipped={
            card === choiceOne || card === choiceTwo || card.isMatching
          }
          isDisabled={isCardSelectionDisabled}
        />
      ))}
    </GridContainer>
  );
}

export default CardGrid;
