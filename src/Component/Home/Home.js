import React from "react";
import NavBar from "../Navbar/Navbar";
import "./Home.css";
import Image1 from "./Images/Image1.png";
import Image2 from "./Images/Image2.png";
import Image3 from "./Images/image3.png";
import Image4 from "./Images/Image4.png";
import Chenel from "./Logos/logo (4).png";
import Louis from "./Logos/logo (3).png";
import Prada from "./Logos/logo.png";
import Calvin from "./Logos/logo (1).png";
import Denum from "./Logos/logo (2).png";





function Home() {
  return (
    <>
      <div>

        <NavBar />

      </div>

      <div className="d-flex justify-content-center container col">
        <div className="col-4">
          <img src={Image1} className="H-image1" />
        </div>
        <div className="col-4">
          <div>
          <img src={Image3} className="H-image3" />
          </div>
          <div className="">
            <h2>ULTIMATE</h2>
            <h1>Sale</h1>
            <p>NEW COLLECTION</p>
            <button className="btn btn-dark homebtn shadow-lg p-2 mb-2">SHOP NOW</button>

          </div>
          <div>
          <img src={Image4} className="H-image4" />
          </div>
        </div>
        <div className="col-4">
        <img src={Image2} className="H-image2" />
        </div>
      </div>

      <div className="d-flex justify-content-center icon-container">
        <div><img src={Chenel} className="icons-img"/></div>
        <div><img src={Louis} className="icons-img"/></div>
        <div><img src={Prada} className="icons-img"/></div>
        <div><img src={Calvin} className="icons-img" /></div>
        <div><img src={Denum} className="icons-img" /></div>
      
      </div>


    </>
  );
}

export default Home;
