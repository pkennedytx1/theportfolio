import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
import './style.css';
import M from "materialize-css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }

  componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  }

  render() {

  return (
        <div>
            <nav className="z-depth-0">
                <div className="nav-wrapper blue darken-1">
                <Link style={{ padding: "0 0 0 15px" }}className="brand-logo" to="/"><b>Patrick Kennedy</b></Link>
                <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/resume"><b>Resume</b></Link></li>
                    <li><Link to="/aboutme"><b>About Me</b></Link></li>
                    <li><Link to="/portfolio"><b>Portfolio</b></Link></li>
                    <li><Link to='#!' onClick={() => this.openModal()}><b>Contact Me</b></Link></li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/aboutme">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><a href='#!' onClick={() => this.openModal()}>Contact Me</a></li>
            </ul>

            <Modal visible={this.state.visible} width="400" height="300" effect="fadeInDown" onClickAway={() => this.closeModal()}>
              <div style={{position: 'relative', margin: '50px 30px 0 30px'}}>
                <h1 className='blue-text'><b>REACH</b>ME</h1>
                <div style={{width: '30%'}}>
                  <hr/>
                </div>
                <h5 className='blue-text'><b><i><i style={{verticalAlign: 'middle'}} className="small material-icons">send</i> pkennedytx1@gmail.com</i></b></h5>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/patrick-kennedy-262198170/" target="_blank" ><h5 className='blue-text' ><b>Linked</b><i className="fab fa-linkedin"></i></h5></a>
                <button className='blue-text' style={{position: 'absolute', top: '-35px', right: '-10px', border: 'none', cursor: 'pointer'}} href={null} onClick={() => this.closeModal()}>Close</button>
              </div>
          </Modal>
        </div>
      ) 
    }
  }

export default Navbar;