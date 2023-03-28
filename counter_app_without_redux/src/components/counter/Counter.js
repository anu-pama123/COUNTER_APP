import React from "react";
import { useState, useEffect } from "react";

import "../../components/counter/counter.css";

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [value, setValue] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setValue(value+1)
        },1000)
    },[value])

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

    // const colors = ['red','blue', 'green', 'black']

    const randomColorGenerator = ()=>{
        var result           = '#';
        var characters       = '0123456789ABCDEF';
        for ( var i = 0; i < 6; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 16));
        }
        return result;
        // let result = 'yellow'
        // for ( var i = 0; i < colors.length; i++ ) {
        //     result = colors[i];
        // }
        // console.log(result)
        // return result;
    }

    const [color, setColor] = useState(randomColorGenerator())

    return (
        <div className="counter-container">
            <div className='title-section'>
                <h1 className='title'>COUNTER APP</h1>
            </div>
            <div className='counter'>
                <div>I have rendered {value}</div>
                <div className='counter-section'>
                <div className='counter-display'>
                    <h2 className='counter-value'>{counterValue}</h2>
                </div>
                <div className='counter-operation'>
                    <div className='increment-button-container'>
                        <button style={{backgroundColor: `${color}`}} className='increment-button' onClick={()=>{setounterValue('INC');setColor(randomColorGenerator)}}>Increment</button>
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