import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Footer from '../components/Footer';
import HomePage from './home/index';
import CartPage from './cart/index';
import NewProdItem from './newProdItem/index';


function AllPages() {
    return (
        <Router>
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