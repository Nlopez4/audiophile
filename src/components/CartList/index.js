import React, {useContext} from 'react';
import './styles.scss';
import CartItem from '../../components/CartItem';
import { CartContext } from '../../context';

function CartList() {
    const { cart } = useContext(CartContext); 
    console.log(cart)
    return (
        <section className="cart-section">
            <div className="cart-container">
               {cart.line_items?.map(line_item => (
                    <CartItem key={line_item.id} lineItem={line_item}/>
               ))}

            </div>
        </section>
    )
}

export default CartList; 