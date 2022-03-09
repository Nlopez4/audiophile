import React, {useContext} from 'react';
import './styles.scss';
import xx59 from '../../images/xx59.jpg';
import mark1 from '../../images/mark1.jpg';
import { CartContext } from '../../context';


// Single Product component 
const products = [
    { id: 'prod_0egY5eMaWp53Qn', image: mark1, name: 'XX99 Mark I Headphones', description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.', price:'$1,750'},
    { id: 'prod_yA6nldxpWalEWb', image: xx59, name: 'XX59 Headphones', description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.', price:'$1,950'},
]

function ProductItem({product}) {
    const {handleAddToCart} = useContext(CartContext);
    return (
        <section className="headphones-section">
            <div className="hp-container">
                {products.map((product) => (
                <div className="headphones-info" key={product.id}>
                    <img className="product-images" src={product.image} alt ="headphone product"/>
                    <div className="hp-text">
                        <h1 className="prod-1">{product.name}</h1>
                        <p className="p-1">{product.description}</p>
                        <p className="price">{product.price}</p>
                        <button onClick={() => handleAddToCart(product.id)} className="cart-btn">Add to Cart</button>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}
export default ProductItem;

// onClick={() => onAddToCart(product.id)} className