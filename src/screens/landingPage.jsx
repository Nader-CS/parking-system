import React from "react";
import DateTimePickerValue from "../components/dateAndTimePicker";

const LandingPage = () => {
  // const backgroundImage = '/images/landing.jpg';
  return (
    <div id="image-holder" className="d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col col-md-5 col-10" style={{ zIndex: "1" }}>
            <h1 className="White my-3">Find parking in seconds</h1>
            <p className="White">
              Choose from millions of available spaces, or reserve your space in
              advance. Join over 10 million drivers enjoying easy parking.
            </p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              style={{ height: "75px", width: "100%", border:'1px solid #AA23B6' }}
            />
            <div
              className="row my-3"
            >
              <DateTimePickerValue />
            </div>
            <button
              className="btn"
              style={{ backgroundColor: "#AA23B6", color: "white" }}
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

export default LandingPage;
