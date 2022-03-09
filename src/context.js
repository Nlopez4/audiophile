import React, { useContext, createContext, useEffect, useState, useReduce }  from 'react';
import { commerce } from './lib/commerce';


const CartContext = React.createContext();

function CartContextProvider({children}) {
    const [cart, setCart] = useState({});
   

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchCart();
    }, []); 

   const cartValue = {cart, fetchCart, handleAddToCart}; 
    
    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}; 
