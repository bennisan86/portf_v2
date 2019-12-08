import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../svg/logo.svg';
import mail from '../../svg/mail.svg';
import twitter from '../../svg/twitter.svg';
import github from '../../svg/github.svg';

import * as ROUTES from '../../constants/routes';


const Home = () => {
    return(
        <div className="main_container">
        <div className="top_container">
            <div className="top_logo"><img src={logo} alt="Logo" /></div>
            <div className="top_txt">
                <p>I’m <Link to={ROUTES.ABOUT}>Bennisan</Link>, digital designer, focused on interfacing and branding</p>
                <small>(and aspiring <a href="https://www.instagram.com/__bennisan__/" target="blank">graphic novelist</a>).</small>
            </div>
            <div className="sociallinks">
                <div className="sociallink"><a href="mailto:info@bennisan.be?subject=Hi there, Bennisan!"><img src={mail} alt="Logo" /></a></div>
                <div className="sociallink"><a href="https://github.com/bennisan86" target="blank"><img src={github} alt="Logo" /></a></div>
                <div className="sociallink"><a href="https://twitter.com/ben_adriaenssen" target="blank"><img src={twitter} alt="Logo" /></a></div>
            </div>
        </div>
        </div>
    )
}

export default Home;