import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { kCalculatePrice } from "../../utilities/Constants";
import Sheet from "../Cards/sheet";
import marker from "../../assets/icons/marker.PNG";
import markerPurple from "../../assets/icons/marker-purple.png";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Map() {
  const [loadded, setLoadded] = useState(true);
  const [activeMarker, setActiveMarker] = useState(null);
  const { data } = useSelector((state) => state.garageSpaces);
  const { geocode } = useSelector((state) => state.dateGeocode);
  const dutrationString = sessionStorage.getItem("duration");
  const duration = JSON.parse(dutrationString);
  const [position, setPos] = useState([{}]);
  const [open, setOpen] = React.useState(false);
  const [id, setID] = React.useState("");
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
  if (data.length <= 0)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    );
  let googleMap = (
    <GoogleMap
      center={{ lat: 30.0505454, lng: 31.2486498 }}
      zoom={17}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      onLoad={() => setLoadded(true)}
    >
      {/* <CircularProgress /> */}
      <Marker
        position={{ lat: 30.0505454, lng: 31.2486498 }}
        icon={{
          url: markerPurple,
          scaledSize: new window.google.maps.Size(70, 50),
        }}
      ></Marker>
      {data.map((garage) => (
        <Marker
          key={garage.garage["id"]}
          position={{
            lat: +garage.garage["lat"],
            lng: +garage.garage["lon"],
          }}
          onClick={() => {
            handleActiveMarker(garage.garage["id"]);
            setOpen(true);
            setID(garage.garage["id"]);
          }}
          icon={{
            url: marker,
            scaledSize: new window.google.maps.Size(85, 50),
          }}
          label={`${kCalculatePrice(
            duration,
            garage.garage["pricePerHour"]
          ).toString()} EGP`}
        >
          <ChatBubbleRoundedIcon />
          {activeMarker === garage.garage["id"] ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{garage.garage["garageName"]}</div>
            </InfoWindow>
          ) : null}
          <Sheet id={id} open={open} close={handleClose}></Sheet>
        </Marker>
      ))}
    </GoogleMap>
  );

  return <>{loadded ? googleMap : <CircularProgress />}</>;
}

export default Map;
