import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const ViewBudget = (props) => {
  const { budget } = useContext(AppContext);
  return (
    <>
        <span>Budget: { budget }</span>
        <button type='button' className='btn btn-primary' onClick={props.handleEditClick}>Edit</button>
    </>
  )
};

export default ViewBudget;