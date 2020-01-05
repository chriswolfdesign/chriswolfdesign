import React from "react";
import LinkButton from "./LinkButton";

/**
 * TechnologyList.js
 * 
 * Component responsible for generating the technology list on the side of the
 * page
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2020)
 */

function TechnologyList() {
  return (
    <div id="technologyList" style={technologyListStyle}>
      <LinkButton
        text="Visual Studio Code"
        link="https://code.visualstudio.com"
      />
      <LinkButton text="GitHub" link="https://www.github.com" />
      <LinkButton text="ReactJS" link="https://reactjs.org" />
      <LinkButton text="Heroku" link="https://www.heroku.com" />
    </div>
  );
}

// style for our TechnologyList
const technologyListStyle = {
  backgroundColor: "purple",
  color: "white",
  marginTop: "2.8%",
  width: "10%",
  height: "150vh",
  position: "fixed",
  fontSize: '2vw',
  top: 0,
  left: 0,
  display: 'none'
};

export default TechnologyList;
