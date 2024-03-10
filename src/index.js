import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Deals from './Component/Deals/Deals';
import NewArivals from './Component/New Arivals/NewArivals';
import Packages from './Component/Packages/Packages';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import Memo from './Component/memo/memo';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
{
  path: "/Deals",
  element: <Deals />,
},
{
  path: "/NewArivals",
  element: <NewArivals />,
},
{
  path: "/Packages",
  element: <Packages />,
},
{
  path: "/memo",
  element: <Memo />,
},
{
    path: "/SignIn",
    element: <SignIn />,
},
{
  path: "/SignUp",
  element: <SignUp />,
}
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <RouterProvider router={router} /> */}
    <App />

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

