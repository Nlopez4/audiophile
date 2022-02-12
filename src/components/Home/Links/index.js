import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";

function Links() {
    return (
        <div className="links">
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
    )
}

export default Links;