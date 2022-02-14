import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";

function Links() {
    return (
        <section className="links-container">
            <div className="links-info">
                <Link to='/earphones'>
                    Earphones
                </Link>
                <Link to='/headphones'>
                    Headphones
                </Link>
                <Link to='/speakers'>
                    Speakers
                </Link>
            </div>
        </section>
    )
}

export default Links;