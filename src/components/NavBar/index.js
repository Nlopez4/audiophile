import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { IconButton, Badge, } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


const Navbar = ({ totalItems }) => {
    return (
        <section className="nav-section">
            <header className="nav-container">
                <NavLink className="audio-p" to='/'>
                    audiophile
                </NavLink>
                <NavLink className="cart" to="/cart" >
                    <IconButton aria-label="Show cart items">
                        <Badge badgeContent={totalItems} color="secondary" style={{ color: 'white' }} >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </NavLink>
            </header>
        </section>
    )
}

export default Navbar;