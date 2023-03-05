import {createContext, useState, useContext } from 'react';

const CartQuantityContext = createContext(null);

export const useCart = () => {
    return useContext(CartQuantityContext);
}

function CartContextProvider({children}) {
    const [cartContext, setCartContext] = useState(0);
    

    
function addToCart (id, counter, name, price, url) {

    

    const product = [{
        id:id,
        quantity:counter,
        name: name,
        price: price,
        url: url

    }]

    if(product.find(item =>item.id === product.id)){
        const products = product.map(item => 
            item.id === product.id 
                ? {...item, quantity: item.quantity + 1 }
                : item
        );

        return setCartContext(...products)
    }

    

    const items = localStorage.getItem("cart");
    const objectItems = JSON.parse(items);


    localStorage.setItem("cart", JSON.stringify(objectItems ? [...product, ...objectItems] : product));

    

    // console.log(product)
    // console.log(cartContext)

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

