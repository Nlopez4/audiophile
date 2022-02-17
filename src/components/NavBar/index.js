import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <section className="nav-section">
            <div className="nav-container">
                <p className="audio-p">audiophile</p>
                <div className="nav-info">
                    <Link className="nav-link" to='/'>
                        Home
                    </Link>
                    <Link className="nav-link" to='/earphones'>
                        Earphones
                    </Link>
                    <Link className="nav-link" to='/headphones'>
                        Headphones
                    </Link>
                    <Link className="nav-link" to='/speakers'>
                        Speakers
                    </Link>
                    <div className="cart">
                        <Link className="nav-link" to='/cart'>
                            Cart
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;