import React from "react";

import "./Square.css";

export interface SquareProps {
  position: number;
  value: string;
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

  return <button onClick={handleClick}>{value}</button>;
};

export default Square;
