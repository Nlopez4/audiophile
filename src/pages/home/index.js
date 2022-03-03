import React, { useState, useEffect }  from 'react';
import './styles.scss';
import Navbar from '../../components/Navbar';
import NewProduct from '../../components/NewProduct/index';
import ProductsList from '../../components/ProductsList/index';
import About from '../../components/About/index';
import CartList from '../../components/CartList/index';
import { commerce } from '../../lib/commerce';

// product data going in home page to populate on home page 
function HomePage() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async() => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []); 

    console.log(cart)
    return (
        <div className="home-container">
            <Navbar totalItems={cart.total_items}/>
            <NewProduct />
            <ProductsList products={products} onAddToCart={handleAddToCart}/>
            {/* <CartList cart={cart}/> */}
            <About />
        </div>
    )
}
  
export default HomePage; 