import React from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, expense) => {
    return (total = total + expense);
  });
  return (
    <div>
      <span>Remaining: {exps}</span>
    </div>
  );
};

export default Remaining;
