import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";

function Links() {
    return (
        <section className="links">
            <Link to='/earphones'>
                Earphones
            </Link>
            <Link to='/headphones'>
                Headphones
            </Link>
            <Link to='/speakers'>
                Speakers
            </Link>
        </section>
    )
}

export default Links;