import React, { Component } from "react";

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
      fontSize: "3vh",
      bottom: '0',
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
  
  onClick = () => {
    window.location.assign(this.props.link);
  }

  // generates the JSX for this NavBarLinkButton
  render() {
    return (
      <div
      style={this.getStyle()}
      onMouseEnter={this.toggleHover}
      onMouseLeave={this.toggleHover}
      onClick={this.onClick}>
        {this.props.text}
      </div>
    )
  }
}

export default NavBarLinkButton