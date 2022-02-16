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
                    <h1 className="new-text">NEW PRODUCT</h1>
                    <p className="newprod-name">XX99 MARK II HEADPHONES</p>
                    <p className="newprod-info-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className="newprod-bttn" onClick={() => navigate("/NewProdItem")}>See Product</button>
                </div>
            </div>
        </section>
    )
}

export default NewProduct;

// style={{ backgroundImage: `url(${NewHeadphones})` }}