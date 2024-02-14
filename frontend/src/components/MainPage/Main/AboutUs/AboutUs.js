import React from "react";
import teamPhoto from "../../../../images/team.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="about-us main__section">
      <div className="about-us__description main__description">
        <h2 className="about-us__header main__header">About Us</h2>
          <p className="about-us__par main__par">
            Explore the mesmerizing waterways of Portugal with What?SUP!. Immerse
            yourself in thrilling SUP excursions and opt for our premium board
            rentals. With seasoned guides and picturesque routes, we ensure an
            unforgettable journey. Kickstart your aquatic adventure now and
            delve into the scenic wonders of Portugal's aquatic landscapes!
          </p>
        <Link className="about-us__link main__link" to="">
          read more
        </Link>
      </div>
      <img
        className="about-us__image main__image"
        alt="our team"
        src={teamPhoto}
      ></img>
    </section>
  );
}

export default AboutUs;
