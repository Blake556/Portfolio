import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container d-flex justify-content-end align-items-center ">
       <Link to="/Home"> <span className="nav-link">Home</span> </Link>
       <Link to="/About"> <span className="nav-link">About</span> </Link>
       <Link to="/Portfolio"> <span className="nav-link">Portfolio</span> </Link>
       <Link to="/Contact"> <span className="nav-link">Contact</span> </Link>
    </div>
  );
}

export default Navbar;