import React from 'react';
import './styles.scss';
import { useNavigate } from "react-router-dom";

function NewProduct() {
       const navigate = useNavigate(); 
       const seeNewProduct = () => {
           navigate('/NewProdItem')
       }
    return (
        <section className="newprod-container">
            <h1>NEW PRODUCT</h1>
            <p>XX99 MARK II HEADPHONES</p>
            <p>lorem ipsum dolor sit amet</p>
            <button onClick={() => navigate("/NewProdItem")}>See Product</button>
        </section>
    )
}

export default NewProduct;
