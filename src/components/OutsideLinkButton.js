import React, { Component } from "react";
import PropTypes from "prop-types";

export class OutsideLinkButton extends Component {
  state = {
    hovered: false
  };

  getStyle = () => {
    return {
      cursor: "pointer",
      padding: "10px",
      fontSize: "16px",
      backgroundColor: this.state.hovered ? "blue" : "purple",
      color: "white",
      textDecoration: "none",
      lineHeight: "25px"
    };
  };

  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    });
  };

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

OutsideLinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default OutsideLinkButton;
