import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  
  const chartDataPoints = [
    { label: "Jen", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // string at 0 -> January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
    
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;