import { BasePiece, PieceType } from "./BasePiece";

export class Knight extends BasePiece {
  constructor(side: boolean) {
    super(side, "N");
    this.PieceType = PieceType.Knight;
  }
}