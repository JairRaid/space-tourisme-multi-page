import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isNavVisible, setNavVisible] = useState(false);
  const location = useLocation();

  function handleNavigation(setVisibility) {
    if (setVisibility === "open") {
      setNavVisible(true);
    }
    if (setVisibility === "close") {
      setNavVisible(false);
    }
  }

  return (
    <>
      <header>
        <div className="header-container">
          <div className="space-logo">
            <img src="assets/shared/logo.svg" alt="space logo" />
          </div>
          <nav className={isNavVisible ? "nav-bar is-active" : "nav-bar"}>
            <Link
              to="/"
              className={location.pathname === "/" ? "is-active" : ""}
            >
              <span>00</span>HOME
            </Link>
            <Link
              to="/destination"
              className={
                location.pathname === "/destination" ? "is-active" : ""
              }
            >
              <span>01</span>DESTINATION
            </Link>
            <Link
              to="/crew"
              className={location.pathname === "/crew" ? "is-active" : ""}
            >
              <span>02</span>CREW
            </Link>
            <Link
              to="/technology"
              className={location.pathname === "/technology" ? "is-active" : ""}
            >
              <span>03</span>TECHNOLOGY
            </Link>
            <button className="close" onClick={() => handleNavigation("close")}>
              <img src="assets/shared/icon-close.svg" alt="close icon" />
            </button>
          </nav>
          <button className="menu" onClick={() => handleNavigation("open")}>
            <img src="assets/shared/icon-hamburger.svg" alt="menu icon" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
