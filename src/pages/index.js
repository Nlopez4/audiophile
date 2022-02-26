import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from './home/index';
import CartPage from './cart/index';
import NewProdItem from './newProdItem/index';
// import { commerce } from '../lib/commerce';



function AllPages() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/newProdItem' element={<NewProdItem />} />
            </Routes>
            <Footer />
        </Router>
       
    )
}
  
export default AllPages; 