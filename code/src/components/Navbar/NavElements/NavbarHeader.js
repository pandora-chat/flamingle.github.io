import React from "react";
import logoWhite from "../../../assets/images/logo-white.png";
import logoBlack from "../../../assets/images/logo-black.png";

const NavbarHeader = ({ type, fixed, width, handleCollapse, collapse }) => (
  <div className="navbar-header" style={{maxWidth:"100%"}}>
   
    <div className="logo">
      <a href={process.env.PUBLIC_URL}>
        {!fixed && width > 1000 ? (
          <img
            className="logo logo-display"
            src={type === "dark" ? logoBlack : logoWhite}
            alt=""
          />
        ) : !fixed && width < 1000 && type !== "dark" ? (
          <img className="logo logo-scrolled" src={logoBlack} alt="" />
        ) : (
          <img
            className="logo logo-scrolled"
            src={type === "dark" ? logoWhite : logoBlack}
            alt=""
          />
        )}
      </a>
    </div>
  </div>
);

export default NavbarHeader;
