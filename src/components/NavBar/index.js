import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconButton, Badge, } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';



const Navbar = ({ totalItems }) => {
    return (
        <section className="nav-section">
            <header className="nav-container">
                <NavLink className="audio-p" to='/'>
                    audiophile
                </NavLink>
                <div className="nav-info">
                    <NavLink className="nav-link" to='/headphones'>
                        Headphones
                    </NavLink>
                </div>
                <IconButton className="cart" to="/cart" aria-label="Show cart items">
                    <Badge badgeContent={totalItems} color="secondary" style={{ color: 'white' }} >
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <div className="menu">
                    <AiOutlineMenu />
                </div>
            </header>
        </section>
    )
}

export default Navbar;