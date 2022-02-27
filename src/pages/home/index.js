import React, { useState, useEffect }  from 'react';
import './styles.scss';
import NewProduct from '../../components/Home/NewProduct/index';
import HeadPhones from '../../components/Home/HeadPhones/index';
import About from '../../components/Home/About/index';
import { commerce } from '../../lib/commerce';

// product data going in home page to populate on home page 
function HomePage() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async() => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []); 

    console.log(products);
    return (
        <div className="home-container">
           <NewProduct />
           <HeadPhones />
           <About />
        </div>
    )
}
  
export default HomePage; 