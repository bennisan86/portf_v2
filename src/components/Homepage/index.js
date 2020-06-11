import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

import logo from '../../svg/logo.svg';
import mail from '../../svg/mail.svg';
import twitter from '../../svg/twitter.svg';
import github from '../../svg/github.svg';

import * as ROUTES from '../../constants/routes';


class Home extends Component {



    componentDidMount(){
        //Timeout for scrolling to top after animatiob
    }
    // window.scrollTo(0, 0);

    render(){
    const projects = this.props.projects;
    console.log(projects);
    return( 
        <div className="main_container" >
            {/* <img alt="timer" src={require('../../covers/'+name+'.png')} /> */}

            <div className="top_container">
                <div className="top_logo"><Link to={ROUTES.ABOUT}><img src={logo} alt="Logo" /></Link></div>
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
            {projects &&
            <>
                <div className="project_container">
                    {projects.map((project,index) => (
                        <div className="project_tile" key={index} onClick={() => this.props.toDetail(index)}>
                            <img alt={project.name+"cover"} src={require('../../covers/'+project.name+'.png')} />
                        </div>
                    ))}
                </div>
                <Footer />
            </>}
            {/* {loading ? <div className="project_container_loading"><p>Loading projects...</p></div> :
            <>
                <div className="project_container">
                    {covers.map((cover,index) => (
                        <div className="project_tile" key={index} onClick={() => this.props.toDetail(index)}>
                            <img src={cover} alt='' />
                        </div>
                    ))}
                </div>
                <Footer />
            </>} */}
        </div>
    );
    }
}

export default Home;