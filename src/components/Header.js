import React, { Component } from "react";
import NavBarButton from "./NavBarButton";

/**
 * Header.js
 * 
 * Component responsible for generating the header at the top of the page
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

export class Header extends Component {

  // toggles whether or not the technology list is visible
  toggleTechnologyVisibility = () => {
    let div = document.getElementById('technologyList');
    if (div.style.display === 'block') {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  }

  // renders the JSX for the header
  render() {
    return (
      <div style={headerStyle}>
        <NavBarButton text={"Technology"} function={this.toggleTechnologyVisibility}/>
      </div>
    );
  }
}

// style for our Header
const headerStyle = {
  backgroundColor: "purple",
  fontSize: "24px",
  position: 'fixed',
  top: 0,
  width: "100%",
  height: "5%"
};

export default Header;
