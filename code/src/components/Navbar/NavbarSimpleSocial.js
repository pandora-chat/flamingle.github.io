import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import NavbarHeader from "./NavElements/NavbarHeader";
import AttrNavSocial from "./NavElements/AttrNavSocial";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";
import useWindowSize from "../../helpers/useWindowSize";

const NavbarSimpleSocial = ({ data }) => {
  const { fixed } = HandleFixedNavbar();
  const [collapse, setCollapse] = useState(false);
  const width = useWindowSize().width;
  const handleCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  return (
    <nav
      className={
        (fixed ? "" : " navbar-transparent ") +
        "navbar navbar-default navbar-fixed white bootsnav on no-full"
      }
    >
      <div className="container">
        <NavbarHeader
          fixed={fixed}
          handleCollapse={handleCollapse}
          collapse={collapse}
          width={width}
        />
        <AttrNavSocial/>
        <CSSTransition in={collapse} timeout={300} classNames="collapse-navbar">
          <div>
           
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
};

export default NavbarSimpleSocial;
