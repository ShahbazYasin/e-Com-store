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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setpost(json))
  }



  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="container">Deals</div>
      {posts.map((value) => {
        console.log(value)
        return (
         <div className="product-flex">
           <div className="container product-card ">
            <h3>{value.id}</h3>
            <h1>{value.title}</h1>
            <p>{value.body}</p>
            <h3>{value.userId}</h3>
          </div>
         </div>
        )
      })}

    </>
  );
}

export default Deals;
