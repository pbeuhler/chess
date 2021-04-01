import React from "react";

import "./Board.css";
import Square from "./Square";

function Board() {
  return (
    <div className="board">
      <div className="column">
        <div className="row">
          <Square position={"a8"} />
        </div>
        <div className="row">
          <Square position={"a8"} />
        </div>
        <div className="row">
          <Square position={"b8"} />
        </div>
        <div className="row">
          <Square position={"d8"} />
        </div>
        <div className="row">
          <Square position={"e8"} />
        </div>
        <div className="row">
          <Square position={"f8"} />
        </div>
        <div className="row">
          <Square position={"g8"} />
        </div>
        <div className="row">
          <Square position={"h8"} />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square position={"a7"} />
        </div>
        <div className="row">
          <Square position={"b7"} />
        </div>
        <div className="row">
          <Square position={"c7"} />
        </div>
        <div className="row">
          <Square position={"d7"} />
        </div>
        <div className="row">
          <Square position={"e7"} />
        </div>
        <div className="row">
          <Square position={"f7"} />
        </div>
        <div className="row">
          <Square position={"g7"} />
        </div>
        <div className="row">
          <Square position={"h7"} />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square position={"a6"} />
        </div>
        <div className="row">
          <Square position={"b6"} />
        </div>
        <div className="row">
          <Square position={"c6"} />
        </div>
        <div className="row">
          <Square position={"d6"} />
        </div>
        <div className="row">
          <Square position={"e6"} />
        </div>
        <div className="row">
          <Square position={"f6"} />
        </div>
        <div className="row">
          <Square position={"g6"} />
        </div>
        <div className="row">
          <Square position={"h6"} />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square position={"a5"} />
        </div>
        <div className="row">
          <Square position={"b5"} />
        </div>
        <div className="row">
          <Square position={"c5"} />
        </div>
        <div className="row">
          <Square position={"d5"} />
        </div>
        <div className="row">
          <Square position={"e5"} />
        </div>
        <div className="row">
          <Square position={"f5"} />
        </div>
        <div className="row">
          <Square position={"g5"} />
        </div>
        <div className="row">
          <Square position={"h5"} />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square position={"a4"} />
        </div>
        <div className="row">
          <Square position={"b4"} />
        </div>
        <div className="row">
          <Square position={"c4"} />
        </div>
        <div className="row">
          <Square position={"d4"} />
        </div>
        <div className="row">
          <Square position={"e4"} />
        </div>
        <div className="row">
          <Square position={"f4"} />
        </div>
        <div className="row">
          <Square position={"g4"} />
        </div>
        <div className="row">
          <Square position={"h4"} />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square position={"a3"} />
        </div>
        <div className="row">
          <Square position={"b3"} />
        </div>
        <div className="row">
          <Square position={"c3"} />
        </div>
        <div className="row">
          <Square position={"d3"} />
        </div>
        <div className="row">
          <Square position={"e3"} />
        </div>
        <div className="row">
          <Square position={"f3"} />
        </div>
        <div className="row">
          <Square position={"g3"} />
        </div>
        <div className="row">
          <Square position={"h3"} />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square position={"a2"} />
        </div>
        <div className="row">
          <Square position={"b2"} />
        </div>
        <div className="row">
          <Square position={"c2"} />
        </div>
        <div className="row">
          <Square position={"d2"} />
        </div>
        <div className="row">
          <Square position={"e2"} />
        </div>
        <div className="row">
          <Square position={"f2"} />
        </div>
        <div className="row">
          <Square position={"g2"} />
        </div>
        <div className="row">
          <Square position={"h2"} />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Square position={"a1"} />
        </div>
        <div className="row">
          <Square position={"b1"} />
        </div>
        <div className="row">
          <Square position={"c1"} />
        </div>
        <div className="row">
          <Square position={"d1"} />
        </div>
        <div className="row">
          <Square position={"e1"} />
        </div>
        <div className="row">
          <Square position={"f1"} />
        </div>
        <div className="row">
          <Square position={"g1"} />
        </div>
        <div className="row">
          <Square position={"h1"} />
        </div>
      </div>
    </div>
  );
}

export default Board;
