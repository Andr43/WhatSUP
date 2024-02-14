import React from "react";
import tourPhoto from "../../../../images/tours.jpg";
import { Link } from "react-router-dom";

function Tours() {
  return (
    <section className="tours main__section">
      <img
        className="tours__image main__image main__image_reverse"
        alt="our tour in Douro Valley"
        src={tourPhoto}
      ></img>
      <div className="tours__description main__description main__description_reverse">
        <h2 className="tours__header main__header">Our Tours</h2>
          <p className="tours__par main__par">
            Explore Portugal's breathtaking landscapes with our guided SUP
            tours. Journey through the stunning Douro Valley, majestic Tagus
            River, and scenic waterways. Immerse yourself in nature, uncover
            hidden treasures, and make unforgettable memories as you paddle
            through Portugal's heartland with us.
          </p>
        <Link className="tours__link main__link" to="">
          book a tour
        </Link>
      </div>
    </section>
  );
}

export default Tours;
