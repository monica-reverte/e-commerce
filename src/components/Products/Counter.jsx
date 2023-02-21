import {  useState } from "react";
import "./Counter.css";

export const Counter = ({ initialValue = 0 }) => {

    const [counter, setCounter] = useState(initialValue);

    const increaseValue = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
};

    const substractValue = () => {
        if (counter === 0) return initialValue;
        setCounter((prevState) => prevState - 1);
    };

    return (
    <>
        <button
        className= 'btn-counter'
        onClick={substractValue}
        >
        -
        </button>
        <div>{counter}</div>
        <button className='btn-counter' onClick={increaseValue}>
        +
        </button>
        
    </>
    );
};


