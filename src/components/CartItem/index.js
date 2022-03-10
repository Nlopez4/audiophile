import React, {useContext} from 'react'; 
import { CartContext } from '../../context';


// what is in our cart
function CartItem({lineItem}) {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <img src={lineItem.image.url} />
           <h1>{lineItem.name}</h1>
           <p>{lineItem.quantity}</p>
           <p>{lineItem.line_total.formatted_with_symbol}</p>
        </div>
    )
}

export default CartItem; 