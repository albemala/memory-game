import * as React from "react";
import GameManager from "../logic/game-manager";
import UITile from "./tile";
import styled from "@emotion/styled";
import GameConstants from "../logic/game-constants";
import {observer} from "mobx-react";
import Tile from "../logic/tile";

const UITilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${GameConstants.columns}, 3rem);
  grid-template-rows: repeat(${GameConstants.rows}, 3rem);
  grid-gap: 0.5rem;
`;

@observer
class UIGameBoard extends React.Component {

    private gameManager: GameManager;

    constructor(props: Readonly<{}>) {
        super(props);
        this.gameManager = new GameManager();
    }

    render() {
        return !this.gameManager.victory
            ? (
                <UITilesContainer>
                    {this.gameManager.tiles.map(this.createTile)}
                </UITilesContainer>
            )
            : (
                <div>
                    <div>You win!</div>
                    <button
                        onClick={this.gameManager.startNewGame}
                    >
                        Start new game
                    </button>
                </div>
            );
    }

    private createTile = (tile: Tile) => (
        <UITile
            value={tile.value}
            isVisible={tile.isVisible}
            state={tile.state}
            onClick={() => this.gameManager.onTileClick(tile)}
        />
    );
}

export default UIGameBoard;
