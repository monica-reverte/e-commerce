import { createContext, useState, useContext, useEffect } from "react";

export const CartQuantityContext = createContext(null);

export const useCart = () => {
  return useContext(CartQuantityContext);
};

function CartContextProvider({ children }) {
  const [cartContext, setCartContext] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContext))

  }, [cartContext])
  

  function addToCart(counter, product) {

    const isInCart = cartContext.find(item => item.id === product.id)
    
    if(isInCart){
        const newProduct = cartContext.map (item => item.id === product.id ? {...item, quantity : item.quantity + counter } : item)
        setCartContext([...newProduct]);
    }else{
        const newProduct = { ...product, quantity: counter };
        setCartContext([...cartContext, newProduct])
    }
  }


  const data = {
    cartContext,
    setCartContext,
    addToCart,
  };
  return (
    <CartQuantityContext.Provider value={{...data}}>
      {children}
    </CartQuantityContext.Provider>
  );
}

export default CartContextProvider;
