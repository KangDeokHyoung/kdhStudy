import React from "react";
import Tr from "./Tr";

const Table = ({ tableData, dispatch, onClick }) => {
  console.log(tableData);
  console.log(Array(tableData.length));

  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((_, i) => (
          <Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ))}
    </table>
  );
};

export default Table;
