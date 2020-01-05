import React, { Component } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

export class NavBarLinkButton extends Component {
  
  state = {
    hovered: false
  }

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

  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    });
  }
  
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

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
}

export default NavBarLinkButton