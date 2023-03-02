import { useEffect } from 'react'
import { useCart } from "../../context/cartContext";
import { FaTrashAlt }  from "react-icons/fa";
import './ShoppingCart.css';




export const ShoppingCart = () => {

  const {cartContext} = useCart()

    useEffect(() => {
        const cart = JSON.parse(window.localStorage.getItem("cart"))
        const cartArr = (cart.map(item => {
          return item}))
        

          cartArr.forEach(item => 
          console.log(item))

          
      

},[cartContext]);



  return (
    <div className="shopping-cart">
      <div className="cart">
          <h2>Your Shopping Cart</h2>
            <div className="cart-center">
            </div>
            <div className="cart-item">
              <img  alt=""/>
              <div>
                <h1>{cartContext}</h1>
                <p>price</p> 
              </div>
              <div>
                <p className='quantity'>l</p>
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

