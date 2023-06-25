import React, { Fragment } from "react";
import Carousel from "../../components/Home-Slider/Carousel";
import ParkingSearch from "../../components/Parking-search/ParkingSearch";
import MadeEasy from "../../components/Home-made-easy/MadeEasy";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <ParkingSearch />
      <MadeEasy />
      <Carousel />
      <DownloadSection />
    </Fragment>
  );
};

export default Home;
