import React from 'react';
import './styles.scss';

function HeadPhones() {
    return (
        <section className="headphones-section">
            <div className="mark1-image"></div>
            <div className="headphones-info">
                <h1 className="prod-1">XX99 Mark I Headphones</h1>
                <p className="p-1">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                <button className="cart-btn">Add to Cart</button>
            </div>
        </section>
    )
}

export default HeadPhones;