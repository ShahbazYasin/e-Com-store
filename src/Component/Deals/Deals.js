import React from "react";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import "./Deals.css"


function Deals() {

  const [posts, setpost] = useState([])

  useEffect(() => {
    getpost()

  }, [])


  const getpost = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setpost(json))
  }

  

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="container">Deals</div>
      <div className="product-flex d-flex flex-wrap container">
      {posts.map((value) => {
        console.log(value)
        return (
            <div className="container product-card ">
              <h3>{value.id}</h3>
              <h2>{value.title}</h2>
              {/* <p>{value.body}</p> */}
              {/* <h3>{value.userId}</h3> */}
              {/* <img src={value.url} width={"200px"} height={"100px"} />  */}
              <img src={value.thumbnailUrl} />             
            </div>
        )
      })}
      </div>

    </>
  );
}

export default Deals;
