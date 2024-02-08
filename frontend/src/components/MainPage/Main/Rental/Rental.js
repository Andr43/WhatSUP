import React from "react";
import teamPhoto from "../../../../images/rental.jpg";
import { Link } from "react-router-dom";

function Rental() {
  return (
    <section className="rental main__section">
      <div className="rental__description main__description">
        <h2 className="rental__header main__header">SUP Rental</h2>
        {window.innerWidth > 500 ? (
          <p className="rental__par main__par">
            Discover the tranquil beauty of Portugal's rivers and lakes with
            What?SUP!. Based in Lisbon, we offer convenient SUP board rentals,
            allowing you to explore the country's stunning waterways at your
            leisure. Whether you're gliding along the peaceful currents of the
            Douro River or paddling through serene lakes, our premium boards are
            perfect for your adventure. Rent a SUP board from us in Lisbon and
            set off to explore the picturesque waters across Portugal.
          </p>
        ) : (
          <p className="rental__par main__par">
      Discover Portugal's serene waters with What?SUP! in Lisbon, offering premium SUP board rentals for tranquil river and lake explorations nationwide.
          </p>
        )}
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
