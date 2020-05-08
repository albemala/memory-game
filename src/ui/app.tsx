import * as React from "react";
import UITitle from "./title";
import UIGameBoard from "./game-board";
import styled from "@emotion/styled";

const UIAppContainer = styled.div`
  margin: 1.5rem;
  margin-top: 3rem;
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 1rem;
`;

const UIApp = () => (
    <UIAppContainer>
        <UITitle>Memory Game</UITitle>
        <UIGameBoard/>
    </UIAppContainer>
);

export default UIApp;
