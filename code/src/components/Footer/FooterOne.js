import React from "react";
import img from "../../assets/images/logo-black.png";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href="index.html">
                    <img className="logo logo-display" src={img} alt="" />
                  </a>
                </div>
                <div className="widget-links">
                  <ul>
                    <li>FLAMINGLE</li>
                    <li>213-255-8709</li>
                    <li>jyshi1107@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2"></div>
            <div className="col-sm-6 col-md-2"></div>
            <div className="col-sm-6 col-md-4"></div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer-height"></div>
  </>
);

export default FooterOne;
