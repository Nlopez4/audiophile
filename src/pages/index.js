import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from './home/index';
import CartPage from './cart/index';
import EarphonesPage from './earphones/index';
import HeadphonesPage from './headphones/index';
import SpeakersPage from './speakers/index';
import NewProdItem from './NewProdItem/index';

function AllPages() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/earphones' element={<EarphonesPage />} />
            <Route exact path='/headphones' element={<HeadphonesPage />} />
            <Route exact path='/speakers' element={<SpeakersPage />} />
            <Route exact path='/NewProdItem' element={<NewProdItem />} />
            </Routes>
        </Router>
    )
}
  
export default AllPages; 