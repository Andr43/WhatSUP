import React from "react";
import teamPhoto from "../../../../images/rental.jpg";
import { Link } from "react-router-dom";

function Rental() {
  return (
    <section className="rental main__section">
      <div className="rental__description main__description">
        <h2 className="rental__header main__header">SUP Rental</h2>
          <p className="rental__par main__par">
      Discover Portugal's serene waters with What?SUP!. Based in Lisbon, we offer hassle-free SUP-board rentals, allowing you to explore at your pace. Whether on the Douro River or calm lakes, our quality boards are waiting you! Rent our boards in Lisbon for a journey through Portugal's picturesque waters.
          </p>
        <Link className="rental__link main__link" to="">
          book a board
        </Link>
      </div>
      <img
        className="rental__image main__image"
        alt="our team"
        src={teamPhoto}
      ></img>
    </section>
  );
}

export default Rental;
