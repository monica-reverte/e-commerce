import {createContext, useState, useContext} from 'react';

const CartQuantityContext = createContext(null);


export const useCart = () => {
    return useContext(CartQuantityContext);
}

function CartContextProvider({children}) {
    const [cartContext, setCartContext] = useState(0);
    
    

    
function addToCart (id, counter, name, price, url,) {

    const product = [{
        id:id,
        quantity:counter,
        name:name,
        price:price,
        url:url
    }]

    

    

    const items = localStorage.getItem("cart");
    const objectItems = JSON.parse(items) || [];

    const isInCart = objectItems.find(item => item.id === id)
    if(isInCart){
        const productToCart = objectItems.map (item => item.id === id ? {...item, quantity : item.quantity + counter } : item)
        return localStorage.setItem("cart", JSON.stringify([...productToCart]));

    }



    localStorage.setItem("cart", JSON.stringify(objectItems ? [...product, ...objectItems] : product));


}

    const data = {
        cartContext,
        setCartContext,
        addToCart,
    }
    return(
        <CartQuantityContext.Provider value={data}>
            {children}
        </CartQuantityContext.Provider>
        )
}

export default CartContextProvider;

