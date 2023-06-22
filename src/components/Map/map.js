import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import { kCalculatePrice } from "../../utilities/Constants";
import Sheet from "../Cards/sheet";
import marker from '../../assets/icons/marker.PNG'
import markerPurple from '../../assets/icons/marker-purple.png'
function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const { data } = useSelector((state) => state.garageSpaces);
//   const { geocode } = useSelector((state) => state.dateGeocode);
const dutrationString = sessionStorage.getItem('duration');
  const duration = JSON.parse(dutrationString);
    const [position, setPos] = useState([{}]);
    const [open, setOpen] = React.useState(false);
    const [id, setID] = React.useState('');
    const handleClose = () => {
        setOpen(false);
      };
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(()=>{
    const newPos = data.map((garage) => ({
        lat: +garage.garage["lat"],
        lng: +garage.garage["lon"],
      }));
      setPos(newPos);
  },[data])
  const handleOnLoad = async(map) => {
   
        const bounds = new window.google.maps.LatLngBounds();
    position.forEach((garage) => bounds.extend({lat:+garage["lng"], lng:+garage["lat"] }));
    map.fitBounds(bounds);
  };
  if (data.length<= 0) return <div>Loading...</div>
  return (
    <GoogleMap
        center={{lat:30.075039276195568, lng: 31.22181733648843}}
        zoom={17}
      onLoad={position.length>0?handleOnLoad:null}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      <Marker
          position={{lat:30.075039276195568, lng:31.22181733648843 }}
          icon={{        
            url: markerPurple,
            scaledSize: new window.google.maps.Size(70, 50)
            }}
        ></Marker>
      {data.map((garage) => (
        <Marker
          key={garage.garage["id"]}
          position={{lat:+garage.garage["lon"], lng:+garage.garage["lat"] }}
          onClick={() => {handleActiveMarker(garage.garage["id"])
          setOpen(true);
          setID(garage.garage["id"])
        }}
          icon={{        
            url: marker,
            scaledSize: new window.google.maps.Size(85, 50)
            }}
            label={`${kCalculatePrice(
              duration,
              garage.garage["pricePerHour"]
            ).toString()} EGP`}
            
        >
            <ChatBubbleRoundedIcon />
          {activeMarker === garage.garage["id"] ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{garage.garage["name"]}</div>
            </InfoWindow>
          ) : null}
          <Sheet id={id} open={open} close={handleClose}></Sheet>
        </Marker>
        
      ))}
      
    </GoogleMap>
  );
}

export default Map;