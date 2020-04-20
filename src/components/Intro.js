import React from "react";
import background from '../images/CodeImage.png';

/**
 * Intro.js
 * 
 * Component responsible for the introduction of our application
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

function Intro() {
  return (
    <div style={introStyle}>
      <div style={introTextStyle}>
        <div style={welcomeStyle}>
          Welcome to Chris Wolf Design!
        </div>
        <div style={aspirationStyle}>
          Aspiring developer, designer, programmer
        </div>
      </div>
    </div>
  )
}

// style for the entire intro
const introStyle = {
  marginTop: '3%',
  height: '95vh',
  background: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
}

// style for the text of the entire intro
const introTextStyle = {
  color: '#04DCD5',
  width: '100%',
  textAlign: 'center',
  paddingTop: '20%'
}

// style for the welcome message
const welcomeStyle = {
  fontSize: '4vw',
  textDecoration: 'underline',
  fontFamily: 'Lobster-Two, cursive'
}

// style for the aspirations
const aspirationStyle = {
  fontSize: '1.5vw',
  marginTop: '-1%'
}

export default Intro;
