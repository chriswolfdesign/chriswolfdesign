import React from "react";
import aboutPicture from '../images/aboutPicture.jpg';

/**
 * About.js
 *
 * Component responsible for generating the About section of our application
 *
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

function About() {
  return (
    <div style={aboutStyle}>
      <div style={pictureHalfStyle}>
        <img style={imageStyle} src={aboutPicture} alt="profile-pic"></img>
      </div>
      <div style={biographyHalfStyle}>
        <div style={aboutHeader}>
          About Chris
        </div>
        <div style={aboutContents}>
          <p>
            Chris is a Computer Science student at Western Carolina University.
            He has studied numerous topics such as Networking, Advanced Linux
            Tools, Data Structures and Algorithms, and Software Development 
            strategies.  During his personal study time, Chris likes to work on
            his own independent projects.  Some of the projects include this
            portfolio web page, game development, machine learning, and mobile
            applications.
          </p>
          <p>
            During the summer of 2019, Chris was fortunate to have the 
            opportunity to serve as a Software Development Intern at SAW
            Software.  During his time here, he assisted in the development of
            features, participate in code reviews and SCRUM meetings, and work
            with his colleagues in pair-programming endeavors.
          </p>
          <p>
            Upon graduation in May of 2020, Chris is looking to move to Raleigh,
            NC to start his career in software development.  Chris is open to
            participating in any software endeavors but holds a particular 
            interest in mobile applications, web development, game development,
            and the creation of artificially intelligent software.
          </p>
          <p>
            Chris currently resides in Cullowhee, NC with his girlfriend, 
            Samantha, and their dog, Lily.
          </p>
        </div>
      </div>
    </div>
  )
}

// the background color "scheme" of this component
const backgroundColorTheme = '#891A1A'

// style for the entire About component
const aboutStyle = {
  minHeight: '100vh',
  overflow: 'auto'
}

// style for the picture side of the component
const pictureHalfStyle = {
  height: '100%',
  width: '50%',
  float: 'left',
  textAlign: 'center',
}

// style for the biography side of the component
const biographyHalfStyle = {
  backgroundColor: backgroundColorTheme,
  height: '100vh',
  width: '50%',
  float: 'right'
}

// style for the image
const imageStyle = {
  borderRadius: '50%',
  width: '50%',
  height: 'auto',
  marginTop: '20%',
  border: '6px solid ' + backgroundColorTheme
}

// style for the header of the about biography
const aboutHeader = {
  textAlign: 'center',
  marginTop: '2vh',
  fontSize: '5vh',
  textDecoration: 'underline',
  fontFamily: 'Lobster-Two, cursive'
}

// style for the contents of the about biography
const aboutContents = {
  fontSize: '2vh',
  paddingLeft: '5vh',
  paddingRight: '5vh'
}

export default About;
