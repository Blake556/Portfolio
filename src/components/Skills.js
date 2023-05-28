import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faJs, faHtml5, faCss3Alt, faBootstrap, faReact, faNodeJs, faNpm, faGitAlt, faGithub, faDatabase} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="page-title text-center">Skills</h1>
      <div>
        <FontAwesomeIcon className="skills-icon" icon={faHtml5} size="5x"/>
        <FontAwesomeIcon className="skills-icon" icon={faCss3Alt} size="5x"/>
        <FontAwesomeIcon className="skills-icon" icon={faBootstrap} size="5x"/>
        <FontAwesomeIcon className="skills-icon" icon={faJs} size="5x" />
        <FontAwesomeIcon className="skills-icon" icon={faReact} size="5x"/>
        <FontAwesomeIcon className="skills-icon" icon={faNodeJs} size="5x"/>
        <FontAwesomeIcon className="skills-icon" icon={faNpm} size="5x"/>
   
        <FontAwesomeIcon className="skills-icon" icon={faGitAlt} size="5x"/>
        <FontAwesomeIcon className="skills-icon" icon={faGithub} size="5x" />
       
      </div>
    </div>
  );
}

export default Skills;
