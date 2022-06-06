import { Card } from "models";
import React from "react";
import styled from "styled-components";

import { boxShadows, colors, transitions } from "style/style-config";

const CardContainer = styled.div`
  cursor: pointer;
  padding: 20px;
  border-radius: 8px;
  background: ${colors.light};
  box-shadow: ${boxShadows.softWide};
  transition: ${transitions.medium};
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: ${boxShadows.softWideElevated};
    transition: ${transitions.medium};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardBack = styled.img`
  width: 100%;
  height: auto;
`;

const CardImageHolder = styled.div`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
`;

interface Props {
  card: Card;
  onClick: (card: Card) => void;
  isDisabled: boolean;
  isFlipped: boolean;
}

function GameCard({ card, onClick, isDisabled, isFlipped }: Props) {
  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    onClick(card);
  };

  return (
    <CardContainer>
      <CardImageHolder>
        {isFlipped ? (
          <CardImage src={card.imgSrc} alt={card.name} />
        ) : (
          <CardBack
            onClick={handleClick}
            src="/img/card-bg.jpeg"
            alt="Card back"
          />
        )}
      </CardImageHolder>
      {isFlipped && <CardTitle>{card.name}</CardTitle>}
    </CardContainer>
  );
}

export default GameCard;
