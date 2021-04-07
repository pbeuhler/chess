import { INITIAL_POSITION } from "../components/Positions";
import { PieceType } from "../pieces/BasePiece";
import {ChessPiece} from "../pieces/types"

export function isValidMove(piece: ChessPiece, isWhitesTurn: boolean, start: number, end: number, board: Array<ChessPiece|null>): boolean {
  if(piece.isWhite && !isWhitesTurn) {
    return false;
  }

  switch(piece.PieceType) {
    case PieceType.Pawn:
      return validatePawn(piece, start, end, board);
    default:
      return false;
  }
}

function validatePawn(piece: ChessPiece, start: number, end: number, board: Array<ChessPiece|null>) {
  if(piece.isWhite) {
    // basic move
    if(start - end === 8 ){
      return true;
    }
    // first move
    else if(INITIAL_POSITION[start] === board[start] && start - end === 16 ){
      return true;
    }
    // capturing
    else if((board[end] && !board[end]?.isWhite) && (start - end === 7 )) {

    }

    // Queen me

    // en passant
  }

  // repeat for black
  else {
    // basic move
    if(start - end === -8 ){
      console.log('black moves 1')
      return true;
    }
    // first move
    else if(INITIAL_POSITION[start] === board[start] && start - end === -16 ){
      console.log('black moves 2')
      return true;
    }
    // capturing
    else if((board[end] && board[end]?.isWhite) && (start - end === 7 )) {

    }

    // Queen me

    // en passant
  }
  return true;
}