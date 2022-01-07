import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = () => {
  const [select, setSelect] = useState();
  const dropdownChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.vlaue);
  };

    console.log(select)
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option vlaue="2022">2022</option>
          <option vlaue="2021">2021</option>
          <option vlaue="2020">2020</option>
          <option vlaue="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
