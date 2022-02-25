import React from 'react';
import './styles.scss';
import NewProduct from '../../components/Home/NewProduct/index';
import HeadPhones from '../../components/Home/HeadPhones/index';
import About from '../../components/Home/About/index';


function HomePage() {
    return (
        <div className="home-container">
           <NewProduct />
           <HeadPhones />
           <About />
        </div>
    )
}
  
export default HomePage; 