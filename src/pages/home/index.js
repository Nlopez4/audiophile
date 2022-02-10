import React from 'react';
import './styles.css';
import NewProduct from '../../components/Home/NewProduct/index';
import Links from '../../components/Home/Links/index';

function HomePage() {
    return (
        <div className="home-container">
           <NewProduct />
           <Links />
        </div>
    )
}
  
export default HomePage; 