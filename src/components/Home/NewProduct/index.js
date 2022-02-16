import React from 'react';
import './styles.scss';
import { useNavigate } from "react-router-dom";
// import NewHeadphones from '../../../images/image-hero.jpg';


function NewProduct() {
    const navigate = useNavigate(); 
    return (
        <section className="newprod-container">
            <div className="newprod-image">
                <div className="newprod-info">
                    <h1>NEW PRODUCT</h1>
                    <p>XX99 MARK II HEADPHONES</p>
                    <p>lorem ipsum dolor sit amet</p>
                    <button onClick={() => navigate("/NewProdItem")}>See Product</button>
                </div>
            </div>
        </section>
    )
}

export default NewProduct;

// style={{ backgroundImage: `url(${NewHeadphones})` }}