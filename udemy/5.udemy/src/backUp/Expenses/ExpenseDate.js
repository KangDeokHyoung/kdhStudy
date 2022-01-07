import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  //날짜 호출을 하기위한 메서드 반드시 붙여야한다.
  //날짜 개념 nuw Date날짜로 인식한다.
  //expenseDate.toDateString()
  //여기서 숫자 2는 indexOf로 생각하면된다. 2기때문에 1월 2월 3월의 영어가 나온다. march
  //   const expenseDate = new Date(2021, 2, 28);
  const dates = props.date;
  const month = dates.toLocaleString("ko", { month: "long" });
  const day = dates.toLocaleString("ko", { day: "2-digit" });
  const years = dates.getFullYear();

  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        {/* <div>{props.date.toLocaleString("ko", { month: "long" })}</div> */}
        <div className="expense-date__years">{years}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
