import { ChessPiece } from "./types";
export enum PieceType {
  Pawn = 1,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
}

export class BasePiece {
  public isWhite: boolean;
  public symbol: string;
  public PieceType: PieceType;

  constructor(isWhite: boolean, symbol: string) {
    this.isWhite = isWhite;
    this.symbol = symbol;
    this.PieceType = PieceType.Pawn;
  }
}

export function capturePiece(
  piece: ChessPiece,
  end: number,
  board: Array<ChessPiece | null>
): boolean {
  const target = board[end];
  if (target && target.isWhite === !piece.isWhite) {
    return true;
  } else {
    return false;
  }
}
