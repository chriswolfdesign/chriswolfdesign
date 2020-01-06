import React, { Component } from "react";

/**
 * Contact.js
 * 
 * Component responsible for sending emails to me
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 6, 2020)
 */

export class Contact extends Component {

  state = {
    name: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  }

  // handles the state when user types into the name field
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  // handles the state when user types into the email address field
  handleChangeEmailAddress = (event) => {
    this.setState({
      emailAddress: event.target.value
    });
  }

  // handles the state when the user types into the phone number field
  handleChangePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  // handles the state when the user types into the message field
  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  // handles the state when the user clicks on the Submit button
  onClick = (event) => {
    event.preventDefault();
    if (this.state.name !== '' && this.state.emailAddress !== '' &&
        this.state.message !== '') {
          console.log(this.state);
          window.location.assign('/messageReceived');
    } else {
      alert('Please enter your name, email address, and message to send.');
    }
  }

  // generates the JSX for this component
  render() {
    return (
      <div className="form-group" style={contactStyle}>
        <form>
          <label htmlFor="name">Name: required</label>
          <input style={inputStyle} type="text" onChange={this.handleChangeName} className="form-control" id="name" value={this.state.name}></input>
          <label htmlFor="phoneNumber">Phone Number: not required</label>
          <input style={inputStyle} type="text" onChange={this.handleChangePhoneNumber} className="form-control"  id="phoneNumber" value={this.state.phoneNumber}></input>
          <label htmlFor="emailAddress">Email Address: required</label>
          <input style={inputStyle} type="text" onChange={this.handleChangeEmailAddress} value={this.state.emailAddress} className="form-control"  id="emailAddress"></input>
          <label htmlFor="message">Message: required</label>
          <input style={inputStyle} type="text" onChange={this.handleChangeMessage} value={this.state.message} className="form-control" 
          id="message"></input>
          <button className="btn btn-primary" onClick={this.onClick}>Submit <i 
          className="fa fa-paper-plane"></i></button>
        </form>
      </div>
    );
  }
}

// style for the entire component
const contactStyle = {
  marginTop: '5vh',
  paddingTop: '2vh',
  height: '82vh',
  paddingLeft: '10vh',
}

// style for the input fields
const inputStyle = {
  marginBottom: '2vh',
  width: '50vh'
}

export default Contact