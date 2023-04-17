import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    };
    return (
        <>
            <li className='list-group-item d-flex align-items-center justify-content-between'>
                {props.name}
                <div>
                    <span className='badge badge-primary padge-pill'>${props.cost}</span>
                    <TiDelete size='1.5em' onClick={handleDeleteExpense} />
                </div>
            </li>
        </>
    )
};

export default ExpenseItem;