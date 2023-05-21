import '../styles/Home.css';

import image from "../images/me5.png"

function Home() {
  return (
    <div className="home-container">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-6 ">
                    <h1 className="intro-head text-primary">Hi, im Blake</h1>
                    <h1 className="intro-head text-primary line-two">front-end</h1>
                    <h1 className="intro-head text-primary line-three">Developer</h1>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <div className="home-img-container">
                        <img src={image} width="500px" className="home-img"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;