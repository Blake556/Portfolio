import "../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faReact,
  faNodeJs,
  faNpm,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFile, faDatabase } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="about-container">
      <h1 className="page-title text-center head">About</h1>
      <div className="main-content">
        <div className="about-me-container">
          <div className="header">
            <h3>About me</h3>
          </div>
          <div className="summery about-me">
            <p>
              I am an passionate inspiring front end web developer. "Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="skills-container">
          <div className="header">
            <h3>Skills</h3>
          </div>
          <div className="summery icons d-flex flex-wrap">
         
            <div className="icon-con">
              <FontAwesomeIcon className="skills-icon" icon={faHtml5} size="4x" />
              <p>html</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon
                className="skills-icon"
                icon={faCss3Alt}
                size="4x"
              />
              <p>css</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon className="skills-icon" icon={faJs} size="4x" />
              <p>javaScript</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon
                className="skills-icon"
                icon={faBootstrap}
                size="4x"
              />
              <p>bootstrap</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon className="skills-icon" icon={faReact} size="4x" />
              <p>react</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon
                className="skills-icon"
                icon={faNodeJs}
                size="4x"
              />
              <p>node</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon className="skills-icon" icon={faNpm} size="4x" />
              <p>npm</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon
                className="skills-icon"
                icon={faGitAlt}
                size="4x"
              />
              <p>git</p>
            </div>
            <div className="icon-con">
              <FontAwesomeIcon
                className="skills-icon"
                icon={faGithub}
                size="4x"
              />
              <p>github</p>
            </div>
          </div>

          <div className="summery skills-summery">
            <p>
              I am an passionete inspiring front end web developer. "Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>

        <div className="resume-container">
          <div className="header">
            <h3>Resume</h3>
          </div>
          <div className="summery-resume">
            <a href="/path/to/resume.pdf" download>
              <span className="d-text download">Download</span>
              <FontAwesomeIcon icon={faFile} className="download" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
