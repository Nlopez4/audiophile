import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Footer from './components/Footer';
import CartList from './components/CartList';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { CartContext } from './context';


function AllRoutes() {
    const { cart } = useContext(CartContext);
    return (
        <Router>
            <Navbar totalItems={cart.total_items}/>
            <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<CartList />} />
            </Routes>
            <Footer />
        </Router>
       
    )
}
  
export default AllRoutes; 