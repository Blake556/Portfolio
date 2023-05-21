import React from "react";
import '../styles/Project.css';
//import projectData from '../projectData';



function Project(props) {

    console.log(props.projectData)

    let site = props.projectData[0].website
    let code = props.projectData[0].code

  return (
    <div className="project-container">
        <div className='screenshot'>
            <img height='200px' src={props.projectData[0].screenShot}></img>
        </div>
        <div className='info-container'>
            <div className='title d-flex justify-content-center'>
                <h3>Canvas Store</h3>
            </div>
            <div className='description '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className='view-project d-flex justify-content-center'>
                <a href={site} target='blank'> <span className='view-website'>Website</span></a>
                <a href={code} target='blank'> <span className='view-code'>Code</span></a>
            </div>
        </div>
    </div>
  );
}

export default Project;