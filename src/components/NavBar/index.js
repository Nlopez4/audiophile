import React from 'react';
import './styles.scss';
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <section className="nav-section">
            <header className="nav-container">
                <p className="audio-p">audiophile</p>
                <div className="nav-info">
                    <NavLink className="nav-link" to='/'>
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to='/earphones'>
                        Earphones
                    </NavLink>
                    <NavLink className="nav-link" to='/headphones'>
                        Headphones
                    </NavLink>
                    <NavLink className="nav-link" to='/speakers'>
                        Speakers
                    </NavLink>
                </div>
                <div className="cart">
                    <NavLink className="nav-link" to='/cart'>
                        Cart
                    </NavLink>
                </div>
            </header>
        </section>
    )
}

export default Navbar;