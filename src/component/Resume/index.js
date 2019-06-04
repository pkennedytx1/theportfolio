import React from 'react';
import './style.css';

function Resume() {
    return(
        <div>
            <h1 className="title"><b>Resume</b></h1>
            <h5 className="title"><a style={{textDecoration: 'none'}} href="/images/Patrick_Kennedy_Resume.pdf" download><i className="fas fa-download"></i> Download</a></h5>
            <div className="resume-header">
                <p>
                <br></br><br></br><br></br><span style={{color: "#1e88e5", fontWeight: "bold", fontSize: "28px"}}>Patrick Kennedy</span><br></br><br></br>
                    Austin, TX 78751<br></br>
                    214-864-6061 | pkennedytx1@gmail.com | pkennedytx1.com<br></br><br></br>
                </p>
            </div>
            <div className="resume-body">
                <span className="underline">Professional Summary</span><br></br><br></br>
                Dedicated and hardworking full stack web developer seeking an entry-level or Jr. level position
                with a background in customer service, industrious problem solving, and a strong work ethic.
                Able to focus for long periods of time as well digest complex material and constantly seek
                resources to refine work flow as well as explain complex information to a variety of audiences.<br></br><br></br>
                <span className="underline">Technologies and Languages</span><br></br><br></br>
                HTML5/HTML, CSS3/CSS, Bootstrop, JavaScript, React, jQuery, MySQL, Google Firebase, Node.js,
                Express, Git Version Control, MongoDB, Redux, GraphQL, Materialize<br></br><br></br>
                <span className="underline">Education</span><br></br><br></br>
                Texas A&M University - College Station, TX<br></br>
                BS, Molecular and Cell Biology (2018)<br></br><br></br>
                University of Texas - Austin, TX<br></br>
                Full Stack Development Coding Bootcamp (2019)<br></br><br></br>
                <span className="underline">Experience</span><br></br><br></br>
                360 Uno
                Barista - (2018-19)<br></br>
                Experience debugging printer malfunctions in multiple parts of the restaurant as well as using
                and optimizing the restaurant POS.<br></br><br></br>
                Academic Success Center<br></br>
                Student Instructor - (2015-18)<br></br>
                Leadership experience by running large group tutoring sessions. Gained skills in teaching
                complex material as well as optimizing massive amounts of material to be digested in a small
                amount of time in the most efficient way possible.<br></br><br></br>
                Vincent Lopez Serafino Jenivein P.C.<br></br>
                Office Assistant - (2014 - 17)<br></br>
                Managed and organized massive amounts of legal data as well as creating a guide to the
                physical database. Scanned and organized large amounts of accounting data and created a
                usable guide to store data in the future.<br></br><br></br>
                <span className="underline">Certificates</span><br></br><br></br>
                Eagle Scout (2014)<br/>
                Boot Camp Certificate (2019)
            </div>
            <p style={{ textAlign: "center", margin: "0 0 100px 0"}}><a href="#top">Back to Top</a></p>
        </div>
    )
}

export default Resume;