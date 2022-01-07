import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // const filteredExpenses = items.filter(({ date }) => date.getFullYear() === +filteredYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses} />
        {/* {filteredExpenses.length === 0 ? <p>no Expenses found.</p> : filteredExpenses.map((expense) => (
          //삼한 연산자
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* {filteredExpenses.length === 0 && <p>no Expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            //And연산자
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        /> */}
      </Card>
    </>
  );
};

export default Expense;
