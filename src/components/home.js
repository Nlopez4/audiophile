import React, { useState, useEffect, useContext }  from 'react';
import Navbar from './Navbar';
import NewProduct from './NewProduct/index';
import ProductsList from './ProductsList/index';
import About from './About/index';
import { commerce } from '../lib/commerce';
import { CartContext } from '../context';


function Home({cartValue}) {
    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, []); 
    const { cart } = useContext(CartContext); 
    console.log(cart)
    return (
        <div className="home-container">
            <NewProduct />
            <ProductsList products={products} value={cartValue} />
            <About />
        </div>
    )
}
  
export default Home; 
