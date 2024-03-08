import React from "react";
import tourPhoto from "../../../../images/tours.jpg";
import { Link } from "react-router-dom";

function Tours() {
  return (
    <section className="tours main__section main__section_reverse">
      <img
        className="tours__image main__image main__image_reverse"
        alt="our tour in Douro Valley"
        src={tourPhoto}
      ></img>
      <h2 className="tours__header main__header main__header_reverse">Our Tours</h2>
      <p className="tours__par main__par main__par_reverse">
        Explore Portugal's breathtaking landscapes with our guided SUP tours.
        Journey through the stunning Douro Valley, majestic Tagus River, and
        scenic waterways. Immerse yourself in nature, uncover hidden treasures,
        and make unforgettable memories as you paddle through Portugal's
        heartland with us.
      </p>
      <Link className="tours__link main__link main__link_reverse" to="">
        book a tour
      </Link>
    </section>
  );
}

export default Tours;
