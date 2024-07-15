import React from "react";
import { Link } from "react-router-dom";
import instLogo from "../../../../images/instagram.svg";
import telLogo from "../../../../images/telegram.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__links">
        <p className="promo__par">Follow Us</p>
        <Link
          className="promo__link"
          to="https://www.instagram.com/what_sup_portugal?igsh=d2lnZ28yeHJreWk5&utm_source=qr"
          target="_blank"
        >
          <img className="promo__image" src={instLogo} alt="instagram logo" />
        </Link>
        <Link className="promo__link" to="">
          <img className="promo__image" src={telLogo} alt="telegram logo" />
        </Link>
      </div>
      <article className="promo__headers">
        <p className="promo__header">Are you ready to SUP with us?</p>
        <h1 className="promo__sub-header">SUP tours and rental</h1>
      </article>
    </section>
  );
}

export default Promo;
