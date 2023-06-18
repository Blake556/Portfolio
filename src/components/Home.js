import '../styles/Home.css';

import image from "../images/laptop1.png"

function Home() {
  return (
    <div className="container home-outer-container">
        <div className="inner-container">
            <div className="row  align-items-center">
                <div className="col-xl-6 col-lg-6 col-lg-6 col-md-6 col-sm-6 col-12  intro-h-con intro-col">
                    <h1 className="intro-head ">Hi, im Blake</h1>
                    <h1 className="intro-head  text-primary line-two">front-end</h1>
                    <h1 className="intro-head  line-three">Developer</h1>
                </div>
                <div className="col-xl-6 col-lg-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center intro-col">
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