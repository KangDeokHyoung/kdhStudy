import React, { useEffect, useReducer, useCallback } from "react";
import Table from "./Table";

const initalState = {
  winner: "",
  turn: "o",
  tableData: [
    ["", "", ""],
    ["", "o", ""],
    ["", "", ""],
  ],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      //state.winner = action.winner; 이렇게 직접 state를 바꾸면 안된다.
      return {
        ...state, //스프레드 새로운 객체를 만들어서 바뀐값만 바꿔주어야 한다.
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;

      return {
        ...state,
        tableData,
      };
    }

    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "o" ? "x" : "o",
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "o" });
  }, []);

  useEffect(() => {}, [state.tableData]);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
