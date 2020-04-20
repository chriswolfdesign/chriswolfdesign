import React from "react";

/**
 * MessageReceived.js
 * 
 * Component responsible for generating the message received JSX when
 * a user sends me a message
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 6, 2020)
 */

function MessageReceived() {
  return (
    <div style={messageReceivedStyle}>
      <div>
        Your message has been sent.
      </div>
      <div>
        Thank you for contacting me, I will respond as soon as I can.
      </div>
      <div>
        ~ Chris
      </div>
    </div>
  )
}

// style for this component
const messageReceivedStyle = {
  marginTop: '5vh',
  height: '84vh',
  fontSize: '5vh',
  paddingLeft: '3vh',
  paddingRight: '3vh',
  textAlign: 'center'
};

export default MessageReceived;
