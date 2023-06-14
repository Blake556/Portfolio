import '../styles/Home.css';

import image from "../images/laptop1.png"

function Home() {
  return (
    <div className="home-outer-container ">
        <div className="inner-container">
            <div className="row  align-items-center">
                <div className="col-sm-6 col-12 text-center intro-h-con">
                    <h1 className="intro-head text-primary">Hi, im Blake</h1>
                    <h1 className="intro-head  line-two">front-end</h1>
                    <h1 className="intro-head text-primary line-three">Developer</h1>
                </div>
                <div className="col-sm-6 col-12 d-flex justify-content-center">
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