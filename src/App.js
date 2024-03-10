import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deals from "./Component/Deals/Deals";
import Home from "./Component/Home/Home";
import NewArivals from "./Component/New Arivals/NewArivals";
import Packages from "./Component/Packages/Packages";
import Memo from "./Component/memo/memo"
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";




function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Deals" element={<Deals />} />
          <Route path="NewArivals" element={<NewArivals />} />
          <Route path="memo" element={<Memo />} />
          <Route path="Packeges" element={<Packages />} />
          
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />

          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
