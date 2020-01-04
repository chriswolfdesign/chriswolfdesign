import React, { Component } from "react";
import NavBarButton from "./NavBarButton";

export class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <NavBarButton text={"Technology"} />
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
