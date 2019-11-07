import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './style.css';

function Landing() {
    return(
        <div className="landing">
            <ScrollAnimation animateIn='fadeInLeft'>
                <h2><b>Hello, I'm Pat</b></h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight'>
                <h3>I'm a <b><i>Software Engineer</i></b></h3>
            </ScrollAnimation>
            <br></br>
            <ScrollAnimation delay={1300} animateIn='fadeIn'>
                <div className="buttons">
                    <div id='linkone'>
                        <Link className="waves-effect waves-light blue darken-1 btn-large z-depth-0" to="/resume"><b>Resume</b></Link>
                        <Link className="waves-effect waves-light blue darken-1 btn-large z-depth-0"to="/portfolio"><b>Portfolio</b></Link>
                    </div>
                    <div id='linktwo'>
                        <a href="https://github.com/pkennedytx1" rel="noopener noreferrer" target="_blank" className="waves-effect waves-light blue darken-1 btn-large z-depth-0"><i className="fab fa-github-square"></i></a>
                        <a href="https://www.linkedin.com/in/patrick-kennedy-262198170/" rel="noopener noreferrer" target="_blank" className="waves-effect waves-light blue darken-1 btn-large z-depth-0"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Landing;