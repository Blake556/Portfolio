import Project from './Project';
import '../styles/Portfolio.css';

function Portfolio(props) {
  const projectData = props.projectData;

  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="page-title text-center">Portfolio</h1>
      </div>
      <div className="container">
        <div className="row ">
          {projectData.map(project => (
            <div className="col col-4 d-flex justify-content-center ">
              <div className="">
                <Project 
                  key={project.id}
                  screenShot={project.screenShot}
                  name={project.name}
                  description={project.description}
                  techUsed={project.techUsed}
                  website={project.website}
                  code={project.code}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
