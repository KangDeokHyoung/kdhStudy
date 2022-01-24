import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = React.useState("2020");
  const filterChangeHandler = (el) => {
    setFilteredYear(el);
  };

  const filterExpense = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler.bind()} />
        <ExpensesChart expenses={filterExpense} />
        <ExpensesList filterExpense={filterExpense} />
      </Card>
    </>
  );
};

export default Expenses;
