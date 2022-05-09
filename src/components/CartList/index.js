import React, {useContext} from 'react';
import './styles.scss';
import CartItem from '../../components/CartItem';
import { CartContext } from '../../context';
import { NavLink } from 'react-router-dom';


function CartList({lineItem}) {
    const { cart } = useContext(CartContext); 
    const { handleEmptyCart} = useContext(CartContext); 
    if (cart &&  cart.total_unique_items > 0) {
        return (
            <section className="cart-section">
                <div className="cart-container">
                    <div className="top-container">
                        <p className="total-items-p">Total In Cart ({cart.total_items})</p>
                        <button className="empty-btn" onClick={() => handleEmptyCart()}>EMPTY CART</button>
                    </div>
                    {cart.line_items?.map(line_item => (
                            <CartItem key={line_item.id} lineItem={line_item}/>
                    ))}
                    <div className="totals-container">
                        <p className="subtotal-p">Total:  {cart.subtotal.formatted_with_symbol}</p>
                        <button className="check-out-btn">CHECK OUT</button>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section className="empty-cart-section">
            <div className="empty-cart-container">
                <h1 className="empty-h1">Oh no! There are no items in your cart!</h1>
                <NavLink className="empty-cart" to="/">
                    <button className="see-btn">See products</button>
                </NavLink>
            </div>
        </section>
    )
};

export default CartList; 