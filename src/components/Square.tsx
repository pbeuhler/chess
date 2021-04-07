import React from "react";
// import { BasePiece } from "../pieces/BasePiece";
import { ChessPiece } from "../pieces/types";

import "./Square.css";

export interface SquareProps {
  position: number;
  value: ChessPiece | null;
  getSquarePosition: (position: number) => void;
}

const Square = ({
  position,
  value,
  getSquarePosition,
}: SquareProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    getSquarePosition(position);
  };

  return (
    <button onClick={handleClick}>
      <div>{position}</div>
      {value && value.symbol}
    </button>
  );
};

export default Square;
