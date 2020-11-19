import React from "react";
import "./Results.css";

function Results() {
  return (
    <div className="results">
      <div className="results__park">
        <h1>Found park name here!</h1>
        <div className="results__images">
          <img />
          <img />
          <img />
        </div>
        <h3>Park Deets</h3>
        <p>Park details will go here!</p>
      </div>
      <div className="results__lodging">
        <h3>Not a "tent person"?</h3>
        <div className="hotelCards">
          <div>Hotel pic, stars, link</div>
          <div>Hotel pic, stars, link</div>
          <div>Hotel pic, stars, link</div>
        </div>
      </div>
    </div>
  );
}

export default Results;
