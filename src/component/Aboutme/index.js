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

                        <b>I’m a Full Stack Web Developer living in Austin, TX. With a background in Molecular Biology,
                        I have exposure to complex concepts and logical reasoning as well as having a large aptitude 
                        for learning and discovering new things. I can work efficiently in a team setting and power 
                        through long term individual work. I can bring diverse reasoning, team support, and a hard 
                        working positive attitude towards hard problems and difficult situations. I am currently 
                        looking for a full-time or contract position as a Jr. Full Stack Web Developer or a similar 
                        position. I would love to show you who I am and what I can offer a development team.
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