import React, {useContext} from 'react';
import './styles.scss';
import xx59 from '../../images/xx59.jpg';
import mark1 from '../../images/mark1.jpg';
import { CartContext } from '../../context';


function ProductItem({product}) {
    const {handleAddToCart} = useContext(CartContext);
    console.log(product)
    return (
        <section className="headphones-section">
            <div className="hp-container">
                <div className="headphones-info" key={product.id}>
                    <img className="product-images" src={product.image.url} alt ="headphone product"/>
                    <div className="hp-text">
                        <h1 className="prod-1">{product.name}</h1>
                        <p className="p-1">{product.description}</p>
                        <p className="price">{product.price.formatted_with_symbol}</p>
                        <button onClick={() => handleAddToCart(product.id)} className="cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductItem;
