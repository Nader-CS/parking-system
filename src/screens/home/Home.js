import React, { Fragment } from "react";
import Carousel from "../../components/Home-Slider/Carousel";
import ParkingSearch from "../../components/Parking-search/ParkingSearch";
import MadeEasy from "../../components/Home-made-easy/MadeEasy";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
const Home = () => {
  return (
    <Fragment>
      <ParkingSearch />
      <MadeEasy />
      <DownloadSection />
      <Carousel />
    </Fragment>
  );
};

export default Home;
