import { BasePiece, PieceType } from "./BasePiece";
import { ChessPiece } from "./types";
import { INITIAL_POSITION } from "../components/Positions";

export class Pawn extends BasePiece {
  constructor(side: boolean) {
    super(side, "P");
    this.PieceType = PieceType.Pawn;
  }
}

export function validatePawn(
  piece: Pawn,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
) {
  // let isValid = false;
  if (validMove(piece.isWhite, start, end, board)) {
    return !detectCollision(end, board);
  } else {
    return capturePiece(piece.isWhite, start, end, board);
  }
  // Queen me

  // en passant
}

function validMove(
  isWhite: boolean,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
): boolean {
  const moveIncrement = isWhite ? 8 : -8;
  if (start - end === moveIncrement) {
    return true;
  } else if (
    board[start] === INITIAL_POSITION[start] &&
    start - end === moveIncrement * 2
  ) {
    return true;
  }
  return false;
}

function capturePiece(
  isWhite: boolean,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
): boolean {
  const target = board[end];
  const possibleTargets = isWhite ? [7, 9] : [-7, -9];
  if (
    target &&
    target.isWhite === !isWhite &&
    possibleTargets.includes(start - end)
  ) {
    return true;
  } else {
    return false;
  }
}

function detectCollision(
  end: number,
  board: Array<ChessPiece | null>
): boolean {
  return board[end] !== null;
}
