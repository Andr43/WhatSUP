import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <h4 className="footer__logo">What?SUP!</h4>
        <a className="footer__par footer__par_phone" href="tel:+351237128097">
        +351237128097
        </a>
        <Link className="footer__par footer__par_email" to="">
        whatsuplisbon@gmail.com
        </Link>
        <p className="footer__copyright">
          © 2024 What?SUP!, Inc. Terms & Privacy
        </p>
      </div>
      <div className="footer__links">
        <h4 className="footer__header">Links</h4>
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
      </div>
    </footer>
  );
}

export default Footer;
