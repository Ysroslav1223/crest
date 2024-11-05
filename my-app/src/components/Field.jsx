import React from 'react';
import './Field.css'

const Field = (props) => {
    return (
        <button className='square' onClick={props.onClick}>{props.value}</button>
    );
}

export default Field;
