import React from 'react';
import './styles.scss';
import Navbar from '../../components/Navbar';
import CartList from '../../components/CartList';

function CartPage() {
    return (
        <div className="cart-container">
            <Navbar />
            <CartList />
        </div>
    )
}
  
export default CartPage;