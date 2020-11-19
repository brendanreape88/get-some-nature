import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__name">Get Some Nature!</h1>
      <h3 className="hero__tagline">Find your nearest parks and lodging.</h3>
      <form className="hero__form">
        <input
          className="hero__search"
          type="search"
          placeholder='try "Los Angeles"'
        />
        <select className="hero__select">
          <option>national parks</option>
          <option>state parks</option>
          <option>all parks</option>
        </select>
        <button className="hero__button">search</button>
      </form>
    </div>
  );
}

export default Hero;
