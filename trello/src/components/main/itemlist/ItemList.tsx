import React, { useEffect } from "react";

interface Props {
  checked: number;
  checkHandler: () => void;
}

const ItemList: React.FC<Props> = ({ checked, checkHandler }) => {
  return (
    <div className="main-content-list-box">
      <div className="main-do-list-title">
        <div>To Do 2</div>
      </div>
      <div className="main-do-list">
        <div className="list-title">
          <div>To Do</div>
          <i className="menu" />
        </div>
        <div className="list-input">오늘할일</div>
        <div className="add-Card">Add a Card</div>
        <div className="list-bottom-box">
          <div className="checkBox" onClick={checkHandler}>
            {!!checked && <div className="checkBoxOn" />}
          </div>
          <div className="day">2021-01-20</div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
