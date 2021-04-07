import { Bishop } from "../pieces/Bishop";
import { King } from "../pieces/King";
import { Knight } from "../pieces/Knight";
import { Pawn } from "../pieces/Pawn";
import { Queen } from "../pieces/Queen";
import { Rook } from "../pieces/Rook";
import { ChessPiece } from "../pieces/types";

const CHESS_MAPPING = [
  "a8",
  "b8",
  "c8",
  "d8",
  "e8",
  "f8",
  "g8",
  "h8",
  "a7",
  "b7",
  "c7",
  "d7",
  "e7",
  "f7",
  "g7",
  "h7",
  "a6",
  "b6",
  "c6",
  "d6",
  "e6",
  "f6",
  "g6",
  "h6",
  "a5",
  "b5",
  "c5",
  "d5",
  "e5",
  "f5",
  "g5",
  "h5",
  "a4",
  "b4",
  "c4",
  "d4",
  "e4",
  "f4",
  "g4",
  "h4",
  "a3",
  "b3",
  "c3",
  "d3",
  "e3",
  "f3",
  "g3",
  "h3",
  "a2",
  "b2",
  "c2",
  "d2",
  "e2",
  "f2",
  "g2",
  "h2",
  "a1",
  "b1",
  "c1",
  "d1",
  "e1",
  "f1",
  "g1",
  "h1",
];

interface Position {
  row: string;
  column: string;
  piece: string;
}

let emptyArray = Array<ChessPiece | null>(64).fill(null);
emptyArray[0] = new Rook(false);
emptyArray[1] = new Knight(false);
emptyArray[2] = new Bishop(false);
emptyArray[3] = new Queen(false);
emptyArray[4] = new King(false);
emptyArray[5] = new Bishop(false);
emptyArray[6] = new Knight(false);
emptyArray[7] = new Rook(false);
emptyArray[8] = new Pawn(false);
emptyArray[9] = new Pawn(false);
emptyArray[10] = new Pawn(false);
emptyArray[11] = new Pawn(false);
emptyArray[12] = new Pawn(false);
emptyArray[13] = new Pawn(false);
emptyArray[14] = new Pawn(false);
emptyArray[15] = new Pawn(false);
emptyArray[48] = new Pawn(true);
emptyArray[49] = new Pawn(true);
emptyArray[50] = new Pawn(true);
emptyArray[51] = new Pawn(true);
emptyArray[52] = new Pawn(true);
emptyArray[53] = new Pawn(true);
emptyArray[54] = new Pawn(true);
emptyArray[55] = new Pawn(true);
emptyArray[56] = new Rook(true);
emptyArray[57] = new Knight(true);
emptyArray[58] = new Bishop(true);
emptyArray[59] = new Queen(true);
emptyArray[60] = new King(true);
emptyArray[61] = new Bishop(true);
emptyArray[62] = new Knight(true);
emptyArray[63] = new Rook(true);

export const INITIAL_POSITION = emptyArray;
