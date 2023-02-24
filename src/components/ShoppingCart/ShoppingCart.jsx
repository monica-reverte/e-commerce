// import { useContext, useEffect } from 'react';
import { FaTrashAlt }  from "react-icons/fa";
import './ShoppingCart.css';




export const ShoppingCart = () => {

  // const [cartContext, setCartContext] = useContext(null)
  // const value = useContext(CartContextProvider);

  // const getData = () =>{
  //     return localStorage.getItem("cart");
  // }

  // useEffect(() => {
  //     setCartContext(getData());
  // })

  return (
    <div className="shopping-cart">
      <div className="cart">
          <h2>Your Shopping Cart</h2>
            <div className="cart-center">
            </div>
            <div className="cart-item">
              <img  alt=""/>
              <div>
                <h1>name</h1>
                <p>price</p> 
              </div>
              <div>
                <p className='quantity'>1</p>
              </div>
              <div className='remove-item'>
                <FaTrashAlt />
              </div>
            </div>
        
          <div className="cart-footer">
            <h3>Total</h3>
            <button className='button-pay'>Payment</button>
          </div>
          
        

          </div>
      </div>
    
  )
}

