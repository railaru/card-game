import React from "react";
import styled from "styled-components";

import Card from "components/presentationals/Card";

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
  }

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

function CardGrid() {
  return (
    <GridContainer>
      <Card key={1} name="hey" />
      <Card key={2} name="hey" />
      <Card key={3} name="hey" />
      <Card key={4} name="hey" />
      <Card key={10} name="hey" />
      <Card key={20} name="hey" />
      <Card key={30} name="hey" />
      <Card key={40} name="hey" />
    </GridContainer>
  );
}

export default CardGrid;
