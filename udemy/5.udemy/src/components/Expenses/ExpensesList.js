import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filterExpense }) => {
  if (filterExpense.length === 0) {
    return <h2 className="expenses-list__fallback">리스트를 찾을수가 없습니다.</h2>;
  }
  return (
    <ul className="expenses-list">
      {filterExpense.map((el) => (
        <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
