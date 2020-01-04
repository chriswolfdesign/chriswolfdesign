import React, { Component } from "react";
import "../styles.css";

export class NavBarButton extends Component {
  state = {
    hovered: false
  }

  getStyle = () => {
    return {
      cursor: "pointer",
      fontSize: "24px",
      backgroundColor: this.state.hovered ? "blue" : "purple",
      display: "inline-block",
      padding: "5px",
      margin: "0px"
    };
  };

  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    });
  };

  navBarButtonClicked= () => {
    console.log(this.props.text + ' has been clicked!');
  }

  render() {
    return (
      <div
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={this.navBarButtonClicked}
        style={this.getStyle()}
      >
        {this.props.text}
      </div>
    );
  }
}

export default NavBarButton;
