import { PieceType } from "../pieces/BasePiece";
import { validatePawn } from "../pieces/Pawn";
import { validateRook } from "../pieces/Rook";
import { validateBishop } from "../pieces/Bishop";
import { ChessPiece } from "../pieces/types";

export function isValidMove(
  piece: ChessPiece,
  isWhitesTurn: boolean,
  start: number,
  end: number,
  board: Array<ChessPiece | null>
): boolean {
  switch (piece.PieceType) {
    case PieceType.Pawn:
      return validatePawn(piece, start, end, board);
    case PieceType.Rook:
      return validateRook(piece, start, end, board);
    case PieceType.Bishop:
      return validateBishop(piece, start, end, board);
    default:
      return true;
  }
}
