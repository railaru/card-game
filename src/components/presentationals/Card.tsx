import React from "react";
import styled from "styled-components";

import { colors, transitions } from "style/style-config";

const CardContainer = styled.div`
  cursor: pointer;
  padding: 20px;
  border-radius: 8px;
  background: ${colors.light};
  transition: ${transitions.medium};
  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: ${transitions.medium};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
`;

interface Props {
  name: string;
  imgSrc: string;
}

function Card({ name, imgSrc }: Props) {
  return (
    <CardContainer>
      <CardImage src={imgSrc} alt={name} />
      <CardTitle>{name}</CardTitle>
    </CardContainer>
  );
}

export default Card;
