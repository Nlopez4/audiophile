import React, { useState, useEffect }  from 'react';
import NewProduct from './NewProduct/index';
import ProductsList from './ProductsList/index';
import About from './About/index';
import { commerce } from '../lib/commerce';


function Home({cartValue}) {
    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, []); 
    return (
        <div className="home-container">
            <NewProduct />
            <ProductsList products={products} value={cartValue} />
            <About />
        </div>
    )
}
  
export default Home; 
