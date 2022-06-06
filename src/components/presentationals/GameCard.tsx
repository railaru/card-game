import { Card } from "models";
import React from "react";
import styled from "styled-components";

import { boxShadows, colors, transitions } from "style/style-config";

interface Props {
  card: Card;
  onClick: (card: Card) => void;
  isFlipped: boolean;
  isDisabled: boolean;
}

const CardContainer = styled.div`
  position: relative;
  cursor: pointer;
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

interface CardFrontProps {
  readonly isFlipped: boolean;
}

const CardFront = styled.div<CardFrontProps>`
  transform: ${(props) =>
    props.isFlipped ? "rotateY(0deg)" : "rotateY(90deg)"};
  transition: all ease-in ${transitions.medium};
  position: absolute;
  transition-delay: ${(props) =>
    props.isFlipped ? transitions.medium : "0ms"};
`;

interface CardBackProps {
  readonly isFlipped: boolean;
}

const CardBack = styled.div<CardBackProps>`
  transform: ${(props) =>
    props.isFlipped ? "rotateY(90deg)" : "rotateY(0deg)"};
  transition: all ease-in ${transitions.medium};
  transition-delay: ${(props) =>
    props.isFlipped ? "0ms" : transitions.medium};
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border: 2px solid white;
  border-radius: 6px;
`;

const CardText = styled.h3`
  margin-left: 16px;
`;

function GameCardJustImage({ card, onClick, isFlipped, isDisabled }: Props) {
  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    onClick(card);
  };

  return (
    <CardContainer>
      <CardFront isFlipped={isFlipped}>
        <CardImage src={card.imgSrc} alt="Card front" />
        <CardText>{card.name}</CardText>
      </CardFront>
      <CardBack isFlipped={isFlipped}>
        <CardImage
          onClick={handleClick}
          className="back"
          src="/img/card-bg.jpeg"
          alt="Card back"
        />
      </CardBack>
    </CardContainer>
  );
}
export default GameCardJustImage;
