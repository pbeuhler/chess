import { BasePiece, PieceType } from "./BasePiece";

export class Pawn extends BasePiece {
  constructor(side: boolean) {
    super(side, "P");
    this.PieceType = PieceType.Pawn;
  }
}
