import React, { Component } from "react";
import NavBarButton from "./NavBarButton";

export class Header extends Component {

  toggleTechnologyVisibility = () => {
    let div = document.getElementById('technologyList');
    if (div.style.display === 'block') {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  }

  render() {
    return (
      <div style={headerStyle}>
        <NavBarButton text={"Technology"} function={this.toggleTechnologyVisibility}/>
      </div>
    );
  }
}

const headerStyle = {
  backgroundColor: "purple",
  fontSize: "24px",
  position: 'fixed',
  top: 0,
  width: "100%",
  height: "5%"
};

export default Header;
