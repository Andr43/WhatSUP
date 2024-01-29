import React from "react";
import teamPhoto from "../../../images/team.jpg";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__description">
        <h2 className="about-us__header">About Us</h2>
        <p className="about-us__par">
          Discover the beauty of Portugal's rivers and lakes with What?Sup!
          team. We specialize in thrilling SUP tours and top-quality board
          rentals. With our experienced team and scenic routes, we guarantee an
          unforgettable adventure. Join us on the water today!
        </p>
      </div>
      <img className="about-us__image" alt="our team" src={teamPhoto}></img>
    </section>
  );
}

export default AboutUs;
