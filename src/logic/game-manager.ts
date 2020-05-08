import GameConstants from "./game-constants";
import Tile, { TileState } from "./tile";
import { observable } from "mobx";

class GameManager {

    tiles: Tile[];
    selectedTiles: Tile[];
    @observable victory: boolean;

    private canClick: boolean;

    constructor() {
        this.tiles = new Array(GameConstants.tilesCount);
        this.selectedTiles = [];
        this.victory = false;
        this.canClick = true;
        this.startNewGame();
    }

    startNewGame = () => {
        this.victory = false;
        for (let i = 0; i < GameConstants.tilesCount; i++) {
            let value = Math.trunc(i / 2) + 1;
            this.tiles[i] = new Tile(value);
        }
        this.shuffleTiles();
    };

    onTileClick = (tile: Tile) => {
        if (!this.canClick) { return; }
        if (tile.state == TileState.right) { return; } // ignore clicks when tile already matched
        if (tile == this.selectedTiles[0] || tile == this.selectedTiles[1]) { return; } // you can't click the same tile twice
        tile.isVisible = true;
        if (this.selectedTiles.length === 0) {
            this.selectedTiles.push(tile);
        } else if (this.selectedTiles.length === 1) {
            this.selectedTiles.push(tile);
            if (this.selectedTiles[0].value === this.selectedTiles[1].value) { // tiles match
                this.selectedTiles[0].state = TileState.right;
                this.selectedTiles[1].state = TileState.right;
                this.selectedTiles.length = 0;
                this.checkVictory();
            } else { // tiles don't match
                this.selectedTiles[0].state = TileState.wrong;
                this.selectedTiles[1].state = TileState.wrong;
                this.canClick = false;
                setTimeout(this.resetSelectedTiles, 1000);
            }
        }
    };

    private shuffleTiles = () => {
        let currentIndex = this.tiles.length;
        while (currentIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            const temp = this.tiles[currentIndex];
            this.tiles[currentIndex] = this.tiles[randomIndex];
            this.tiles[randomIndex] = temp;
        }
    };

    private resetSelectedTiles = () => {
        this.selectedTiles[0].state = TileState.default;
        this.selectedTiles[0].isVisible = false;
        this.selectedTiles[1].state = TileState.default;
        this.selectedTiles[1].isVisible = false;
        this.selectedTiles.length = 0;
        this.canClick = true;
    };

    private checkVictory = () => {
        this.victory = this.tiles.every(tile => tile.state === TileState.right);
    };
}

export default GameManager;
