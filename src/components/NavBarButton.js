import React, { Component } from "react";
import "../styles.css";

export class NavBarButton extends Component {
  state = {
    hovered: false
  }

  getStyle = () => {
    return {
      cursor: "pointer",
      fontSize: "3.5vh",
      backgroundColor: this.state.hovered ? "blue" : "purple",
      display: "inline-block",
      paddingBottm: '-0.1%',
      margin: "0px",
      height: '100%'
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

export default NavBarButton;
