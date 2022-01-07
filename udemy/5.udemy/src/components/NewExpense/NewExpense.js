import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveEexpenseDataHandler = (el) => {
    const expeseData = {
      ...el,
      id: Math.random().toString(),
    };
    onAddExpense(expeseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveEexpenseDataHandler.bind(null)} />
    </div>
  );
};

export default NewExpense;
