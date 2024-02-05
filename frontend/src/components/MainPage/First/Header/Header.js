import React from "react";
import { Link } from "react-router-dom";
import HeaderMobile from "../Header/HeaderMobile/HeaderMobile.js";

function openMobileMenu() {
  const headerMobile = document.querySelector(".header-mobile");
  const header = document.querySelector(".header");
  headerMobile.classList.remove("invisible");
  header.classList.add("invisible");
  document.body.setAttribute("style", "overflow: hidden")
}

function Header() {
  return (
    <>
    <header className="header">
      <p className="header__name">What?SUP!</p>
      {window.innerWidth > 820 ? (
        <nav className="header__links">
          <Link className="header__link" to="">
            About us
          </Link>
          <Link className="header__link" to="">
            Our tours
          </Link>
          <Link className="header__link" to="">
            SUP rental
          </Link>
        </nav>
      ) : (
        <button
          className="header__button_burger"
          type="button"
          onClick={openMobileMenu}
        ></button>
      )}
    </header>
       <HeaderMobile />
       </>
  );
}

export default Header;
