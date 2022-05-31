import React from 'react';
import './styles.scss';


function NewProduct() {
    return (
        <section className="newprod-section">
            <div className="newprod-container">
                <div className="newprod-info">
                    <div class="overlay">
                        <h1 className="new-text">NEW PRODUCT</h1>
                        <p className="newprod-name">XX99 MARK II HEADPHONES</p>
                        <p className="newprod-info-text">Experience natural, life-like audio and exceptional build quality made for the passionate music enthusiast.</p>
                    </div>
                </div>
                <div className="newprod-image"></div>
            </div>
        </section>
    )
}

export default NewProduct;
