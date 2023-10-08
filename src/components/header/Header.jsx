import React, { useState } from "react";
import "./header.css";
import { useAuth0 } from "@auth0/auth0-react";



const Header = () => {


    /*=============== Load auth0 ===============*/
    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
        useAuth0();

  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");




if(isAuthenticated){
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Delivery VVS
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

          <li className="nav__item">
            <a
              href="#"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className={
                activeNav === "#auth"
                  ? "nav__link active-link"
                  : "nav__link"
              }
            >
              <i className="uil uil-message nav__icon"></i> Log Out
            </a>
          </li>
        </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );

} else {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Delivery VVS
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

          <li className="nav__item">
            <a
              href="#auth"
              onClick={() => setActiveNav("#auth")}
              className={
                activeNav === "#auth"
                  ? "nav__link active-link"
                  : "nav__link"
              }
            >
              <i className="uil uil-message nav__icon"></i> Log In
            </a>
          </li>
        </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );

}

};

export default Header;
