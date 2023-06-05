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
    <div className="container">
      <h1 className="page-title text-center">About</h1>
      <div className="main-content">
        <div className="about-me-container">
          <div className="header">
            <h3>About me</h3>
          </div>
          <div className="summery about-me">
            <p>
              I am an passionete inspiring front end web developer. "Lorem ipsum
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
          <div className="summery icons">
            <div>
              <FontAwesomeIcon className="skills-icon" icon={faHtml5} size="5x" />
              <p>html</p>
            </div>
            <div>
              <FontAwesomeIcon
                className="skills-icon"
                icon={faCss3Alt}
                size="5x"
              />
              <p>css</p>
            </div>
            <div>
              <FontAwesomeIcon className="skills-icon" icon={faJs} size="5x" />
              <p>javaScript</p>
            </div>
            <div>
              <FontAwesomeIcon
                className="skills-icon"
                icon={faBootstrap}
                size="5x"
              />
              <p>bootstrap</p>
            </div>
            <div>
              <FontAwesomeIcon className="skills-icon" icon={faReact} size="5x" />
              <p>react</p>
            </div>
            <div>
              <FontAwesomeIcon
                className="skills-icon"
                icon={faNodeJs}
                size="5x"
              />
              <p>node</p>
            </div>
            <div>
              <FontAwesomeIcon className="skills-icon" icon={faNpm} size="5x" />
              <p>npm</p>
            </div>
            <div>
              <FontAwesomeIcon
                className="skills-icon"
                icon={faGitAlt}
                size="5x"
              />
              <p>git</p>
            </div>
            <div>
              <FontAwesomeIcon
                className="skills-icon"
                icon={faGithub}
                size="5x"
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
