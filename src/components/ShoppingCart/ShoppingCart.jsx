import { FaTrashAlt, FaMinusCircle, FaPlusCircle }  from "react-icons/fa";
import { useCart } from "../../context/cartContext";
import './ShoppingCart.css';


export const ShoppingCart = () => {
  const {setCartContext} = useCart()
  const cart = JSON.parse(window.localStorage.getItem("cart"))
  
  
  const removeProduct = id => {
    
    const results = cart.filter(item => item.id !== id)
    setCartContext(results)
    
  }

  const totalQuantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;   
  },0);

  const totalPrice = cart.reduce((acc, curr)=>{
    return acc + curr.quantity * curr.price;
  },0)

  const minus = id =>{
    cart.forEach(item =>{
      if(item.id === id){
        item.quantity === 1 ? item.quantity = 1: item.quantity -=1;
      }
      setCartContext([...cart])
  })
}

  const plus = id =>{
    cart.forEach(item =>{
      if(item.id === id){
        item.quantity +=1;
      }
      setCartContext([...cart])
    })
  }
    
  return (
    <div className="shopping-cart">
      <div className="cart">
          <h2>Your Shopping Cart</h2>

          {cart.map((item, index) => {
            return (
            <div className="cart-center" key={`${item.id}-${index}`}>
              <div className="cart-item">
                <div className="img-item-container" >
                  <img className ="img-item" src={item.url} alt={item.name}/>
                </div>
                <div className="item-info">
                  <h1 className="item-title">{item.name}</h1>
                  <p className='price'>{item.price}€</p>
                <div className="div-quantity">
                  <FaPlusCircle className="plus-minus-icon" onClick={()=> plus (item.id)} />
                  <p className='quantity'> {item.quantity}</p>
                  <FaMinusCircle className="plus-minus-icon" onClick={()=> minus (item.id)}/>
                </div>
                </div>
                <div className='remove-item' onClick={()=>removeProduct(item.id)} >
                
                  <FaTrashAlt />
                </div>
              </div>
            </div>)
          })}
        
          <div className="cart-footer">
            <h3>Total</h3>
            <p>Total Products:{totalQuantity}</p>
            
            <p>Total Price: {totalPrice}€ </p>
            <button className='button-pay'>Payment</button>
          </div>
          
        

          </div>
      </div>
    
  )

}
