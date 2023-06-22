import React, { Fragment } from "react";
import Carousel from "../../components/Home-Slider/Carousel";
import ParkingSearch from "../../components/Parking-search/ParkingSearch";
import MadeEasy from "../../components/Home-made-easy/MadeEasy";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
import { userValid } from "../../redux/slices/loginSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userValid())
  }, [])

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
