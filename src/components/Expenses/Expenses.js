import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesLists from "./ExpensesLists";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const pickFilterHandler = (selectedYear) => {
    console.log("In Expenses.js");
    console.log(selectedYear + " Lol");
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onPickFilter={pickFilterHandler}
        />
        <ExpensesLists items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
