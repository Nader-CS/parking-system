import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import Sheet from "../Cards/sheet";

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
    const newPos = data.map((garage) => ({
      lat: +garage.garage["lat"],
      lng: +garage.garage["lon"],
    }));
    setPos(newPos);
    setIsPositionSet(true);
  }, [data]);

  if (data.length <= 0) return <div>Loading...</div>;

  return (
    <GoogleMap
      center={{ lat: 30.075039276195568, lng: 31.22181733648843 }}
      zoom={17}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      {data.map((garage) => (
        <Marker
          key={garage.garage["id"]}
          position={{ lat: +garage.garage["lon"], lng: +garage.garage["lat"] }}
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
