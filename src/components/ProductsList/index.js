import React from 'react';
import './styles.scss';
import xx59 from '../../images/xx59.jpg';
import mark1 from '../../images/mark1.jpg';

// Display data here
// Parent component 
// All product(s) go in this component
const products = [
    { id: 1, image: mark1, name: 'XX99 Mark I Headphones', description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.', price:'$1,750'},
    { id: 2, image: xx59, name: 'XX59 Headphones', description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.', price:'$1,950'},
]

// function can only have one prop 
function ProductsList() {
    return (
        <section className="headphones-section">
            <div className="hp-container">
                {products.map((product) => (
                <div className="headphones-info" key={product.id}>
                    <img className="product-images" src={product.image} />
                    <div className="hp-text">
                        <h1 className="prod-1">{product.name}</h1>
                        <p className="p-1">{product.description}</p>
                        <p className="price">{product.price}</p>
                        <button className="cart-btn">Add to Cart</button>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default ProductsList;
