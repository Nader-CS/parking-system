import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import Sheet from "../Cards/sheet";
function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const { data } = useSelector((state) => state.garageSpaces);
//   const { geocode } = useSelector((state) => state.dateGeocode);
    const [position, setPos] = useState([{}]);
    const [isPositionSet, setIsPositionSet] = useState(false);
    const [open, setOpen] = React.useState(false);
    const duration = localStorage.getItem('duration')
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
      setIsPositionSet(true);    
  },[data])
  const handleOnLoad = async(map) => {
   
        const bounds = new window.google.maps.LatLngBounds();
    position.forEach((garage) => bounds.extend({lat:+garage["lng"], lng:+garage["lat"] }));
    map.fitBounds(bounds);
      
    
    // data.forEach((garage) => console.log({lat:garage.garage["lat"], lng:garage.garage["lon"]}));

  };
  if (data.length<= 0) return <div>Loading...</div>
//   if (position.length <= 0) return <div>Loading...</div>
  
  
  return (
    <GoogleMap
        center={{lat:30.075039276195568, lng: 31.22181733648843}}
        zoom={17}
      onLoad={position.length>0?handleOnLoad:null}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      {data.map((garage) => (
        <Marker
          key={garage.garage["id"]}
          
          position={{lat:+garage.garage["lon"], lng:+garage.garage["lat"] }}
          onClick={() => {handleActiveMarker(garage.garage["id"])
          setOpen(true);
        }
         
        }
        //   icon={{
            
        //     url: '/custom_marker_pin.svg',
            
        //     anchor: new window.google.maps.Point(17, 46),
            
        //     scaledSize: new window.google.maps.Size(37, 37)
            
        //     }}
        >
            <ChatBubbleRoundedIcon />
          {activeMarker === garage.garage["id"] ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{garage.garage["name"]}</div>
            </InfoWindow>
          ) : null}
          <Sheet duration={duration} garage={garage} open={open} close={handleClose}></Sheet>
        </Marker>
        
      ))}
      
    </GoogleMap>
  );
}

export default Map;