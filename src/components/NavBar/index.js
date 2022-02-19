import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from "react-icons";



const Navbar = () => {
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
                <IconContext.Provider value={{ size: "20", className: "cart" }}>
                    <div className="cart-container">
                        <NavLink className="cart-link" to='/cart'>
                            <AiOutlineShoppingCart />
                        </NavLink>
                    </div>
                </IconContext.Provider>
                <div className="menu">
                    <AiOutlineMenu />
                </div>
            </header>
        </section>
    )
}

export default Navbar;