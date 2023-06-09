import React, { Fragment } from "react";
import Carousel from "../../components/Home-Slider/Carousel";
import LandingPage from "../../components/Parking-search/LandingPage";
const Home = () => {
  return (
    <Fragment>
      <LandingPage />
      <Carousel />
    </Fragment>
  );
};

export default Home;
