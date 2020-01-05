import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import TechnologyList from './components/TechnologyList';
import Intro from './components/Intro';
import About from './components/About';
import Footer from './components/Footer';

/**
 * App.js
 * 
 * The entry point to our application
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <TechnologyList />
      <Router>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Intro />
            <About />
          </React.Fragment>
        )} />
        <Footer />
      </Router>
    </div>
  );
}

// style for our App
const appStyle = {
  color: 'white'
}

export default App;
