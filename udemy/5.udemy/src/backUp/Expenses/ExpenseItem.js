import React from "react";
import "./ExpensieItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// /const ExpenseItem = ({date, title, amount}) => { 라고 써야 하는데 prop앞에 붙여서 하나로 통일 시킬수도있다.

const ExpenseItem = ({ title, date, amount }) => {
  // const [state, setState] = useState(title);
  // console.log("ddd");
  // const ClickHandler = () => {
  //   return setState("Update!!");
  // };

  // useEffect(() => {
  //   setState(title)
  // }, [title])

  // console.log({ title });

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* <button>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
