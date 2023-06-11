import React from "react";
import DateTimePickerValue from "./dateAndTimePicker";
import classes from "./ParkingSearch.module.css";

const ParkingSearch = () => {
  // const backgroundImage = '/images/landing.jpg';
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

            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              style={{
                height: "75px",
                width: "100%",
                border: "1px solid #AA23B6",
              }}
            />

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
      {/* <DateTimePicker
  label="Controlled picker"
  value={value}
  onChange={(newValue) => setValue(newValue)}
/> */}
    </div>
  );
};

export default ParkingSearch;
