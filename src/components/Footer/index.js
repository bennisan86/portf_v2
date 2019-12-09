import React from 'react';
import logo from '../../svg/logo_white.svg';
import github from '../../svg/github_white.svg';
import twitter from '../../svg/twitter_white.svg';

const Footer = () => {
    return (
    <>
        <div className="footer_container">
            <div className="footer_logo">
                <img src={logo} alt="Bennisan logo small"></img>
            </div>
            <div className="footer_txt">
                <p>+32 485 51 41 55</p>
                <a href="mailto:info@bennisan.be?subject=Hi there, Bennisan!">ben@bennisan.be</a>
            </div>
            <div className="sociallinks">
                <div className="sociallink"><a href="https://github.com/bennisan86" target="blank"><img src={github} alt="Logo" /></a></div>
                <div className="sociallink"><a href="https://twitter.com/ben_adriaenssen" target="blank"><img src={twitter} alt="Logo" /></a></div>
            </div>
        </div>
        <div className="footer_closer">
            <p>	&#9400; 2019</p>
        </div>
    </>
    )
}
export default Footer;
