import React from "react";
import styled from "styled-components";

import { colors } from "style/style-config";

const LoadingIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingIndicatorText = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  color: ${colors.light};
`;

function LoadingIndicator() {
  return (
    <LoadingIndicatorContainer>
      <LoadingIndicatorText>Loading...</LoadingIndicatorText>
    </LoadingIndicatorContainer>
  );
}

export default LoadingIndicator;
