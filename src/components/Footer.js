import React from "react";

/**
 * Footer.js
 * 
 * Component responsible for generating the Footer of our application
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

function Footer() {
  return (
    <div style={footerStyle}>
      Phone Number: (919)770-2878<br></br>
      Email Address: chriswolfdesign@gmail.com<br></br>
      GitHub: <a style={linkStyle} href="https://www.github.com/chriswolfdesign">https://www.github.com/chriswolfdesign</a><br></br>
      LinkedIn: <a style={linkStyle} href="https://www.linkedin.com/in/chris-wolf-22427017a/">https://www.linkedin.com/in/chris-wolf-22427017a/</a>
    </div>
  )
}

// the style for the entire footer
const footerStyle = {
  backgroundColor: 'purple',
  paddingTop: '1vh',
  paddingLeft: '1vh',
  paddingBottom: '1vh',
  lineHeight: '2.5vh'
}

// the style for the links embedded into the footer
const linkStyle = {
  color: 'white',
  cursor: 'pointer'
}

export default Footer