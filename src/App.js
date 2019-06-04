import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './component/Landing';
import Wrapper from './component/Wrapper';
import Aboutme from './component/Aboutme';
import Resume from './component/Resume';
import Projects from './component/Projects';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <Router basename='/theportfolio'>
    <div id="top" className="App">
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Projects} />
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;
