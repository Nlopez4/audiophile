import React from 'react';
import './styles.scss';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <section className="footer-section">
            <div className="footer-container">
                    <h1 className="footer-h1">audiophile</h1>
                <div className="footer-icons">
                    <TwitterIcon /> 
                    <InstagramIcon />
                    <FacebookIcon />
                </div>
            </div>
        </section>
    )
}

export default Footer; 