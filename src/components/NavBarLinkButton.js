import React, { Component } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

/**
 * NavBarLinkButton.js
 * 
 * A component that exists in our header and is used to take us somewhere 
 * either inside or outside of our application
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

export class NavBarLinkButton extends Component {
  
  // the state of our NavBarLinkButton
  state = {
    hovered: false
  }

  // generates the style for NavBarLinkButton
  getStyle = () => {
    return {
      cursor: "pointer",
      fontSize: "2vw",
      backgroundColor: this.state.hovered ? "blue" : "purple",
      display: "inline-block",
      paddingBottom: '0',
      paddingLeft: '2vh',
      paddingRight: '2vh',
      margin: "0px",
      height: '100%',
      paddingTop: '-1vh'
    }
  }

  // toggles whether or not this NavBarLinkButton is being hovered over
  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    });
  }
  
  // generates the JSX for this NavBarLinkButton
  render() {
    return (
      <div
      style={this.getStyle()}
      onMouseEnter={this.toggleHover}
      onMouseLeave={this.toggleHover}>
        <Router>
          <Link style={linkStyle} to={this.props.link}> {this.props.text}</Link>
        </Router>
      </div>
    )
  }
}

// the style for the embedded links
const linkStyle = {
  color: 'white',
  textDecoration: 'none'
}

export default NavBarLinkButton