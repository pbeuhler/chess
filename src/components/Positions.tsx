import React from "react";

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

let emptyArray = Array(64).fill(null);
emptyArray[0] = "R";
emptyArray[1] = "N";
emptyArray[2] = "B";
emptyArray[3] = "Q";
emptyArray[4] = "K";
emptyArray[5] = "B";
emptyArray[6] = "N";
emptyArray[7] = "R";
emptyArray[8] = "P";
emptyArray[9] = "P";
emptyArray[10] = "P";
emptyArray[11] = "P";
emptyArray[12] = "P";
emptyArray[13] = "P";
emptyArray[14] = "P";
emptyArray[15] = "P";
emptyArray[48] = "P";
emptyArray[49] = "P";
emptyArray[50] = "P";
emptyArray[51] = "P";
emptyArray[52] = "P";
emptyArray[53] = "P";
emptyArray[54] = "P";
emptyArray[55] = "P";
emptyArray[56] = "R";
emptyArray[57] = "N";
emptyArray[58] = "B";
emptyArray[59] = "Q";
emptyArray[60] = "K";
emptyArray[61] = "B";
emptyArray[62] = "N";
emptyArray[63] = "R";

export const INITIAL_POSITION = emptyArray;
