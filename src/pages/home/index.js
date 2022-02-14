import React from 'react';
import './styles.scss';
import NewProduct from '../../components/Home/NewProduct/index';
import Links from '../../components/Home/Links/index';
import Products from '../../components/Home/Products/index';
import About from '../../components/Home/About/index';

function HomePage() {
    return (
        <div className="home-container">
           <NewProduct />
           <Links />
           <Products />
           <About />
        </div>
    )
}
  
export default HomePage; 