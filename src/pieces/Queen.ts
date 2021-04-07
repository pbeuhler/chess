import { BasePiece, PieceType } from "./BasePiece";

export class Queen extends BasePiece {
  constructor(side: boolean) {
    super(side, "Q");
    this.PieceType = PieceType.Queen;
  }
}