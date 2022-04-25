import React from "react";

const WhoWeAreSix = ({ title, text }) => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h3 className="text-uppercase">{title}</h3>
          <p className="font-26px">{text}</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreSix;
