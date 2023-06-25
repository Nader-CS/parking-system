import React, { useEffect, useRef, useState } from "react";
import DateTimePickerValue from "./dateAndTimePicker";
import classes from "./ParkingSearch.module.css";
import AutoComplete from "react-google-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setGeocode } from "../../redux/slices/geoCodeSlice";
import { setName } from "../../redux/slices/geoCodeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dayjs from "dayjs";
// import closestGarage from "../../utilities/closestGarage";
// import { getNearbyGarageSpaces } from "../../redux/slices/garageSpacesSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './ParkingSearch.css';

const ParkingSearch = () => {
  const { duration } = useSelector((state) => state.dateGeocode);
  const dispatch = useDispatch();
  // const [locationInfo, setLocationInfo] = useState("");
  const [locationChosen, setLocationChosen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State variable for modal
  const autocompleteRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true); //state variable for button
  const parkingFrom = useSelector((state) => state.dateGeocode.parkingFrom);
  const parkingUntil = useSelector((state) => state.dateGeocode.parkingUntil);
  const { t, i18n } = useTranslation();

  const handlePlaceSelect = (place) => {
    if (place && place.geometry) {
      const { geometry } = place;
      const { location } = geometry;
      const { lat, lng } = location;

      const geocode = {
        lat: lat(),
        lng: lng(),
      };
      dispatch(setName(place.formatted_address));
      dispatch(setGeocode(geocode));

      // Set the locationInfo to the formatted address
      // setLocationInfo(place.formatted_address);
      setLocationChosen(true);
      setShowModal(false);
    } else {
      setShowModal(true);
      setLocationChosen(false);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      setLocationChosen(true);
    } else {
      // setLocationInfo("Geolocation is not supported by this browser.");
      setLocationChosen(false);
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
          // setLocationInfo(address); // Update the location with the address
          autocompleteRef.current.value = address; // Update the autocomplete field value
          dispatch(setName(address));
          const geocode = {
            lat: latitude,
            lng: longitude,
          };
          dispatch(setGeocode(geocode));
          setLocationChosen(true);
        } else {
          // setLocationInfo("No address found");
          setLocationChosen(false);
        }
      } else {
        // setLocationInfo("Geocoder failed due to: " + status);
        setLocationChosen(false);
      }
    });
  };

  useEffect(() => {
    const getMinimumTime = () => {
      if (dayjs(parkingFrom).isSame(dayjs(parkingUntil), "day")) {
        return dayjs(parkingFrom).add(1, "hour");
      }
      return parkingFrom;
    };

    const currentDateBeforeParkingFrom = dayjs().isBefore(dayjs(parkingFrom));
    const ParkingUntilBeforeParkingFrom = dayjs(parkingUntil).isBefore(
      getMinimumTime()
    );
    const isParkingFromNotChosen = !parkingFrom;
    const isParkingUntilNotChosen = !parkingUntil;
    const isLocationNotChosen = !locationChosen;
    const isFieldsValid =
      !isParkingFromNotChosen &&
      !isParkingUntilNotChosen &&
      !isLocationNotChosen;

    // console.log("currentDateBeforeParkingFrom: "+currentDateBeforeParkingFrom)
    // console.log("ParkingUntilBeforeParkingFrom: "+ParkingUntilBeforeParkingFrom)
    // console.log("isParkingFromNotChosen: "+isParkingFromNotChosen)
    // console.log("isParkingUntilNotChosen: "+isParkingUntilNotChosen)
    // console.log("isLocationNotChosen: " + isLocationNotChosen);
    // console.log("isFieldsValid: "+isFieldsValid)

    const isButtonDisabled =
      !isFieldsValid ||
      !currentDateBeforeParkingFrom ||
      ParkingUntilBeforeParkingFrom;
    setIsDisabled(isButtonDisabled);
  }, [parkingFrom, parkingUntil, locationChosen, isDisabled]);

  const handleAutocompleteChange = () => {
    const place = autocompleteRef.current.value;
    const isValidPlace = place && place.place_id && place.geometry;
    console.log("isValidPlace: " + isValidPlace);
    setLocationChosen(isValidPlace);
  };

  library.add(faLocationCrosshairs);
  const navigate = useNavigate();

  return (
    <div
      className={`d-flex align-items-center ${classes["image-holder"]}`}
      style={{
        fontFamily:
          i18n.language === "ar"
            ? "'Noto Kufi Arabic', sans-serif"
            : "'Nunito', sans-serif",
      }}
    >
      <div className="container">
        <div
          className={`row justify-content-center justify-content-md-start ${i18n.language === "ar" ? "justify-content-md-center" : undefined
            } `}
        >
          <div
            className="col col-lg-5 col-10"
            style={{ zIndex: "1", textAlign: "center" }}
          >
            <div className="pb-4">
              <h1 className={`${classes.White} my-3`}>
                {t("find-parking-in-seconds")}
              </h1>
              <p className={classes.White}>{t("choose-from-millions")}</p>
            </div>

            {/* input field to search for location */}
            <div className={`${classes.autocompleteContainer} differ`}>
              <AutoComplete
                placeholder={t("auto-complete-placeholder")}
                apiKey="AIzaSyDxE47Kh4gnM9Sh-Nj6vTjFzful_q7lZdY"
                autocompleteInputPlaceHolder
                className={`${classes.autocompleteField} ${i18n.language === "ar"
                  ? classes.arautocompleteInputPlaceHolder
                  : classes.enautocompleteInputPlaceHolder
                  }`}
                ref={autocompleteRef}
                onChange={handleAutocompleteChange}
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
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
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
            {/* <Link to="search"> */}
            <button
              className="btn mt-2"
              disabled={isDisabled}
              onClick={() => {
                console.log(isDisabled);
                if (!isDisabled) {
                  navigate("/search");
                }
                const dutrationString = JSON.stringify(duration)
                sessionStorage.setItem(`duration`, `${dutrationString}`)
              }}
              style={{ backgroundColor: "#851fbf", color: "white" }}
            >
              {t("show-parking-spaces")}
            </button>
            {/* </Link> */}
          </div>

          {/* Modal */}
          <div
            className={`modal fade bd-example-modal-lg ${showModal ? "show" : ""
              }`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden={!showModal}
            style={{
              display: showModal ? "flex" : "none",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
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
