import React, { Fragment } from "react";
import Carousel from "../../components/Home-Slider/Carousel";
import ParkingSearch from "../../components/Parking-search/ParkingSearch";
import MadeEasy from "../../components/Home-made-easy/MadeEasy";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
const Home = () => {
  console.log(localStorage.getItem("uid") ? true : false);
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
