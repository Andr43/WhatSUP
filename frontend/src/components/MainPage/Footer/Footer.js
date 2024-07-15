import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <article className="footer__contacts">
        <h3 className="footer__logo">What?SUP!</h3>
        <a className="footer__par footer__par_phone" href="tel:+351237128097">
        +351237128097
        </a>
        <Link className="footer__par footer__par_email" to="">
        whatsuplisbon@gmail.com
        </Link>
        <p className="footer__copyright">
          © 2024 What?SUP!, Inc. Terms & Privacy
        </p>
      </article>
      <article className="footer__links">
        <h3 className="footer__header">Links</h3>
        <Link className="footer__link" to="">
          book a board
        </Link>
        <Link className="footer__link" to="">
          book a board
        </Link>
        <Link className="footer__link" to="">
          book a board
        </Link>
        <Link className="footer__link" to="">
          book a board
        </Link>
      </article>
    </footer>
  );
}

export default Footer;
