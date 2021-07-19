import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // CODE TO USE ONLY ONE STATE INSTEAD OF THREE
  
  //   const [userInput, setuserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // CODE TO USE ONLY ONE STATE INSTEAD OF THREE

  //   const titleChangeHandler = (event) => {
  //     setEnteredTitle((prevState) =>{
  //         return {...prevState, enteredTitle: event.target.value};
  //     });
  //   };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onChange={dateChangeHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
