import React, { useRef, useState } from "react";
import DateTimePickerValue from "./dateAndTimePicker";
import classes from "./ParkingSearch.module.css";
import AutoComplete from "react-google-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setGeocode } from "../../redux/slices/geoCodeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import closestGarage from "../../utilities/closestGarage";
import { getNearbyGarageSpaces } from "../../redux/slices/garageSpacesSlice";

const ParkingSearch = () => {
  const dispatch = useDispatch();
  const [locationInfo, setLocationInfo] = useState("");
  const autocompleteRef = useRef(null);
  const {data} = useSelector(state => state.garageSpaces)
  const handlePlaceSelect = (place) => {
    const { geometry } = place;
    const { lat, lng } = geometry.location;

    const geocode = {
      lat: lat(),
      lng: lng(),
    };

    dispatch(setGeocode(geocode));
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setLocationInfo("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat: latitude, lng: longitude };
  
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          const address = results[0].formatted_address;
          setLocationInfo(address); // Update the location with the address
          autocompleteRef.current.value = address; // Update the autocomplete field value
  
          const geocode = {
            lat: latitude,
            lng: longitude,
          };
          dispatch(setGeocode(geocode));
        } else {
          setLocationInfo("No address found");
        }
      } else {
        setLocationInfo("Geocoder failed due to: " + status);
      }
    });
  };  

  library.add(faMapMarkerAlt);
  
  const handleGetParkingSpaces = async()=>{
     await closestGarage().then((res => {
     dispatch(getNearbyGarageSpaces(res))
    }));
  }
  return (
    <div className={`d-flex align-items-center ${classes["image-holder"]}`}>
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col col-lg-5 col-10" style={{ zIndex: "1" }}>
            <div className="pb-4">
              <h1 className={`${classes.White} my-3`}>
                Find parking in seconds
              </h1>
              <p className={classes.White}>
                Choose from millions of available spaces, or reserve your space
                in advance. Join over 10 million drivers enjoying easy parking.
              </p>
            </div>

            {/* input field to search for location */}
            <div className={classes.autocompleteContainer}>
              <AutoComplete
                apiKey="AIzaSyDxE47Kh4gnM9Sh-Nj6vTjFzful_q7lZdY"
                className={classes.autocompleteField}
                ref={autocompleteRef}
                style={{
                  width: "100%",
                  height: "60px",
                  border: "2px solid #851fbf",
                  borderRadius: "6px",
                  padding: "16.5px 14px",
                  marginBottom: "-20px",
                }}
                options={{
                  componentRestrictions: { country: "EG" },
                  types: ['address']
                }}
                onPlaceSelected={handlePlaceSelect}
              />
              <div
                className={classes.locationIcon}
                onClick={handleLocationClick}
                style={{ position: "relative" }}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ position: "absolute", top: "-23px", right: "25px", cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* date and time inputs */}
            <div className="row my-3">
              <DateTimePickerValue />
            </div>

            <button
              className="btn mt-2"
              style={{ backgroundColor: "#851fbf", color: "white" }}
              onClick={handleGetParkingSpaces}
            >
              Show parking spaces
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSearch;
