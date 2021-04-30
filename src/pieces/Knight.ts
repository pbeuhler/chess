import { BasePiece, PieceType } from "./BasePiece";
import { ChessPiece } from "./types";

export class Knight extends BasePiece {
  constructor(side: boolean) {
    super(side, "N");
    this.PieceType = PieceType.Knight;
  }
}

export function validateKnight(
  piece: ChessPiece,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
) {
  let validMove = false;
  validMove = validMoveKnight(start, end);
  return validMove;
}

function validMoveKnight(start: number, end: number): boolean {
  const UP_LEFT = start - 16 - 1;
  const UP_RIGHT = start - 16 + 1;
  const RIGHT_UP = (start +2) -8;
  const RIGHT_DOWN = (start + 2) + 8;
  const DOWN_RIGHT = start + 16 + 1;
  const DOWN_LEFT = start + 16 -1;
  const LEFT_UP = start - 2 - 8;
  const LEFT_DOWN = start -2 + 8;
  const valid:number[] = [
    UP_LEFT, UP_RIGHT, RIGHT_UP, RIGHT_DOWN, DOWN_RIGHT, DOWN_LEFT, LEFT_UP, LEFT_DOWN
                 ]
  let invalid: number[] =[];
  if (start % 8 <= 1){
    invalid = [...invalid, LEFT_UP, LEFT_DOWN]
  }
  if (start % 8 >= 6){
    invalid = [...invalid, RIGHT_UP, RIGHT_DOWN]
  }
  if (start % 8 === 0) {
    invalid = [...invalid, UP_LEFT, DOWN_LEFT]
  }
      if ( start % 8 === 7) {
        invalid = [...invalid, UP_RIGHT, DOWN_RIGHT]
  }

  const validMoves = valid.filter(move => !invalid.includes(move));
  return validMoves.includes(end);
}
