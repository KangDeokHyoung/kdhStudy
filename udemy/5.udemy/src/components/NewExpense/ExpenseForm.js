import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, setIsLogin }) => {
  // const [enterdTitle, setEnterdTitle] = useState();
  // const [enterdAmout, setEnterdAmout] = useState();
  // const [enterddate, setEnterddate] = useState();
  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmout: "",
    enterdDate: "",
  });

  const titleChangeHandler = (e) => {
    // setUserInput({ ...userInput, enterdTitle: e.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enterdTitle: e.target.value };
    });
  };

  const amoutChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enterdAmout: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enterdDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enterdTitle,
      amount: userInput.enterdAmout,
      date: new Date(userInput.enterdDate),
    };
    onSaveExpenseData(expenseData);

    setUserInput({
      enterdTitle: "",
      enterdAmout: "",
      enterdDate: "",
    });
  };

  const closeHandler = () => {
    setIsLogin(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={userInput.enterdTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input type="number" value={userInput.enterdAmout} onChange={amoutChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={userInput.enterddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="nnew-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={closeHandler.bind()}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
