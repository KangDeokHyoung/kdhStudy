import React, { useContext } from "react";
import Td from "./Td";
import { TableContext } from "./MineSearch";

const Tr = () => {
  const { tableData } = useContext(TableContext);

  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((_, i) => <Td />)}
    </tr>
  );
};

export default Tr;
