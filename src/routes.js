import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Footer from './components/Footer';
import CartList from './components/CartList';
import Home from './components/home';



function AllRoutes() {
    return (
        <Router>
            <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<CartList />} />
            </Routes>
            <Footer />
        </Router>
       
    )
}
  
export default AllRoutes; 