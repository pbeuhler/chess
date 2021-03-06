import React, { useState } from "react";

import "./Board.css";
import { INITIAL_POSITION } from "./Positions";
import Square from "./Square";
import { isValidMove } from "../controller/moveController";
import { ChessPiece } from "../pieces/types";

function Board() {
  const [getBoardPositions, setBoardPositions] = useState(INITIAL_POSITION);
  const [getIsWhitesTurn, setIsWhitesTurn] = useState(true);
  const [getIsFirstClick, setIsFirstClick] = useState(true);
  const [getFirstPosition, setFirstPosition] = useState(-1);
  const [
    getFirstPositionValue,
    setFirstPositionValue,
  ] = useState<ChessPiece | null>(null);

  const validateMove = (
    piece: ChessPiece,
    start: number,
    end: number,
    board: Array<ChessPiece | null>
  ): boolean => {
    return isValidMove(piece, getIsWhitesTurn, start, end, board);
  };

  const movePiece = (position: number): void => {
    const positions = getBoardPositions.slice();
    // if this is the first click, store the necessary info
    if (getIsFirstClick && positions[position] !== null) {
      // store the starting point for the move
      setFirstPosition(position);
      // easy access to the piece being moved for second click
      setFirstPositionValue(positions[position]);
      setIsFirstClick(!getIsFirstClick);
    }
    // if this is the second click, and move valid, update board
    else if (
      !getIsFirstClick &&
      getFirstPositionValue &&
      position !== getFirstPosition &&
      validateMove(
        getFirstPositionValue,
        getFirstPosition,
        position,
        getBoardPositions
      )
    ) {
      setFirstPosition(-1);
      positions[position] = getFirstPositionValue;
      positions[getFirstPosition] = null;
      setBoardPositions(positions);
      setIsFirstClick(!getIsFirstClick);
    } else {
      setFirstPosition(-1);
      setFirstPositionValue(null);
      setIsFirstClick(true);
    }
    // setIsWhitesTurn(!getIsWhitesTurn);
  };

  return (
    <div className="board">
      <div className="column">
        <div className="row">
          <Square
            position={0}
            value={getBoardPositions[0]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={8}
            value={getBoardPositions[8]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={16}
            value={getBoardPositions[16]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={24}
            value={getBoardPositions[24]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={32}
            value={getBoardPositions[32]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={40}
            value={getBoardPositions[40]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={48}
            value={getBoardPositions[48]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={56}
            value={getBoardPositions[56]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square
            position={1}
            value={getBoardPositions[1]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={9}
            value={getBoardPositions[9]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={17}
            value={getBoardPositions[17]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={25}
            value={getBoardPositions[25]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={33}
            value={getBoardPositions[33]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={41}
            value={getBoardPositions[41]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={49}
            value={getBoardPositions[49]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={57}
            value={getBoardPositions[57]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square
            position={2}
            value={getBoardPositions[2]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={10}
            value={getBoardPositions[10]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={18}
            value={getBoardPositions[18]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={26}
            value={getBoardPositions[26]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={34}
            value={getBoardPositions[34]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={42}
            value={getBoardPositions[42]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={50}
            value={getBoardPositions[50]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={58}
            value={getBoardPositions[58]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square
            position={3}
            value={getBoardPositions[3]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={11}
            value={getBoardPositions[11]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={19}
            value={getBoardPositions[19]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={27}
            value={getBoardPositions[27]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={35}
            value={getBoardPositions[35]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={43}
            value={getBoardPositions[43]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={51}
            value={getBoardPositions[51]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={59}
            value={getBoardPositions[59]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square
            position={4}
            value={getBoardPositions[4]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={12}
            value={getBoardPositions[12]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={20}
            value={getBoardPositions[20]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={28}
            value={getBoardPositions[28]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={36}
            value={getBoardPositions[36]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={44}
            value={getBoardPositions[44]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={52}
            value={getBoardPositions[52]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={60}
            value={getBoardPositions[60]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square
            position={5}
            value={getBoardPositions[5]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={13}
            value={getBoardPositions[13]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={21}
            value={getBoardPositions[21]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={29}
            value={getBoardPositions[29]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={37}
            value={getBoardPositions[37]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={45}
            value={getBoardPositions[45]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={53}
            value={getBoardPositions[53]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={61}
            value={getBoardPositions[61]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square
            position={6}
            value={getBoardPositions[6]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={14}
            value={getBoardPositions[14]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={22}
            value={getBoardPositions[22]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={30}
            value={getBoardPositions[30]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={38}
            value={getBoardPositions[38]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={46}
            value={getBoardPositions[46]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={54}
            value={getBoardPositions[54]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={62}
            value={getBoardPositions[62]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square
            position={7}
            value={getBoardPositions[7]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={15}
            value={getBoardPositions[15]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={23}
            value={getBoardPositions[23]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={31}
            value={getBoardPositions[31]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={39}
            value={getBoardPositions[39]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={47}
            value={getBoardPositions[47]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={55}
            value={getBoardPositions[55]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
        <div className="row">
          <Square
            position={63}
            value={getBoardPositions[63]}
            getSquarePosition={movePiece}
            selected={getFirstPosition}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
