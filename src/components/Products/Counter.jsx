import { useState } from "react";
import "./Counter.css";

import { useCart } from '../../context/cartContext';



export const Counter = ({ initialValue = 0 , id}) => {

    const [counter, setCounter] = useState(initialValue);
    const {setCartContext, addToCart} = useCart()

    const increaseValue = () => {
    setCounter((prevState) => prevState + 1);
    
};

    const substractValue = () => {
        if (counter === 0) return initialValue;
        setCounter((prevState) => prevState - 1);
    };

    
    const add = () => {
        addToCart(id, counter)
        setCounter(0);
        setCartContext(prevState => prevState + 1)
    
    }
    
    


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

        <button className='add-cart' onClick={add}>Add to cart</button>
        
    </>
    );
};


