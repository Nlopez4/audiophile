import React, {useContext} from 'react';
import './styles.scss';
import CartItem from '../../components/CartItem';
import { CartContext } from '../../context';

function CartList({lineItem}) {
    const { cart } = useContext(CartContext); 
    const { handleEmptyCart} = useContext(CartContext); 
    console.log(cart)
    if (cart &&  cart.total_unique_items > 0) {
        return (
            <section className="cart-section">
                <div className="cart-container">
                    <div className="top-container">
                        <p>Total Items: {cart.total_items}</p>
                        <button onClick={() => handleEmptyCart()}>Empty Cart</button>
                    </div>
                    {cart.line_items?.map(line_item => (
                            <CartItem key={line_item.id} lineItem={line_item}/>
                    ))}
                    <div className="totals-container">
                        <p>Total: {cart.subtotal.formatted_with_symbol}</p>
                        <button>CHECK OUT</button>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <div>
            <p>No items in your cart</p>
        </div>
    )
};

export default CartList; 