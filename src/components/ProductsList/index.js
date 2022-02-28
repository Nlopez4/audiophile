import React from 'react';
import './styles.scss';
import ProductItem from '../../components/ProductItem/index';


// All product(s) go in this component

function ProductsList({product, onAddToCart}) {
    return (
        <div>
            <ProductItem product={product} onAddToCart={onAddToCart}/>
        </div>
    )
}

export default ProductsList;
