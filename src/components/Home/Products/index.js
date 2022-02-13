import React from 'react';
import './styles.scss';
import { useNavigate } from "react-router-dom";

function Products() {
    const navigate = useNavigate(); 
    
    return (
        <section className="products-container">
            <div className="speaker-1">
                <h1>ZX9 SPEAKER</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <button onClick={() => navigate("/Speaker1")}>See Product</button>
            </div>
                <div className="speaker-2">
                    <h1>ZX7 SPEAKER</h1>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <button onClick={() => navigate("/Speaker2")}>See Product</button>
                </div>
        </section>
    )
}

export default Products; 