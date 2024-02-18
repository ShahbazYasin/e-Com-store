import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";




function NavBar() {
  return (<>
  <div className="d-flex">
    <div className="Fasco">
      FASCO
    </div>
    <div className="Nav">
      <ul>
        <Link className="nav-link active" to={"/"}>
          <li className="NavStyle">Home</li>
        </Link>
        <Link className="nav-link active" to={"/Deals"}>
          <li className="NavStyle">Deals</li>
        </Link>
        <Link className="nav-link active" to={"/NewArivals"}>
          <li className="NavStyle">New Arrivals</li>
        </Link>
        <Link className="nav-link active" to={"/Packages"}>
          <li className="NavStyle">Packages</li>
        </Link>
      </ul>
    </div>
    </div>
    </>
  );
}

export default NavBar;
