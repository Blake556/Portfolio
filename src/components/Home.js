import '../styles/Home.css';
import {Link} from 'react-router-dom';

import image from "../images/laptop1.png"

function Home() {
  return (
    <div className="home-container  ">
        <div className="row home-content-box d-flex home-row">
           
                <div className=" intro-h-con intro-col">
                    <h1 className="intro-head ">Hi, i'm Blake </h1>
                   
                </div>
                <div className=" intro-h-con intro-col">
                <h1 className="intro-head  line-two">Front-end Developer</h1>  
                </div>
 
                <div className=" home-description">
                    <h6>Who has a passion for digitally building things and turning ideas into real-life projects with a great user experience.</h6>
                </div>
                <div className="">
                    <Link to="/Portfolio"><button className="btn projects-btn">Portfolio</button></Link>
                </div>
           
        </div>
    </div>
  ); 
}

export default Home;


 {/* col-xl-12 col-lg-12 col-md-12  col-sm-12 col-12  intro-h-con intro-col */}

  {/* <h1 className="intro-head  line-three">Developer</h1> */}
   
{/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center intro-col intro-pic">
    <div className="home-img-container">
        <img src={image} width="500px" className="home-img"></img>
        </div>
    </div> */}