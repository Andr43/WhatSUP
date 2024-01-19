import React from "react";
import { Link } from "react-router-dom";
import instLogo from '../../../images/instagram.png';
import telLogo from '../../../images/telegram.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__links">
        <p className="promo__par">Follow Us</p>
        <Link
          className="promo__link" to=""
        >
          <img src={instLogo}/>
        </Link>
        <Link
          className="promo__link" to=""
        >
          <img src={telLogo}/>
        </Link>
      </div>
     <h1 className="promo__header">Are you ready to SUP with us?</h1>
    </section>
  );
}

export default Promo;