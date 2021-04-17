import { BasePiece, PieceType } from "./BasePiece";

export class King extends BasePiece {
  constructor(side: boolean) {
    super(side, "K");
    this.PieceType = PieceType.King;
  }
}
