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
      </div>
    </div>
  )
}

const aboutStyle = {
  height: '95vh'
}

const pictureHalfStyle = {
  backgroundColor: 'white',
  height: '100%',
  width: '50%',
  float: 'left',
  textAlign: 'center',
}

const biographyHalfStyle = {
  backgroundColor: 'red',
  height: '100%',
  width: '50%',
  float: 'right'
}

const imageStyle = {
  borderRadius: '50%',
  width: '45vh',
  marginTop: '25vh',
  border: '10px solid red'
}

const aboutHeader = {
  textAlign: 'center',
  marginTop: '2vh',
  fontSize: '5vh',
  textDecoration: 'underline',
  fontFamily: 'Lobster-Two, cursive'
}

export default About;
