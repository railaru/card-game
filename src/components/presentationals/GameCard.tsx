import { Card } from "models";
import React from "react";
import styled from "styled-components";

import { boxShadows, colors, devices, transitions } from "style/style-config";

interface Props {
  card: Card;
  onClick: (card: Card) => void;
  isFlipped: boolean;
  isDisabled: boolean;
}

interface CardContainerProps {
  readonly isFlipped: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.isFlipped ? "not-allowed" : "pointer")};
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
  width: 100%;
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
  display: none;
  @media ${devices.laptop} {
    display: block;
  }
`;

function GameCardJustImage({ card, onClick, isFlipped, isDisabled }: Props) {
  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    onClick(card);
  };

  return (
    <CardContainer isFlipped={isFlipped}>
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
