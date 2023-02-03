import React from 'react'
import "./Navbar.css" 
import {Link} from "react-router-dom";  

// import {
//         //BrowserRouter 
//         // as Router, 
//         Route, 
//         Routes}from "react-router-dom";
// import Home from "../../pages/Home/Home";


export default function Navbar() {

  // <Routes>
  //       <Route path="/" element={<Home/>} />

  // </Routes>

  return (
    <div className='nav'>
      <Link to="/">RAV</Link>
      <Link to="/artists">Artists</Link>
      <Link to="/albums">Albums</Link>

      {/* <Route path="/commerces/:id" element={<PCommerce/>} /> */}
    </div>
  )
}
