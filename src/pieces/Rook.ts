import { BasePiece, capturePiece, PieceType } from "./BasePiece";
import { ChessPiece } from "./types";

export class Rook extends BasePiece {
  constructor(side: boolean) {
    super(side, "R");
    this.PieceType = PieceType.Rook;
  }
}

export function validateRook(
  piece: ChessPiece,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
) {
  let validMove = false;
  if (validMoveColumn(start, end)) {
    validMove = !detectCollision(true, start, end, board);
  } else if (validateMoveRow(start, end)) {
    validMove = !detectCollision(false, start, end, board);
  }
  if (validMove && board[end]) {
    validMove = capturePiece(piece, end, board);
  }
  return validMove;
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
  let squareToAdd = min + incrementValue;

  while (squareToAdd < max) {
    squaresInBetween = [...squaresInBetween, squareToAdd];
    squareToAdd += incrementValue;
  }
  console.log(squaresInBetween);
  for (let square of squaresInBetween) {
    if (board[square] !== null) {
      console.log(`collision at square ${square}`);
      return true;
    }
  }
  return false;
}

function validMoveColumn(start: number, end: number): boolean {
  return (start - end) % 8 === 0;
}

function validateMoveRow(start: number, end: number): boolean {
  return Math.floor(start / 8) === Math.floor(end / 8);
}
