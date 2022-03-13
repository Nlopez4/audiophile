import React from 'react';
import './styles.scss';
import AboutImg from '../../images/image-best-gear.jpg';

function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-info">
                    <h1 className="about-h1">Bringing you the <span>best</span> audio gear </h1>
                    <p className="about-p">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="about-img-container">
                    <img className="about-img" src={AboutImg} alt ="Individual with headphones" />
                </div>
            </div>
        </section>
    )
}

export default About; 