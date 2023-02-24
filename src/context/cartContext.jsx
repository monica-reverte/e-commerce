import {createContext, useState } from 'react';

export const CartQuantityContext = createContext(null);

function CartContextProvider({children}) {
    const [cartContext, setCartContext] = useState(0);

    return(
        <CartQuantityContext.Provider value={[cartContext, setCartContext]}>
            {children}
        </CartQuantityContext.Provider>
        )
}

export default CartContextProvider;