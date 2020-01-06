import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div style={contactStyle}>
        Hi, it's me! A Contact boi!!!
      </div>
    );
  }
}

const contactStyle = {
  marginTop: '5vh',
  paddingTop: '2vh',
  height: '83vh'
}

export default Contact