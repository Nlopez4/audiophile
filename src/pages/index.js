import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch}
    from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from './home/index';
import CartPage from './cart/index';
import EarphonesPage from './earphones/index';
import HeadphonesPage from './headphones/index';
import SpeakersPage from './speakers/index';

function AllPages() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route exact path='/' exact element={<HomePage />} />
            <Route exact path='/cart' exact element={<CartPage />} />
            <Route exact path='/earphones' exact element={<EarphonesPage />} />
            <Route exact path='/headphones' exact element={<HeadphonesPage />} />
            <Route exact path='/speakers' exact element={<SpeakersPage />} />
            </Routes>
        </Router>
    )
}
  
export default AllPages; 