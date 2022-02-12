import React from 'react';
import './styles.scss';

function NewProduct() {
    // here is where we can logic, like props
    // Need to make button work to take us to product page 
    function seeProduct(e) {
        e.preventDefault();
        console.log('see page')
    }

    return (
        <div className="newprod-container">
            <h1>NEW PRODUCT</h1>
            <p>XX99 MARK II HEADPHONES</p>
            <p>lorem ipsum dolor sit amet</p>
            <button onClick={seeProduct}>See Product</button>
        </div>
    )

    
}

export default NewProduct;
