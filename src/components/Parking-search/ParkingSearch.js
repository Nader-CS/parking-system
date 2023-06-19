import React, { useRef, useState } from "react";
import DateTimePickerValue from "./dateAndTimePicker";
import classes from "./ParkingSearch.module.css";
import AutoComplete from "react-google-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setGeocode } from "../../redux/slices/geoCodeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import closestGarage from "../../utilities/closestGarage";
import { getNearbyGarageSpaces } from "../../redux/slices/garageSpacesSlice";
import { Link } from "react-router-dom";

const ParkingSearch = () => {
  const { duration } = useSelector((state) => state.dateGeocode);
  const dispatch = useDispatch();
  const [locationInfo, setLocationInfo] = useState("");
  const [showModal, setShowModal] = useState(false); // State variable for modal
  const autocompleteRef = useRef(null);
  const handlePlaceSelect = (place) => {
    if (place && place.geometry) {
      const { geometry } = place;
      const { location } = geometry;
      const { lat, lng } = location;

      const geocode = {
        lat: lat(),
        lng: lng(),
      };

      dispatch(setGeocode(geocode));
      setShowModal(false);
    } else {
      setShowModal(true);
    }
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

  
  library.add(faLocationCrosshairs);

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
                  types: ["address"],
                }}
                onPlaceSelected={handlePlaceSelect}
              />
              <div
                className={classes.locationIcon}
                onClick={handleLocationClick}
                style={{ position: "relative" }}
              >
                <FontAwesomeIcon icon={faLocationCrosshairs}
                  style={{
                    position: "absolute",
                    top: "-23px",
                    right: "15px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            {/* date and time inputs */}
            <div className="row my-3">
              <DateTimePickerValue />
            </div>
            <Link to="search">
            <button
            onClick={localStorage.setItem(`duration`, `${duration['hours']}`)}
              className="btn mt-2"
              style={{ backgroundColor: "#851fbf", color: "white" }}
            >
              Show parking spaces
            </button>
            </Link>
          </div>
                  
          {/* Modal */}
          <div
            className={`modal fade bd-example-modal-lg ${
              showModal ? "show" : ""
            }`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden={!showModal}
            style={{
              display: showModal ? "flex" : "none",
              alignItems: "center",
            }}
          >
            <div className="modal-dialog modal-lg" style={{ width: "80%" }}>
              <div className="modal-content">
                {/* Modal content */}
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    style={{ color: "red", fontSize: "24px" }}
                  >
                    Error!
                  </h5>
                  
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                    style={{ backgroundColor: "#851fbf", color: "white" }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                
                  
                </div>
                <div
                  className="modal-body"
                  style={{ color: "#851fbf", fontSize: "20px" }}
                >
                  {/* Modal body content */}
                  <p>Please enter a valid location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSearch;
