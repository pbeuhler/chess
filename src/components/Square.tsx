import React from "react";

export interface SquareProps {
  position: string;
}

const Square = ({ position }: SquareProps): JSX.Element => {
  return <div className="square"></div>;
};

export default Square;
