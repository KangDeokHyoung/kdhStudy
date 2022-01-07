import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p>no Expenses found.</p>;

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <div className="expenses-list">{expensesContent}</div>;
};

export default ExpensesList;
