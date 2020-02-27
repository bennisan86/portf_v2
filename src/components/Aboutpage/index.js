import React, { Component } from 'react';
import Footer from '../../components/Footer';

import backarrow from '../../svg/backarrow.svg';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import CV from '../../documents/Bennisan_CV.pdf';
import benadriaenssen from '../../imgs/IMG_1051.png';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount(){
        //Timeout for scrolling to top after animatiob
        setTimeout(
            function() {
                window.scrollTo(0, 0);
            },
            300
        );
    }
    render(){

        return (
            <div className="detail_container">
                    <div className="backarrow">
                        <Link to={ROUTES.HOME}>
                            <img src={backarrow} alt='Arrow to left, as back button' />
                        </Link>
                    </div>
                    <div className="detailtop_container">
                    <img className="avatar_img" src={benadriaenssen} alt="Ben Adriaenssen profile"/>
                    <div className="detailtop_txt">
                        <p className="detailtop_title">About me</p>
                        <p className="detailtop_body">As a designer, I've always been most fascinated by the interactive side of communication. From an early stage I thought myself just enough coding to bring my designs to life, a habbit I've kept until this day. Throughout my career I've evolved from a general graphic designer to specifing more on the digital realm, shaping anything from brands, websites, apps, games, and everything in between, into clear communications carriers.<br /><br />Having a strong moral compass, I feel best when I can utizile my skills for a just cause, something I've been actively persuing throughout my career.</p>
                        <div className="linkbutton"><a href="mailto:info@bennisan.be?subject=Hi there, Bennisan!" target="blank">Let's connect!</a></div>
                    </div>
                </div>
                <div className="detailtop_container dotted">
                    <div className="about_me">
                        <p>Ben Adriaenssen</p>
                        <small>Nieuwe Donk 28<br />2100 Deurne</small><br /><br />
                        <small>BTW 0723.439.460<br />BE96 0636 6284 6505</small><br /><br />
                        <a href={CV} target="blank">Check my resumé</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default About;