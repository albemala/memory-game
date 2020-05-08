import { observable } from "mobx";

export enum TileState {
    default,
    right,
    wrong,
}

class Tile {
    value: number;
    @observable isVisible: boolean;
    @observable state: TileState;

    constructor(value: number) {
        this.value = value;
        this.isVisible = false;
        this.state = TileState.default;
    }
}

export default Tile;
