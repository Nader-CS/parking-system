import DateTimePickerValue from "./dateAndTimePicker";
import classes from "./ParkingSearch.module.css";
import AutoComplete from "react-google-autocomplete";
import { useDispatch } from "react-redux";
import { setGeocode } from "../../redux/slices/geoCodeSlice";

const ParkingSearch = () => {
  const dispatch = useDispatch();
  const handlePlaceSelect = (place) => {
    const { geometry } = place;
    const { lat, lng } = geometry.location;

    const geocode = {
      lat: lat(),
      lng: lng(),
    };

    dispatch(setGeocode(geocode));

    console.log(geocode);
  };

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
            <AutoComplete
              apiKey="AIzaSyDxE47Kh4gnM9Sh-Nj6vTjFzful_q7lZdY"
              className={classes.autocompleteContainer}
              // suggestionsClassNames={{
              //   suggestion: classes.suggestion,
              // }}
              style={{
                width: "100%",
                height: "60px",
                border: "2px solid #851fbf",
                borderRadius: "6px",
                padding: "16.5px 14px",
              }}
              options={{
                // types: ["(regions)"],
                componentRestrictions: { country: "EG" },
              }}
              onPlaceSelected={handlePlaceSelect}
            />

            {/* date and time inputs */}
            <div className="row my-3">
              <DateTimePickerValue />
            </div>

            <button
              className="btn mt-2"
              style={{ backgroundColor: "#851fbf", color: "white" }}
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
