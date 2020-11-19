import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">GSN</h1>
      <button className="navbar__button">+ new search</button>
    </div>
  );
}

export default Navbar;
