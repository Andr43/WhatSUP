import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <p className="header__name">What?SUP!</p>
      <div className="header__links">
        <Link
          className="header__link" to=""
        >
          About us
        </Link>
        <Link
          className="header__link" to=""
        >
          Our tours
        </Link>
        <Link
          className="header__link" to=""
        >
          SUP rental
        </Link>
      </div>
    </header>
  );
}

export default Header;
