import React from 'react';
import './styles.scss';

function Cart() {
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

export default Cart; 