import { useState } from "react";
import "./Counter.css";



export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increase = () => setCounter(counter + 1)
    const decrement = () => {if (counter === 0) return initialValue;
        setCounter((prevState) => prevState - 1);
    };

    return {
        counter,
        increase,
        decrement
    }

}

// export const Counter = ({ initialValue = 0 , name, price, url, id}) => {

    
//     const {setCartContext, addToCart} = useCart();
    

    
    // const add = () => {
    //     addToCart(id, counter, name, price, url)
    //     setCounter(0);
    //     setCartContext(prevState => prevState + 1)
        
    // }
    
    // setCartContext((currentItems) => {
    //     const itemFound = currentItems.find((item) => item.id === id);
    //     if(itemFound){
    //         return currentItems.map((item) => {
    //             if(item.id === id){
    //                 return {...item, quantity: counter + 1}
    //             }
    //         })
    //     } else {
    //     return [...currentItems, {id, quantity: counter}]
    //     }
    // })
    





