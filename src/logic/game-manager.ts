import GameConstants from "./game-constants";
import Tile from "./tile";

class GameManager {
    tiles: Tile[];

    constructor() {
        this.tiles = new Array(GameConstants.tilesCount);
        this.startNewGame();
    }

    startNewGame = () => {
        for (let i = 0; i < GameConstants.tilesCount; i++) {
            let value = Math.trunc(i / 2) + 1;
            this.tiles[i] = new Tile(value);
        }
        this.shuffleTiles();
    };

    onTileClick = (tile: Tile) => {
        tile.isVisible = !tile.isVisible;
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
}

export default GameManager;
