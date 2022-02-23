import React from 'react';
import './styles.scss';

// Display data here
// Parent component 
const products = [
    { id: 1, name: 'XX99 Mark I Headphones', description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.', price:'$1,750'},
    // { id: 2, name: 'XX59 Headphones', description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.', price:'$1,950'},
]


function HeadPhones(props) {
    return (
        <section className="headphones-section">
            <div className="mark1-image"></div>
            {products.map((product) => (
            <div className="headphones-info" key={1}>
                <h1 className="prod-1">{product.name}</h1>
                <p className="p-1">{product.description}</p>
                <p className="price">{product.price}</p>
                <button className="cart-btn">Add to Cart</button>
            </div>
            
            ))}
        </section>
    )
}

export default HeadPhones;
