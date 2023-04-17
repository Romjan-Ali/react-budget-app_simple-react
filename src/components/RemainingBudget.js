import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
  const { budget, expenses } = useContext(AppContext);
  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const remaining = budget - totalExpense;
  const alertType = totalExpense < budget ? "alert-success" : "alert-danger";
  return (
    <div className={`alert ${alertType} p-4`}><span>Remaining Budget: ${remaining}</span></div>
  )
};

export default RemainingBudget;