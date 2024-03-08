import { React } from "react";
import AboutUs from "./AboutUs/AboutUs.js";
import Tours from "./Tours/Tours.js";
import Rental from "./Rental/Rental.js";

function Main() {
  return (
    <div className="main__container">
      <AboutUs />
      <Tours />
      <Rental />
    </div>
  );
}

export default Main;
