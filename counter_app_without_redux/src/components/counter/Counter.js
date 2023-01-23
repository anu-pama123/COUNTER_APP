import React from "react";
import { useState } from "react";

import "../../components/counter/counter.css";

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

    const setounterValue = (action) => {
        if(action === 'INC') {
            setCounterValue(counterValue + 1);
        } 
        if(action === 'DEC') {
            setCounterValue(counterValue - 1);
        }
        if(action === "ADD") {
            setCounterValue(counterValue + 10);
        }
    }

    return (
        <div className="counter-container">
            <div className='title-section'>
                <h1 className='title'>COUNTER APP</h1>
            </div>
            <div className='counter'>
                <div className='counter-section'>
                <div className='counter-display'>
                    <h2 className='counter-value'>{counterValue}</h2>
                </div>
                <div className='counter-operation'>
                    <div className='increment-button-container'>
                        <button className='increment-button' onClick={()=>setounterValue('INC')}>Increment</button>
                    </div>
                    <div className='decrement-button-container'>
                        <button className='decrement-button' onClick={() => setounterValue('DEC')}>Decrement</button>
                    </div>
                    <div className='add-by-button-container'>
                        <button className='add-by-button' onClick={() => setounterValue("ADD")}>Add By 10</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;