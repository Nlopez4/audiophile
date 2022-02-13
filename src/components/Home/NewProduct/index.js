import React from 'react';
import './styles.scss';
import { useNavigate } from "react-router-dom";

function NewProduct() {
    // here is where we can logic, like props
    // Need to make button work to take us to product page 

       const navigate = useNavigate(); 
       const seeNewProduct = () => {
           navigate('/NewProdItem')
       }


    return (
        <div className="newprod-container">
            <h1>NEW PRODUCT</h1>
            <p>XX99 MARK II HEADPHONES</p>
            <p>lorem ipsum dolor sit amet</p>
            <button onClick={() => navigate("/NewProdItem")}>See Product</button>
        </div>
    )

    
}

export default NewProduct;
