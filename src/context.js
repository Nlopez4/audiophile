import React, { useContext, createContext, useEffect, useState, useReduce }  from 'react';
import { commerce } from './lib/commerce';


const CartContext = React.createContext();

function CartContextProvider({children}) {
    const [cart, setCart] = useState({});
   

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity});
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchCart();
    }, []); 

   const cartValue = {cart, fetchCart, handleAddToCart, handleUpdateCartQty, handleEmptyCart}; 
    
    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}; 
