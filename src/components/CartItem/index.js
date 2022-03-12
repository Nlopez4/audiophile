import React, {useContext} from 'react'; 
import './styles.scss';
import { CartContext } from '../../context';


// what is in our cart
function CartItem({lineItem}) {
    const { cart } = useContext(CartContext);
    const {handleUpdateCartQty} = useContext(CartContext)

    
    
    return (
        <section>
            <div className="cart-item-details">
                <div className="item-details-container">
                    <img className="item-img" src={lineItem.image.url} />
                    <div className="item-details">
                        <h1>{lineItem.name}</h1>
                        <div>{lineItem.line_total.formatted_with_symbol}</div>
                    </div>
                </div>
                <div className="item-qty">
                    <button onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity + 1)}>+</button>
                    <p>{lineItem.quantity}</p>
                    <button onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity - 1)}>-</button>
                </div>
            </div>
        </section>
    )
}

export default CartItem; 