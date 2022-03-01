import React from 'react';
import './styles.scss';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';

function CartPage() {
    return (
        <div className="cart-container">
            <Navbar />
            <Cart />
        </div>
    )
}
  
export default CartPage;