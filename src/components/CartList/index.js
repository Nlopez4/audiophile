import React, {useContext} from 'react';
import './styles.scss';
import { CartContext } from '../../context';

function CartList() {
    const { cart } = useContext(CartContext); 
    console.log(cart)
    return (
        <section className="cart-section">
            <div className="cart-container">
                <h1>Cart</h1>
                <p>Total</p>
                <button>CHECKOUT</button>
            </div>
        </section>
    )
}

export default CartList; 