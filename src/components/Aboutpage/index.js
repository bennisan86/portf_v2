import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <div className="page about">
            <h1>About</h1>
            <Link to="/">Take me home, country roads!</Link>
            <p>Wawawiewa King in the castle I have a chair!</p>
        </div>
    )
}

export default About;