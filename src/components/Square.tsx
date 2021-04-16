import React from "react";
// import { BasePiece } from "../pieces/BasePiece";
import { ChessPiece } from "../pieces/types";

import "./Square.css";

export interface SquareProps {
  getSquarePosition: (position: number) => void;
  position: number;
  selected: number;
  value: ChessPiece | null;
}

const Square = ({
  getSquarePosition,
  position,
  selected,
  value,
}: SquareProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    getSquarePosition(position);
  };

  return (
    <button
      onClick={handleClick}
      className={`square ${selected === position ? "selected" : ""}`}
    >
      <div className={`square-${position}`}>{position}</div>
      <div className={value?.isWhite ? "white" : "black"}>
        {value && value.symbol}
      </div>
    </button>
  );
};

export default Square;
