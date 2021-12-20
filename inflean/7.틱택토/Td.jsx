import React, { useCallback, memo, dispatch } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./TicTacToe";

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }

    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: CHANGE_TURN });
    console.log(rowIndex, cellIndex);
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
