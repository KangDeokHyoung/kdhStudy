import React, { useState, useEffect } from "react";
import "./Main.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// import { increment } from "../../store/slice/counterSlice";
import ItemList from "../main/itemlist/ItemList";

export interface Props {
  checked?: number;
  className?: string;
  disabled?: boolean;
  onChange?: (check: number) => void;
}

const Main: React.FC<Props> = (props) => {
  const data = useSelector((state: RootState) => state.counter.counter);
  // const dispatch = useDispatch();
  const { disabled } = props;
  const [checked, setChecked] = useState([0, 0, 0]);

  const checkHandler = (i: number) => {
    setChecked((prevState) => {
      const assign = [...prevState];
      assign[i] = !!assign[i] ? 0 : 1;
      return assign;
    });
  };

  return (
    <>
      <div id="main-content-header">
        <div className="breadcrumb-list-wrap">
          <ul className="breadcrumb">
            <li>프로젝트</li>
            <li>/</li>
            <li>{data}</li>
          </ul>
        </div>
        <h4>{data}</h4>
      </div>
      <div id="main-content-body">
        <div className="main-content-list-wrap">
          {/* {checked.map((_, i) => {
            return <ItemList checked={checked[i]} checkHandler={() => checkHandler(i)} />;
          })} */}

          <ItemList checked={checked[0]} checkHandler={() => checkHandler(0)} />
          <ItemList checked={checked[1]} checkHandler={() => checkHandler(1)} />
          <ItemList checked={checked[2]} checkHandler={() => checkHandler(2)} />
        </div>
      </div>
    </>
  );
};

export default Main;
