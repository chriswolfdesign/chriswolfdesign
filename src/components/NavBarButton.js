import React, { Component } from "react";
import PropTypes from 'prop-types';

/**
 * NavBarButton.js
 * 
 * Component responsible for generating a button in our navigation bar (header)
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

export class NavBarButton extends Component {
  // the state of our component
  state = {
    hovered: false
  }

  // generates the style of our NavBarButton based on our state
  getStyle = () => {
    return {
      cursor: "pointer",
      fontSize: "2vw",
      backgroundColor: this.state.hovered ? "blue" : "purple",
      display: "inline-block",
      paddingBottom: '0',
      margin: "0px",
      height: '100%'
    };
  };

  // toggles whether or not the NavBarButton is being hovered over
  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    });
  };

  // renders the JSX for our NavBarButton
  render() {
    return (
      <div
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={this.props.function}
        style={this.getStyle()}
      >
        {this.props.text}
      </div>
    );
  }
}

// defines what type each of our properties must be
NavBarButton.propTypes = {
  text: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired
}

export default NavBarButton;
