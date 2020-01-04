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
  // marginTop: "-25px"
};

export default Header;
