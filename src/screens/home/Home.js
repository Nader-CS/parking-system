import React, { Fragment } from "react";
import Carousel from "../../components/Home-Slider/Carousel";
import LandingPage from "../../components/Parking-search/LandingPage";
import MadeEasy from "../../components/Home-made-easy/MadeEasy";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
const Home = () => {
  return (
    <Fragment>
      <LandingPage />
      <MadeEasy />
      <DownloadSection />
      <Carousel />
    </Fragment>
  );
};

export default Home;
