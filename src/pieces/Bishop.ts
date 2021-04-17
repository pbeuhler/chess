import { BasePiece, PieceType } from "./BasePiece";

export class Bishop extends BasePiece {
  constructor(side: boolean) {
    super(side, "B");
    this.PieceType = PieceType.Bishop;
  }
}
