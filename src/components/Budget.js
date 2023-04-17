import React, { useContext, useState } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useContext(AppContext);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value
    });
    setIsEditing(false);
  }

  return (
    <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
        {
          isEditing ? <EditBudget handleSaveClick={ handleSaveClick } /> : <ViewBudget handleEditClick={ handleEditClick }/>
        }
    </div>
  )
};

export default Budget;