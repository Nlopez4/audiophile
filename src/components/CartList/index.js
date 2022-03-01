import React from 'react';
import './styles.scss';

function CartList({ cart }) {
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