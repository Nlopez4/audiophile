import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import HomePage from './home/index';

function AllPages() {
    return (
        <Router>
            <Routes>
            <Route exact path='/' exact element={<HomePage />} />
            </Routes>
        </Router>
    )
}
  
export default AllPages; 