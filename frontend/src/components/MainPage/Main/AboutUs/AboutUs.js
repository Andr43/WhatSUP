import React from "react";
import teamPhoto from "../../../../images/team.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="about-us main__section">
      <div className="about-us__description main__description">
        <h2 className="about-us__header main__header">About Us</h2>
        {window.innerWidth > 500 ? (
          <p className="about-us__par main__par">
            Discover the beauty of Portugal's rivers and lakes with What?Sup!
            team. We specialize in thrilling SUP tours and top-quality board
            rentals. With our experienced team and scenic routes, we guarantee
            an unforgettable adventure. Join us on the water today!
          </p>
        ) : (
          <p className="about-us__par main__par">
            Discover the beauty of Portugal's rivers and lakes with What?Sup!
            team.
          </p>
        )}
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
