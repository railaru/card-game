import { Card } from "models";
import React, { useEffect, useState } from "react";
import { characterApi } from "store";
import styled from "styled-components";
import { formatCharactersToCards } from "utilities";

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
  const { data } = characterApi.useGetAllQuery();
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [isCardSelectionDisabled, setIsCardSelectionDisabled] = useState(false);

  const formattedCards = formatCharactersToCards(data?.results);

  // double the card array, sort them randomly, map and append a random id
  const shuffleCards = () => {
    const shuffledCards = [...formattedCards, ...formattedCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // one turn is 2 clicked cards, fill tate for both cards for the same turn
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //reset current turn
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
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
        setTimeout(() => resetTurns(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

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
