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
import { faFile, faDatabase,  faEye } from "@fortawesome/free-solid-svg-icons";


function About() {
  const resumeDNL = "https://drive.google.com/uc?export=download&id=1YM8LLu_Zen0WF-gynZZUfdVJWk0MXe-X";

  const resumeView = "https://drive.google.com/file/d/1YM8LLu_Zen0WF-gynZZUfdVJWk0MXe-X/view?usp=sharing"

  return (
    <div className="about-container">
      <h1 className="page-title text-center head">About</h1>
      <div className="main-content">
        <div className="about-me-container">
          <div className="header">
            <h3>Development Journey</h3>
          </div>
          <div className="summery about-me">
            <p>I am a passionate, self-taught front-end web developer who has been teaching myself to code for over two years. I started my journey in late 2020, deliberately taking my time to learn coding thoroughly and gain a deep understanding of it. Initially, I began with Codecademy's full-stack web development course. Throughout this learning process, I realized that my efforts would be better focused on front-end or backend development and honing those skills instead of learning everything, i.e., full-stack development. So, I decided to narrow my focus and enhance my front-end skills.</p>

            <br></br>

            <p>While learning various aspects of development, including languages, syntax, etc., I specifically wanted to review JavaScript to better understand its interaction and how to give functionality to HTML and CSS. As a result, I enrolled in a Udemy course, delving deeper into the practical implementation of JavaScript. This allowed me not only to review syntax and concepts but also to learn how to bring everything together to construct cohesive websites.</p>

            <br></br>

            <p>During my time on Udemy, I worked on side projects and created initial websites with JavaScript functionality. Eventually, I detached from tutorials and adopted a hands-on approach, continually building, failing, troubleshooting, and fixing my own projects repeatedly. This process has provided me with a deeper understanding of JavaScript, React, and debugging code.</p>
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
            Above are some of the core skills I've gained from Codecademy, Udemy, and other sources. Another skill that I have, which isn't listed above, is the Express.js framework. I've also worked with GitHub, Heroku, and Firebase for web app deployment. Lastly, while I don't have extensive knowledge of the backend, particularly building databases, I do have a basic understanding and some experience working with JavaScript CRUD functions on databases, as well as backend technologies and languages like SQL, SQLite, and Postman.
            </p>
          </div>
        </div>

        <div className="resume-container">
          <div className="header">
            <h3>Resume</h3>
          </div>
          <div className="summery-resume">
            <a href={resumeView} target="_blank" className="view">
              <span className="d-text resume">View</span>
              <FontAwesomeIcon icon={faEye} className="download"/>
            </a>
            <a href={resumeDNL} className="download">
              <span className="d-text download resume">Download</span>
              <FontAwesomeIcon icon={faFile} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


