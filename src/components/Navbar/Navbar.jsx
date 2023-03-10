import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Navbar() {

  //     {/* <Route path="/commerces/:id" element={<PCommerce/>} /> */}
  //   </div>

  const navRef = useRef();
  

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h2>RAV</h2>
      <nav ref={navRef} onClick={showNavbar}>
        <Link to="/" className="rav links">
          RAV
        </Link>
        <Link to="/artists" className="links">Artists</Link>
        <Link to="/albums" className="links">Albums</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
           
            color="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          color="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
}
