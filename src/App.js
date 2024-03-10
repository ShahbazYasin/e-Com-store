import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deals from "./Component/Deals/Deals";
import Home from "./Component/Home/Home";
import NewArivals from "./Component/New Arivals/NewArivals";




function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Deals" element={<Deals />} />
          <Route path="NewArivals" element={<NewArivals />} />
          <Route path="contact" element={<NewArivals />} />

          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
