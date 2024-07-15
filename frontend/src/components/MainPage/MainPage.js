import { React } from "react";
import First from "./First/First.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import { Helmet } from "react-helmet-async";

function MainPage() {
  return (
    <>
      <Helmet>
        <title>WhatSUP. SUP tours and rental</title>
        <meta
          name="description"
          content="Our main page of the WhatSUP project. Here you can order a SUP tours with our team on majestic rivers of Portugal or take a SUP board for rent in Portugal."
        />
                <meta
          name="keywords"
          content="SUP tours, SUP rental, rent SUP in Portugal, SUP board, alugar SUP prancha em Portugal, SUP passeios em Portugal"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <First />
      <Main />
      <Footer />
    </>
  );
}

export default MainPage;
