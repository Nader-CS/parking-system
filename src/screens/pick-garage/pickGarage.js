import { TextField } from "@mui/material";
import GarageCards from "../../components/Cards/cards";
import style from "./pick.module.css";
import "./pick.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useEffect, useState } from "react";
import Map from "../../components/Map/map";
import { useSelector } from "react-redux";
const PickGarage = () => {
  let data = useSelector((state) => state.dateGeocode);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`${style.pick_container}`}>
      <div className="row shadow-sm p-3 w-md-75 m-md-auto" style={{ height: 70 }}>
        <div className="col-5">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Parking at"
            variant="outlined"
            value={data.name || sessionStorage.getItem("place")}
            disabled
          />
        </div>
        <div className="col-3 flex-grow-1">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Parking from"
            variant="outlined"
            value={data.parkingFrom || sessionStorage.getItem("parkingFrom")}
            disabled
          />
        </div>
        <div className="col-3 flex-grow-1">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Parking until"
            variant="outlined"
            value={data.parkingUntil || sessionStorage.getItem("parkingUntil")}
            disabled
          />
        </div>
      </div>

      <div className={`${style.row_height} row`}>
        <div className={`${style.height} col-12 col-md-6 col-lg-4 p-0`}>
          <GarageCards />
        </div>
        <div className={`col-12 col-md-6 col-lg-8 ${style.map_height}`}>
          <Map />
        </div>
      </div>
      {
        isMediumScreen && (
          <RemoveScrollBar></RemoveScrollBar>
          
        )
        
      }
      
    </div>

  );
};
export default PickGarage;
