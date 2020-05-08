import * as React from "react";
import styled from "@emotion/styled";
import { TileState } from "../logic/tile";

const UIStyledTile = styled.button<{
    borderColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${ props => props.borderColor };
  border-radius: 3px;
  font-family: monospace;
  font-size: 21px;
  font-weight: bold;
  color: #1d526c;
  background: white;
`;

const UITile = (props: {
    value: number;
    isVisible: boolean;
    state: TileState;
    onClick: () => void;
}) => {
    const borderColor = () => {
        switch (props.state) {
            case TileState.default:
                return "#b8e5fc";
            case TileState.right:
                return "#4db8ac";
            case TileState.wrong:
                return "#ef5285";
        }
    };

    return (
        <UIStyledTile
            borderColor={ borderColor() }
            onClick={ props.onClick }
        >
            { props.isVisible
                ? props.value
                : ""
            }
        </UIStyledTile>
    );
};

export default UITile;
