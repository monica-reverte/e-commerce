
import { useCart } from "../../context/cartContext";
import { useState } from "react";
import "./Counter.css";

export const Counter = ({ initialValue = 0, product }) => {
  const [counter, setCounter] = useState(initialValue);
  const { addToCart } = useCart();


  const increaseValue = () => {
    setCounter((prevState) => prevState + 1);
  };

  const substractValue = () => {
    if (counter === 0) return initialValue;
    setCounter((prevState) => prevState - 1);
  };

  const add = () => {
    addToCart(counter, product);
    setCounter(0);
   
  };

  return (
    <>
      <button className="btn-counter" onClick={substractValue}>
        -
      </button>
      <div>{counter}</div>
      <button className="btn-counter" onClick={increaseValue}>
        +
      </button>

      <button className="add-cart" onClick={add}>
        Add to cart
      </button>
    </>
  );
};
