import React from 'react'
import { useState } from 'react';

const Dummy = () => {
    function nameChangeFunction() {
        const arr = ["Organize", "Shedule", "Plan"];
        setName(arr[Math.floor (Math.random()*10%3)]);

    }

    const [num,setNum] = useState(977);

    function increment(){
        setNum(num + 1)
    }

    const decrement = () => {
        return setNum(num-1);
    }

    const [name,setName] = useState("Plan")
    return (
        <div>
            <p onDoubleClick={nameChangeFunction}>{name} your day with us......</p>
            <button onClick={increment}>+</button>
            <p> {num} views for this site. </p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Dummy