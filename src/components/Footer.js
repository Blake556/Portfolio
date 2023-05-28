import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div className="footer-container d-flex align-items-center">
      <div className="">
      <a href="https://github.com/Blake556?tab=repositories" target="blank"><FontAwesomeIcon icon={faGithub} size="2x" className="github-icon text-primary" /></a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="blank"><FontAwesomeIcon icon={faEnvelope} size="2x" className="github-icon text-primary"/>  </a>
      <a ><FontAwesomeIcon icon={faLinkedin} size="2x" className="github-icon text-primary"/> </a>
      <a ><FontAwesomeIcon icon={faFacebookF} size="2x" className="github-icon text-primary"/> </a>
      </div>
     
    </div>
  );
}

export default Footer;