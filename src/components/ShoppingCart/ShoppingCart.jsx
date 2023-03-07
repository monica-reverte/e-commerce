import { FaTrashAlt }  from "react-icons/fa";
import './ShoppingCart.css';
import { useCart } from "../../context/cartContext"


export const ShoppingCart = () => {


  const cart = JSON.parse(window.localStorage.getItem("cart"))
  const {setCartContext} = useCart()

  const removeProduct = (id) => {
    const cart = JSON.parse(window.localStorage.getItem("cart"))
    if(window.confirm("Do you want to delete this item?")){
      cart.forEach((item, index) =>{
        if(item.id === id){
          item.quantity = 1;
          cart.splice(index, 1)
        }
      })
      console.log(cart)
      setCartContext([...cart])
    }


  }

  //   const cart = JSON.parse(window.localStorage.getItem("cart"))

  //   const results = cart.filter(item => item.id !== id)

  // setCartContext(results)
  







  return (
    <div className="shopping-cart">
      <div className="cart">
          <h2>Your Shopping Cart</h2>

          {cart.map((item) => {
            return (
            <div className="cart-center" key={item.id}>
              <div className="cart-item">
                <div className="img-item-container" >
                  <img className ="img-item" src={item.url} alt={item.name}/>
                </div>
                <div className="item-info">
                  <h1 className="item-title">{item.name}</h1>
                  <p>{item.price}€</p>
                  <p className='quantity'> quantity: {item.quantity}</p>
                </div>
                <div className='remove-item' onClick={()=>removeProduct(item.id)}>
                  <FaTrashAlt />
                </div>
              </div>
            </div>)
          })}
        
          <div className="cart-footer">
            <h3>Total</h3>
            <p>Total Products:</p>
            <p>Total Price: </p>
            <button className='button-pay'>Payment</button>
          </div>
          
        

          </div>
      </div>
    
  )

}
