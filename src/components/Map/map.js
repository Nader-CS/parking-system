import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import Sheet from "../Cards/sheet";
import { Link } from "react-router-dom";

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const { data } = useSelector((state) => state.garageSpaces);
  const [position, setPos] = useState([]);
  const [isPositionSet, setIsPositionSet] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    const newPos = data.map((garage) => {
      console.log(`map ${garage.garage.lat} ${garage.garage.lon}`);
      return {
        lat: +garage.garage["lat"],
        lng: +garage.garage["lon"],
      };
    });
    setPos(newPos);
    setIsPositionSet(true);
  }, [data]);

  if (data.length <= 0)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div class="card">
          <div
            class="card-header"
            style={{ textAlign: "center", fontSize: "1.2rem" }}
          >
            Sorry &#128528;
          </div>
          <div class="card-body">
            <p class="alert alert-danger" role="alert">
              We working to provide more garages in this place
            </p>
            <div style={{ textAlign: "center" }}>
              <a href="#" class="btn btn-primary">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Back to Home
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <GoogleMap
      center={{ lat: 30.0505454, lng: 31.2486498 }}
      zoom={17}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      {data.map((garage) => (
        <Marker
          key={garage.garage["id"]}
          position={{ lat: +garage.garage["lat"], lng: +garage.garage["lon"] }}
          onClick={() => {
            handleActiveMarker(garage.garage["id"]);
            setOpen(true);
          }}
        >
          <ChatBubbleRoundedIcon />
          {activeMarker === garage.garage["id"] ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{garage.garage["name"]}</div>
            </InfoWindow>
          ) : null}
          <Sheet garage={garage} open={open} close={handleClose}></Sheet>
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;
