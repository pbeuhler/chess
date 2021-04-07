import { PieceType } from "./BasePiece";

export interface ChessPiece {
  symbol: string;
  isWhite: boolean;
  PieceType: PieceType;
}
