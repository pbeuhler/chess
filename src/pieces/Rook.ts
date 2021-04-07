import { BasePiece, PieceType } from "./BasePiece";

export class Rook extends BasePiece {
  constructor(side: boolean) {
    super(side, "R");
    this.PieceType = PieceType.Rook;
  }
}