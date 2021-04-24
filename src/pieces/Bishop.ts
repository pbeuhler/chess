import { BasePiece, capturePiece, PieceType } from "./BasePiece";
import { ChessPiece } from "./types";

export class Bishop extends BasePiece {
  constructor(side: boolean) {
    super(side, "B");
    this.PieceType = PieceType.Bishop;
  }
}

export function validateBishop(
  piece: ChessPiece,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
) {
  let moveIsValid = false;
  if (validMove(start, end)) {
    moveIsValid = !detectCollision(start, end, board);
  }
  if (moveIsValid && board[end]) {
    moveIsValid = capturePiece(piece, end, board);
  }
  return moveIsValid;
}

function detectCollision(
  start: number,
  end: number,
  board: Array<ChessPiece | null>
): boolean {
  let squaresInBetween: number[] = [];
  let min, max;
  [min, max] = start > end ? [end, start] : [start, end];
  const incrementValue = (max - min) % 7 === 0 ? 7 : 9;
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

function validMove(start: number, end: number): boolean {
  const difference = start - end;
  return difference % 7 === 0 || difference % 9 === 0;
}
