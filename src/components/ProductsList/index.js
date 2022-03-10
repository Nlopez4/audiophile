import React from 'react';
import ProductItem from '../../components/ProductItem/index';


// All product(s) go in this component

function ProductsList({products, onAddToCart}) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <ProductItem product={product} onAddToCart={onAddToCart}/>
                </div>
            ))}
        </div>
    )
}

export default ProductsList;
