import React from "react";
import '../styles/Project.css';
//import projectData from '../projectData';



function Project(props) {

    console.log(props.projectData)

    const {id, screenshot, name, description, website, code } = props
    
    //let site = props.projectData[0].website
    //let code = props.projectData[0].code

  return (
    <div className="project-container">
        <div className='screenshot'>
            <img height='200px' src={screenshot}></img>
        </div>
        <div className='info-container'>
            <div className='title d-flex justify-content-center'>
                <h3>{name}</h3>
            </div>
            <div className='description '>
                <p>{description}</p>
            </div>
            <div className='view-project d-flex justify-content-center'>
                <a href={website} target='blank'> <span className='view-website'>Website</span></a>
                <a href={code} target='blank'> <span className='view-code'>Code</span></a>
            </div>
        </div>
    </div>
  );
}

export default Project;