import React from 'react';
import './styles.scss';
import Navbar from '../../components/Navbar';

function Cart() {
    return (
        <section className="cart-section">
            <Navbar />
            <div className="cart-container">
                <h1>Cart</h1>
                <p>Total</p>
                <button>CHECKOUT</button>
            </div>
        </section>
    )
}

export default Cart; 