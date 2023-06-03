import React from "react";
import '../styles/Project.css';


function Project(props) {

    const {screenShot, name, description, techUsed, website, code } = props

  return (
    <div className="project-container">
        <div className='screenshot'>
            <img src={screenShot} height='200px'></img>
        </div>
        <div className='info-container'>
            <div className='title d-flex justify-content-center'>
                <h2>{name}</h2>
            </div>
            <div className='container techs-container'>
                {techUsed.map((tech, index) => (
                    <div className='row tech-box '>
                        <span key={index} className="tech">{tech}</span>
                    </div>
                ))}
            </div>
            <div className='description '>
                <p>{description}</p>
            </div>
           
            <div className='view-project '>
                
                <a href={website} target='blank'> <span className='btn  view-website'>Site</span></a>
                <a href={code} target='blank'> <span className='btn  view-code'>Code</span></a>
            </div>
        </div>
    </div>
  );
}

export default Project;