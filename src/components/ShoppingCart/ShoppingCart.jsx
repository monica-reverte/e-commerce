import { FaTrashAlt }  from "react-icons/fa";
import './ShoppingCart.css';

export const ShoppingCart = () => {

  const cart = JSON.parse(window.localStorage.getItem("cart"))
  console.log(cart)



  return (
    <div className="shopping-cart">
      <div className="cart">
          <h2>Your Shopping Cart</h2>

          {cart.map((item) => {
            return (
            <div className="cart-center">
              <div className="cart-item" key={item.id}>
                <div className="img-item-container">
                  <img className ="img-item" src={item.url} alt={item.name}/>
                </div>
                <div className="item-info">
                  <h1 className="item-title">{item.name}</h1>
                  <p>{item.price}</p>
                  <p className='quantity'> quantity: {item.quantity}</p>
                </div>
                <div className='remove-item'>
                  <FaTrashAlt />
                </div>
              </div>
            </div>)
          })}
        
          <div className="cart-footer">
            <h3>Total</h3>
            <button className='button-pay'>Payment</button>
          </div>
          
        

          </div>
      </div>
    
  )
}

