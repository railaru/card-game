import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: papayawhip;
`;

interface Props {
  name: string;
}

function Card({ name }: Props) {
  return <CardContainer>{name}</CardContainer>;
}

export default Card;
