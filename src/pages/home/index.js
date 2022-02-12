import React from 'react';
import './styles.scss';
import NewProduct from '../../components/Home/NewProduct/index';
import Links from '../../components/Home/Links/index';
import Products from '../../components/Home/Products/index';

function HomePage() {
    return (
        <div className="home-container">
           <NewProduct />
           <Links />
           <Products />
        </div>
    )
}
  
export default HomePage; 