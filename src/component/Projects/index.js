import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './style.css';

class Projects extends React.Component {
    
    render() {
        return (
            <div>
                <h1 className="title"><b>Portfolio</b></h1>
                <div className='container'>
                    <div className="row">
                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='Task Trader' className='activator' src="images/tasktrader.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>Task Trader</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                    <span className="card-title grey-text text-darken-4"><b>Task Trader</b><i className="material-icons right">close</i></span>
                                    <p>Task Trader is a Full Stack web application that allows real estate agents within a brokerage to post jobs for hire.<br /><br />
                                    Technologies: MERN, Redux, GraphQL, Passport<br /><br />
                                    More Information: This project was done in a group of 4. The largest hurdle in this project was setting up GraphQL and getting it up and running.
                                    This project is not at production level. Note that several more feautures were desired, the purpose of this application is to show the ability to use new technologies as well as woring in a group to accomplish a goal.
                                    </p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://github.com/nolanglenn/project3" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fab fa-github"></i></a>
                            <a style={{position: 'absolute', top: '70px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://task-trader.herokuapp.com" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>

                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='Morning Coffee' className='activator' src="images/morningcoffee.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>Morning Coffee</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                <span className="card-title grey-text text-darken-4">Morning Coffee<i className="material-icons right">close</i></span>
                                    <p>Morning coffee is a full stack web application that gives users a morning dashboard meant to be used for the duration of enjoying that first cup of coffee.<br /><br />
                                    Technologies: MySQL Database, Express, Node, Passport<br /><br />
                                    More Information: This project was done in a group of 4. The largest hurdle was implementing the login system as well as placing the API's on the backend.
                                    This application is not at production level but is meant to show the ability to work in a group to accomplish a project goal as well as implementing new technologies. Note that there is full CRUD functionality with the note widget that is available on the application.</p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://github.com/theAndes/Project-2" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fab fa-github"></i></a>
                            <a style={{position: 'absolute', top: '70px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://morning-coffee-project-2.herokuapp.com" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='Google Book Search' className='activator' src="images/googlebooks.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>Google Books</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                    <span className="card-title grey-text text-darken-4"><b>Google Books Search</b><i className="material-icons right">close</i></span>
                                    <p>Google Books Search is a full stack web application that allows a user to find a book on google books and either save it for later or a link to purchase it.<br /><br />
                                    Technologies: MERN<br /><br />
                                    More Information: This project is intended to show usage of a google API as well as running a full stack application. Note the toast notification when you add a book. You can save books in the MongoDB and view them later. 
                                    This application would be improved if a login system could be implemented to allow multiple users to use this app. 
                                    </p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://github.com/pkennedytx1/book-search" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fab fa-github"></i></a>
                            <a style={{position: 'absolute', top: '70px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://guarded-basin-51698.herokuapp.com/" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>

                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='Kennemer Sound' className='activator' src="images/josephkenemmer.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>Kenemmer Sound</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                <span className="card-title grey-text text-darken-4">Kennemer Sound<i className="material-icons right">close</i></span>
                                    <p>I created this website per request of friend. He is a freelance post-production audo specialist and needed a website. He uses the site to network as well as a place to easily host his reel and projects he has worked on.
                                    This is a deployed website being used and is fully functional. This is a basic portfolio web site.
                                    </p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://josephkennemer.com" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='Avatar Clicky Game' className='activator' src="images/avatarmemory.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>Avatar Clicky Game</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                    <span className="card-title grey-text text-darken-4"><b>Avatar Clicky Game</b><i className="material-icons right">close</i></span>
                                    <p>This is a simple game using React. This is designed to show the usage of map functions and dynamic rendering. The hardest part of this was by far to get the randomization working with the rendering of each character card.<br /><br />
                                    Technologies: React<br /><br />
                                    </p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://github.com/pkennedytx1/Clicky-game" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fab fa-github"></i></a>
                            <a style={{position: 'absolute', top: '70px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://pkennedytx1.github.io/Clicky-game/" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>

                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='The Satire' className='activator' src="images/thesatire.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>The Satire</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                <span className="card-title grey-text text-darken-4"><b>The Satire</b><i className="material-icons right">close</i></span>
                                    <p>This project is not a production application but designed to demonstrate scraping and compilation of data from other websites. This build also shows the use of a non-realtional database (MongoDB) to handle the scrapped data. In this case the application 
                                        is designed to be a weekly update where people can discuss politics in a more comical atmosphere. This update is actually a administrator scraping the Onion political satire news based on a category defined by the URL. There is a commenting section and 
                                        places to add notes for each article.<br /><br />
                                        Technologies: Express, Node.js<br/><br /></p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://github.com/pkennedytx1/Satire-app" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fab fa-github"></i></a>
                            <a style={{position: 'absolute', top: '70px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://evening-sierra-67745.herokuapp.com/scrapepolitics" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='Friends Finder' className='activator' src="images/friendsfinder.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>Friends Finder</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                    <span className="card-title grey-text text-darken-4"><b>Friends Finder</b><i className="material-icons right">close</i></span>
                                    <p>A simple buzzfeed style quiz that determines which friends character you are most like.<br /><br />
                                        Technologies: Node, Express<br /><br />
                                    </p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://github.com/pkennedytx1/friend_finder" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fab fa-github"></i></a>
                            <a style={{position: 'absolute', top: '70px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://sheltered-brushlands-17107.herokuapp.com/" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>

                        <div style={{position: 'relative'}} className="col s12 m6">
                        <ScrollAnimation animateIn="fadeIn">
                            <div style={{zIndex: '1'}} className="card">
                                <div className="card-image">
                                    <img alt='Halfway Hangouts' className='activator' src="images/halfwayhangouts.png" />
                                    <h4 className='blue' style={{textAlign: 'center', width: '100%', padding: '0 5px 0 5px', position: 'absolute', bottom: '30px', color: 'white'}}><b>Halfway Hangouts</b></h4>
                                </div>
                                <div style={{zIndex: '2'}} className='card-reveal'>
                                <span className="card-title grey-text text-darken-4">Halfway Hangouts<i className="material-icons right">close</i></span>
                                <p>A collaborative application that calculates the halfway point between 2 people and gives back locations within half a mile of the halfway location. Login functionality and saved places are available for users to revisit and use as needed.<br /><br />
                                    Technologies: JavaScript, jQuery, FireBase<br /><br />
                                    More Information: My primary role was in the consumption and implementation of the HERE map API documentation. I built the map interface and the functions that take both addreses, convert them to geolocations, find the mid point for use in determining the midpoint places.</p>
                                </div>
                            </div>
                            <a style={{position: 'absolute', top: '20px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://github.com/carlyseitz817/Halfway-Hangouts" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fab fa-github"></i></a>
                            <a style={{position: 'absolute', top: '70px', right: '-9px', zIndex: '3', fontSize: '24px'}} rel="noopener noreferrer" target='_blank' href="https://carlyseitz817.github.io/Halfway-Hangouts/" className="btn-floating btn-medium waves-effect waves-light blue"><i className="fas fa-image"></i></a>
                        </ScrollAnimation>
                        </div>
                    </div>
                </div>
                
                <p style={{ textAlign: "center", margin: "0 0 50px 0"}}><a href="#top">Back to Top</a></p>      
            </div>
        )
    }
}

export default Projects;