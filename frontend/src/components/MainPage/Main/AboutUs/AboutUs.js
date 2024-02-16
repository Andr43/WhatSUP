import React from "react";
import teamPhoto from "../../../../images/team.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="about-us main__section">
      <div className="about-us__description main__description">
        <h2 className="about-us__header main__header">About Us</h2>
          <p className="about-us__par main__par">
          Discover Portugal's enchanting waterways with What?SUP!. Experience thrilling SUP adventures and premium board rentals. With expert guides and scenic routes, embark on an unforgettable journey. Begin your aquatic escapade now and explore Portugal's scenic beauty!
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
