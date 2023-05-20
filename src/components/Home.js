import '../styles/Home.css';

import image from "../images/animation2.png"

function Home() {
  return (
    <div className="home-container">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1 className='intro-head'>Hi, im Blake <br/>front-end software engineer</h1>
                </div>
                <div className="col-6">
                    <img src={image}></img>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;