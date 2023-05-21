import Project from './Project';
import '../styles/Portfolio.css';

function Portfolio(props) {

  const projectData = props.projectData
  

  return (
    <div className="">
      <div className="title-container">
        <h1 className="page-title text-center">Portfolio</h1>
      </div>
      
       <Project projectData={projectData}/>
     
    </div>
  );
}

export default Portfolio;