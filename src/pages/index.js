import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Footer from '../components/Footer';
import HomePage from './home/index';
import CartPage from './cartpage/index';
import NewProdItem from './newProdItem/index';


function AllPages() {
    return (
        <Router>
            <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/cartpage' element={<CartPage />} />
            <Route exact path='/newProdItem' element={<NewProdItem />} />
            </Routes>
            <Footer />
        </Router>
       
    )
}
  
export default AllPages; 