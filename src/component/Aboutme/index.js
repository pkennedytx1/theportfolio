import React from "react";
import './style.css';

function Aboutme() {
    return(
        <div>
            <h1 className="title"><b>About Me</b></h1>
            <div className="container" style={{margin: "auto", color: "grey", fontSize: "18px"}}>
                <div className="row">
                    <div className="col s12" style={{textAlign: "center"}}>
                        <span><img alt='Patrick Kennedy' src="/images/Kennedy.jpg" style={{maxHeight: "350px", margin: "20px", borderRadius: '3px'}} /></span>
                    </div>
                    <div className="col s12">
                        <p style={{wordWrap: "break-word", maxWidth: "860px", margin: "auto", textAlign: "justify"}}>
                        <br></br><b>Hello.</b><br></br><br></br>

                        <b style={{color: "#1e88e5"}}>Im, Pat.</b><br></br><br></br>

                        <b>We all start somewhere. For me, my interest in software development started when I was a Molecular Biology major at Texas A&M University studying genomics. I almost failed the class mainly because I chose to spend my time learning how to code in Python rather than do the very structured and boring coursework that was required. This should have been my first indication that perhaps I was pursuing the wrong career. 
                        <br /><br />
                        Once I graduated I realized the Medical School was not what I wanted for my life and I realized that I wanted to become a Software Engineer. After sometime at a Bootcamp I discovered just how complicated, full-filling, and diverse the tech industry is. I spent my time building full stack and serverless applications while discovering new technologies to add to my repertoire. My curiosity and hunger to learn goes deeper than just the code. Discovering new ways to work better as a team, improve efficiency, and maintain a great community are all things I believe are crucial to meeting deadlines and making amazing products. 
                        <br /><br />
                        I am looking for an opportunity to grow my skills and add value to team as Junior Level Software Engineer. I am super excited to be a part of this industry and I am excited for what lies ahead.   
                        </b></p><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col-l12">
                        <div className="social-media" style={{textAlign: "center", padding: "20px 0px 20px 0px", fontSize: "50px"}}>
                            <a id="aboutmelink" rel="noopener noreferrer" href="https://github.com/pkennedytx1" target="_blank"><i className="fab fa-github"></i></a>
                            <a id="aboutmelink" rel="noopener noreferrer" href="https://www.linkedin.com/in/patrick-kennedy-262198170/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;