import React from 'react'
import './UseStateButton.css'
import { useState } from 'react';

function UseStateButton() {
    let [count, setCount] = useState(0);
    return (
        <>
            <div className='buttonContainer'>
                <button className='btn' onClick={ () => setCount(count--) }>-</button>
                <span className='result'>{ count }</span>
                <button className='btn' onClick={ () => setCount(count++) }>+</button>
            </div>
        </>
    )
}

export default UseStateButton