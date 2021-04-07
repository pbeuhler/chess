export enum PieceType {
  Pawn = 1,
  Rook,
  Knight,
  Bishop,
  Queen,
  King
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