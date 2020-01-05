import React from 'react';
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
      <Intro />
      <About />
      <Footer />
    </div>
  );
}

// style for our App
const appStyle = {
  color: 'white'
}

export default App;
