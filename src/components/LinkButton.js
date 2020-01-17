import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * LinkButton.js
 * 
 * Component responsible for buttons that will lead us to somewhere, inside or
 * outside of our application
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

export class LinkButton extends Component {

  // the state of our OutsideLinkButton
  state = {
    hovered: false
  };

  // generates the style for our OutsideLinkButton based on its state
  getStyle = () => {
    return {
      cursor: "pointer",
      marginBottom: "10px",
      fontSize: "2vh",
      backgroundColor: this.state.hovered ? "blue" : "purple",
      color: "white",
      textDecoration: "none",
      lineHeight: "25px"
    };
  };

  // toggles whether or not our OutsideLinkButton is being hovered over
  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    });
  };

  // renders the JSX for our OutsideLinkButton
  render() {
    return (
      <div
        style={this.getStyle()}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <a style={this.getStyle()} href={this.props.link}>
          {this.props.text}
        </a>
      </div>
    );
  }
}

// defines the types that each of our properties must be
LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default LinkButton;
