import React from "react";

/**
 * Resume.js
 * 
 * Component responsible for generating the resume section of my webpage
 * 
 * @author Chris Wolf
 * @version 1.0.0 (January 5, 2019)
 */

function Resume() {
  return (
    <div style={resumeStyle}>
      <div>
        If you would prefer to view the PDF of this resume,
        please <a style={linkStyle} href="https://drive.google.com/file/d/1McZOkMrNx_BpwTPsfUVbKvP5_bWYTSwt/view?usp=sharing">click here.</a>
      </div>
      <div style={resumeHeader}>
        Resume for Christopher R. Wolf
      </div>
      <div style={contactInfoStyle}>
        (919)770-2878<br></br>
        chriswolfdesign@gmail.com
      </div>
      <div style={resumeContent}>
        <div style={topicHeader}>
          Education
        </div>
        <div>
          Bachelor of Science in Computer Science from Western Carolina University -- Expected May 2020<br></br>
          Bachelor of Arts in Music Education from Western Carolina University 
          -- May 2015
        </div>
        <div style={topicHeader}>
          Related Work Experience
        </div>
        <div>
          Computer Science Tutor -- January 2019 - present
          <ul>
            <li>Taught the CS 150 and CS 151 Lab Projects</li>
            <li>Tutor students individually as they encounter difficult 
              material
            </li>
            <li>Provide a workshop for beginning students covering topics such
              as: vim, tmux, and basic Linux commands
            </li>
          </ul>
          <br></br>
          Software Development Intern at SAW Software -- May 2019 - August 2019
          <ul>
            <li>Assist in the development of new features for clients</li>
            <li>
              Assist in the sprint planning and dissection of user stories
            </li>
            <li>Participate in weekly reviews and retrospectives</li>
          </ul>
          <br></br>
          Director of Bands at Southern Lee High School -- July 2016 - June 2018
          <ul>
            <li>
              Prepare band, choir, and orchestra programs for concert performances
            </li>
            <li>
              Educate 9th-12th grade students according to the North Carolina
              State Standards for Music Education
            </li>
          </ul>
        </div>
        <div style={topicHeader}>
          Relevant Projects
        </div>
        <div>
          <div style={projectStyle}>
            Grade DataBase -- Bash, AWK, LATEX<br></br>
            &#183; Bash Script that allows the user to generate a gradebook
            database
            <div style={projectSeparators}></div>
            Multi-player Battleship -- socket programming, TCP Network Protocol,
            threading, one server managing multiple clients
            <div style={projectSeparators}></div>
            Chess-Meister -- Factory and Observer Patterns, JavaFX GUI 
            Development
            <br></br>
            &#183; Basic Chess application played in a GUI environment
            <div style={projectSeparators}></div>
            Simple Language Interpreter -- C Programming Language, 
            Lexical Analyzer, Parser<br></br>
            &#183; A syntactial analyzer the could read and compile simple
            mathematical operations
            <div style={projectSeparators}></div>
            Agile Development Board -- Web Development, Long-term Agile 
            Practices, Software Architecture<br></br>
            &#183; A project management board that allows users to track 
            progress
          </div>
          <div style={topicHeader}>
            Additional Qualifications and Interests
          </div>
          Proficient Programming Languages: Java, JavaScript<br></br>
          Familiar Programming Languages: Python, C<br></br>
          Experience in Agile Development Strategies and Philosophies such as
          SCRUM, Kanban, and Test-Driven Development<br></br>
          Experience in Linux command line environments<br></br>
          Member of the 2019 WCU Competitive Programming Team<br></br>
          Interest in Open-Source Software<br></br>
          Interest in Command Line Tools such as vim, tmux, etc.
        </div>
      </div>
    </div>
  );
}

// style for the entire page
const resumeStyle = {
  marginTop: '5vh',
  paddingLeft: '2vh',
  paddingRight: '2vh'
};

// style for the embedded links
const linkStyle = {
  color: 'white',
}

// style for the header of the resume
const resumeHeader = {
  fontFamily: 'Lobster-Two, cursive',
  fontSize: '4vh',
  textAlign: 'center',
  textDecoration: 'underline'
}

// style for the body of the resume
const resumeContent = {
  paddingLeft: '5vh',
  paddingBottom: '4vh'
}

// style for each individual section header of the resume
const topicHeader = {
  fontWeight: 'bold',
  textDecoration: 'underline',
  paddingTop: '3vh',
  paddingBottom: '2vh',
  fontSize: '3vh'
}

// style for the contact section of the resume
const contactInfoStyle = {
  textAlign: 'center'
}

// style for the project section of the resume
const projectStyle = {
  lineHeight: '2.5vh'
}

// style for the seperators between each project
const projectSeparators = {
  height: '1.5vh'
}

export default Resume;
