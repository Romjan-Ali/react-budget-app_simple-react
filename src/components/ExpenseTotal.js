import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const {expenses, budget} = useContext(AppContext);
  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const expenseAlert = totalExpense > budget ? "Your expense is so far:" : "Total Expense:";
  return (
    <div className='alert alert-primary p-4'>{expenseAlert} ${totalExpense}</div>
  )
};

export default ExpenseTotal;