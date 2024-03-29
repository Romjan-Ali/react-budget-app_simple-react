import React, { useState } from 'react';

const EditBudget = (props) => {
    const [value, setValue] = useState(3000);

    return (
        <>
            <input 
                required='required'
                type='number'
                className='form-control mr-3'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type='button'
                className='btn btn-primary'
                onClick={() => (props.handleSaveClick(value))}
            >
                Save
            </button>
        </>
    )
}

export default EditBudget;