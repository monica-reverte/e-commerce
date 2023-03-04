// import { useCart } from "../../context/cartContext";
import { FaTrashAlt }  from "react-icons/fa";
import './ShoppingCart.css';

export const ShoppingCart = () => {

  // const {cartContext} = useCart()


  const cart = JSON.parse(window.localStorage.getItem("cart"))
  console.log(cart)

    // useEffect(() => {
        
        // console.log(cart)
        // const cartArr = (cart.map(item => {
        //   return item}))

          // console.log(item)

          // cartArr.forEach(item => 
          // console.log(item))


// },[cartContext]);

  return (
    <div className="shopping-cart">
      <div className="cart">
          <h2>Your Shopping Cart</h2>

          {cart.map((item) => {
            return (
            <div className="cart-center">
              <div className="cart-item" key={item.id}>
                <img src={item.url} alt={item.name}/>
                  <div>
                    <h1>{item.name}</h1>
                    <p>{item.price}</p> 
                  </div>
                  <div>
                    <p className='quantity'>{item.quantity}</p>
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

