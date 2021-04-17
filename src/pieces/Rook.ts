import { BasePiece, PieceType } from "./BasePiece";
import { ChessPiece } from "./types";

export class Rook extends BasePiece {
  constructor(side: boolean) {
    super(side, "R");
    this.PieceType = PieceType.Rook;
  }
}

export function validateRook(
  start: number,
  end: number,
  board: Array<ChessPiece | null>
) {
  console.log("lets go detect");
  if (validMoveColumn(start, end)) {
    return !detectCollision(true, start, end, board);
  } else if (validateMoveRow(start, end)) {
    return !detectCollision(false, start, end, board);
  }
  return false;
}

function detectCollision(
  moveColumn: boolean,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
): boolean {
  let squaresInBetween: number[] = [];
  let max, min;
  [min, max] = start > end ? [end, start] : [start, end];
  // if moving in a column, increment by 8, otherwise by 1
  const incrementValue = moveColumn ? 8 : 1;
  let squareToAdd = (min += incrementValue);

  while (squareToAdd < max) {
    squaresInBetween = squaresInBetween.concat(squareToAdd);
    squareToAdd += incrementValue;
  }
  // don't forget to check the destination
  squaresInBetween = squaresInBetween.concat(end);
  console.log(squaresInBetween);
  for (let square of squaresInBetween) {
    if (board[square] !== null) {
      console.log(`collision at square ${square}`);
      return true;
    }
  }
  return false;
}

function validMoveColumn(start: number, end: number) {
  return (start - end) % 8 === 0;
}

function validateMoveRow(start: number, end: number) {
  return Math.floor(start / 8) === Math.floor(end / 8);
}
