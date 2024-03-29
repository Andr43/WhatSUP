import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [is820, setIs820] = useState();
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  });

  function handleResize() {
    if (window.innerWidth > 820) {
      setIs820(true);
      document.body.removeAttribute("style", "overflow: hidden");
    } else {
      setIs820(false);
      isMobileMenuOpened
        ? document.body.setAttribute("style", "overflow: hidden")
        : document.body.removeAttribute("style", "overflow: hidden");
    }
  }

  function openMobileMenu() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
    isMobileMenuOpened
      ? document.body.removeAttribute("style", "overflow: hidden")
      : document.body.setAttribute("style", "overflow: hidden");
  }

  return (
    <header
      className={`header ${
        isMobileMenuOpened && !is820 ? "header-mobile" : ""
      }`}
    >
      <p className="header__name">What?SUP!</p>
      <nav
        className={`header__links ${
          is820 || isMobileMenuOpened ? "" : "invisible"
        } ${isMobileMenuOpened && !is820 ? "header-mobile__links" : ""}`}
      >
        <Link
          className={`header__link ${
            isMobileMenuOpened && !is820 ? "header-mobile__link" : ""
          }`}
          to=""
        >
          About us
        </Link>
        <Link
          className={`header__link ${
            isMobileMenuOpened && !is820 ? "header-mobile__link" : ""
          }`}
          to=""
        >
          Our tours
        </Link>
        <Link
          className={`header__link ${
            isMobileMenuOpened && !is820 ? "header-mobile__link" : ""
          }`}
          to=""
        >
          SUP rental
        </Link>
      </nav>
      <button
        className={`header__button_burger ${is820 ? "invisible" : "visible"} ${
          isMobileMenuOpened ? "header__button_close" : ""
        }`}
        type="button"
        onClick={openMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 49" fill="none">
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9267 15.3337C21.8784 15.3975 24.8265 14.2893 25.4376 14.0503C26.9701 13.4516 26.8396 13.3943 28.5469 13.3919L40.8341 13.3724L40.3867 13.1641C40.181 13.0685 40.0542 12.8624 40.0539 12.6369C40.0528 12.5264 40.0833 12.4179 40.1419 12.3242C40.2006 12.2305 40.2848 12.1556 40.3846 12.1083L40.8318 11.8981L28.5446 11.9176C26.8377 11.9203 26.9676 11.8629 25.4332 11.2691C24.8213 11.0321 21.8697 9.9332 19.9183 10.0032C17.6443 10.0847 15.2381 10.0189 12.944 10.0202C9.01305 10.0213 9.0215 15.3502 12.9524 15.3397C15.2465 15.3329 17.6525 15.2594 19.9267 15.3337Z"
              fill="white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.2028 13.0716L41.8465 13.3708L41.9456 13.4173C41.9665 13.4274 41.9898 13.4315 42.0129 13.4291C42.036 13.4268 42.058 13.418 42.0763 13.4037C42.0961 13.3891 42.112 13.3699 42.1228 13.3478C42.1335 13.3257 42.1387 13.3014 42.138 13.2768L42.1359 11.9896C42.1366 11.965 42.1313 11.9407 42.1205 11.9186C42.1097 11.8965 42.0937 11.8774 42.0739 11.8628C42.0555 11.8488 42.0335 11.8402 42.0105 11.838C41.9875 11.8357 41.9643 11.8399 41.9435 11.8501L40.5669 12.4955C40.5408 12.5082 40.5189 12.5283 40.5039 12.5532C40.4889 12.5781 40.4815 12.6068 40.4825 12.6358C40.4826 12.6985 40.5152 12.7513 40.5673 12.7751L41.2028 13.0716Z"
              fill="white"
            ></path>
          </g>
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.2113 21.3457C30.2596 21.2819 27.3115 22.3901 26.7004 22.6291C25.1679 23.2278 25.2984 23.2851 23.5911 23.2875L11.3039 23.307L11.7513 23.5153C11.957 23.6109 12.0838 23.817 12.0841 24.0425C12.0852 24.153 12.0547 24.2615 11.9961 24.3552C11.9374 24.4489 11.8532 24.5238 11.7534 24.5711L11.3062 24.7813L23.5934 24.7618C25.3003 24.7591 25.1704 24.8165 26.7048 25.4103C27.3167 25.6473 30.2683 26.7462 32.2197 26.6762C34.4938 26.5947 36.9 26.6605 39.1941 26.6592C43.125 26.6581 43.1166 21.3292 39.1857 21.3397C36.8915 21.3465 34.4856 21.42 32.2113 21.3457Z"
              fill="white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9353 23.6078L10.2916 23.3086L10.1924 23.2621C10.1715 23.252 10.1483 23.2479 10.1252 23.2503C10.1021 23.2526 10.0801 23.2614 10.0618 23.2757C10.042 23.2903 10.0261 23.3095 10.0153 23.3316C10.0046 23.3537 9.99935 23.378 10.0001 23.4026L10.0022 24.6898C10.0015 24.7144 10.0068 24.7387 10.0176 24.7608C10.0284 24.7829 10.0444 24.802 10.0642 24.8166C10.0826 24.8306 10.1046 24.8392 10.1276 24.8414C10.1506 24.8437 10.1738 24.8395 10.1946 24.8293L11.5711 24.1839C11.5972 24.1712 11.6191 24.1511 11.6341 24.1262C11.6491 24.1013 11.6565 24.0726 11.6555 24.0436C11.6554 23.9809 11.6228 23.9281 11.5707 23.9043L10.9353 23.6078Z"
              fill="white"
            ></path>
          </g>
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9267 38.0131C21.8784 38.0769 24.8265 36.9687 25.4376 36.7297C26.9701 36.131 26.8396 36.0737 28.5469 36.0713L40.8341 36.0518L40.3867 35.8435C40.181 35.7479 40.0542 35.5418 40.0539 35.3163C40.0528 35.2058 40.0833 35.0973 40.1419 35.0036C40.2006 34.9099 40.2848 34.835 40.3846 34.7877L40.8318 34.5775L28.5446 34.597C26.8377 34.5997 26.9676 34.5423 25.4332 33.9485C24.8213 33.7115 21.8697 32.6126 19.9183 32.6826C17.6443 32.7641 15.2381 32.6983 12.944 32.6996C9.01305 32.7007 9.0215 38.0296 12.9524 38.0191C15.2465 38.0123 17.6525 37.9388 19.9267 38.0131Z"
              fill="white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.2028 35.751L41.8465 36.0502L41.9456 36.0967C41.9665 36.1068 41.9898 36.1109 42.0129 36.1085C42.036 36.1062 42.058 36.0974 42.0763 36.0831C42.0961 36.0685 42.112 36.0493 42.1228 36.0272C42.1335 36.0051 42.1387 35.9808 42.138 35.9562L42.1359 34.669C42.1366 34.6444 42.1313 34.6201 42.1205 34.598C42.1097 34.5759 42.0937 34.5568 42.0739 34.5422C42.0555 34.5282 42.0335 34.5196 42.0105 34.5174C41.9875 34.5151 41.9643 34.5193 41.9435 34.5295L40.5669 35.1749C40.5408 35.1876 40.5189 35.2077 40.5039 35.2326C40.4889 35.2575 40.4815 35.2862 40.4825 35.3152C40.4826 35.3779 40.5152 35.4307 40.5673 35.4545L41.2028 35.751Z"
              fill="white"
            ></path>
          </g>
        </svg>
      </button>
    </header>
  );
}

export default Header;
