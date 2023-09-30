import React from "react";
import "./LeadingBeer.css";
import Years from "./Years";

function LeadingBeer() {
  return (
    <section>
      <div className="outerContent">
        <div className="content">
          <div className="image1">
            <img src="cadus.png" alt="factory" className="shadow img2"></img>
          </div>
          <div className="text">
            <h1 className="h1content">LEADING BEER BREWERY, SINCE 1974!</h1>
            <p className="pcontent">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Proin eget tortor risus. Nulla uqis ut libero malesuada
              feugiat. Mauris blandit aliuet elit, eget tincidunt nibh.
            </p>
            <p className="pcontent">
              Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
              dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubillia; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Proin eget tortor.
            </p>
          </div>
        </div>

        {/* add another component here */}

        <Years />
      </div>
    </section>
  );
}

export default LeadingBeer;
