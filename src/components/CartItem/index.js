import React, {useContext} from 'react'; 
import { CartContext } from '../../context';


// what is in our cart
function CartItem({lineItem}) {
    const { cart } = useContext(CartContext);
    const {handleUpdateCartQty, handleRemoveFromCart} = useContext(CartContext)

    
    
    return (
        <div>
            <img src={lineItem.image.url} />
           <h1>{lineItem.name}</h1>
           <p>{lineItem.quantity}</p>
           <button onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity + 1)}>+</button>
           <p>{lineItem.line_total.formatted_with_symbol}</p>
           <button onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity - 1)}>-</button>
           <button onClick={() => handleRemoveFromCart(lineItem.id)}>Remove</button>
        </div>
    )
}

export default CartItem; 