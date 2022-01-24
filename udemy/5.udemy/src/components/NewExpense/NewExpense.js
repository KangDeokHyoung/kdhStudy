import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isLogin, setIsLogin] = React.useState(false);

  const saveEexpenseDataHandler = (el) => {
    const expeseData = {
      ...el,
      id: Math.random().toString(),
    };
    onAddExpense(expeseData);
    setIsLogin(false);
  };

  const startEdtiongHandler = () => {
    setIsLogin(true);
  };

  return (
    <div className="new-expense">
      {isLogin ? (
        <ExpenseForm
          setIsLogin={setIsLogin}
          onSaveExpenseData={saveEexpenseDataHandler.bind(null)}
        />
      ) : (
        <button onClick={startEdtiongHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
