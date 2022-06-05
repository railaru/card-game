import React from "react";
import { characterApi } from "store";
import styled from "styled-components";

import Card from "components/presentationals/Card";
import LoadingIndicator from "components/presentationals/LoadingIndicator";

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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`;

function CardGrid() {
  const { data, isLoading } = characterApi.useGetAllQuery();

  if (isLoading) return <LoadingIndicator />;

  if (data) {
    return (
      <GridContainer>
        {data.results.map((result) => (
          <Card key={result.id} name={result.name} imgSrc={result.image} />
        ))}
      </GridContainer>
    );
  }

  return null;
}

export default CardGrid;
