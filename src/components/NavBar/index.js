import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <Link to='/'>
                Home
            </Link>
            <Link to='/earphones'>
                Earphones
            </Link>
            <Link to='/headphones'>
                Headphones
            </Link>
            <Link to='/speakers'>
                Speakers
            </Link>
            <Link to='/cart'>
                Cart
            </Link>
        </div>
    )
}

export default Navbar;