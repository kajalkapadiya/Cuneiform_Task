import React from "react";
import "./NewFlavors.css";

function NewFlavors() {
  return (
    <section className="section">
      <div className="content">
        <div className="summary">
          <h3 className="h3Font">BIERGUT PREMIUM BEER</h3>
          <h1 className="h1Font">INTRODUCING NEW PREMIUM FLAVORS</h1>
          <p className="pFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <button className="black-button">HOST A PARTY</button>
          <button>RESTOCK YOUR PUB</button>
        </div>
        <div className="image">
          <img src="biergut.png" alt="Your Image" className="img1"/>
        </div>
      </div>
    </section>
  );
}

export default NewFlavors;
