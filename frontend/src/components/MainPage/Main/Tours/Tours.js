import React from "react";
import tourPhoto from "../../../../images/tours.jpg";
import { Link } from "react-router-dom";

function Tours() {
  return (
    <section className="tours main__section">
      {window.innerWidth > 500 ? (
        <>
          <img
            className="tours__image main__image"
            alt="our tour in Douro Valley"
            src={tourPhoto}
          ></img>
          <div className="tours__description">
            <h2 className="tours__header main__header">Our Tours</h2>
            <p className="tours__par main__par">
              Embark on a captivating journey through Portugal's scenic
              landscapes with us. Our guided SUP tours take you along the
              enchanting Douro Valley, the majestic Tagus River, and other
              picturesque waterways. Immerse yourself in nature, discover hidden
              gems, and create unforgettable memories as you paddle with us
              through the heart of Portugal.
            </p>
            <Link className="tours__link main__link" to="">
              book a tour
            </Link>
          </div>
        </>
      ) : (
        <div className="tours__description">
          <h2 className="tours__header main__header">Our Tours</h2>
          <p className="tours__par main__par">
            Embark on a captivating journey through Portugal's scenic landscapes
            with us. Our guided SUP tours take you along the enchanting Douro
            Valley, the majestic Tagus River, and other picturesque waterways.
            Immerse yourself in nature, discover hidden gems, and create
            unforgettable memories as you paddle with us through the heart of
            Portugal.
          </p>
          <Link className="tours__link main__link" to="">
            book a tour
          </Link> 
        </div>
      )}
    </section>
  );
}

export default Tours;
