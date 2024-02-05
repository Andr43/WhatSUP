import React from "react";
import { Link } from "react-router-dom";

function closeMobileMenu() {
  const headerMobile = document.querySelector(".header-mobile");
  const header = document.querySelector(".header");
  header.classList.remove("invisible")
  headerMobile.classList.add("invisible");
  document.body.removeAttribute("style", "overflow: hidden")
}

function HeaderMobile() {
  return (
    <header className="header-mobile invisible">
      <div className="header-mobile__head">
    <p className="header__name">What?SUP!</p>
      <button
        className="header__button_close"
        type="button"
        onClick={closeMobileMenu}
      ></button>
      </div>
      <nav className="header-mobile__links">
        <Link className="header-mobile__link" to="">
          About us
        </Link>
        <Link className="header-mobile__link" to="">
          Our tours
        </Link>
        <Link className="header-mobile__link" to="">
          SUP rental
        </Link>
      </nav>
    </header>
  );
}

export default HeaderMobile;
