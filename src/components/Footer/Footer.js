import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { ReactComponent as MasterCard } from "../../assets/icons/mastercard.svg";
import { ReactComponent as Visa } from "../../assets/icons/visa-10.svg";
import { ReactComponent as Vodafone } from "../../assets/icons/Vodafone_Logo_2017.svg";
import classes from "./Footer.module.css";
import LanguageDropdown from "../Languages/LanguagesDropdown";
const Footer = () => {
  return (
    <MDBFooter
      className="text-md-center text-lg-start text-sm-start pt-2 mt-5"
      style={{ backgroundColor: "#1c1b1b", color: "white", textAlign: "left" }}
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom align-items-baseline"
        style={{ fontSize: "1.3rem" }}
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="#"
            className="me-4 "
            style={{
              color: "#4267B2",
              fontSize: "1.5rem",
            }}
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            href="#"
            className="me-4"
            style={{
              color: "#1DA1F2",
              fontSize: "1.5rem",
            }}
          >
            <MDBIcon fab icon="twitter" />
          </a>
          <a
            href="#"
            className="me-4"
            style={{
              color: "#FF5733",
              fontSize: "1.5rem",
            }}
          >
            <MDBIcon fab icon="google" />
          </a>
          <a
            href="#"
            className="me-4"
            style={{
              color: "#e95950",
              fontSize: "1.5rem",
            }}
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="#"
            className="me-4"
            style={{
              color: "#0077b5",
              fontSize: "1.5rem",
            }}
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            href="#"
            className="me-4"
            style={{
              color: "#f5f5f5",
              fontSize: "1.5rem",
            }}
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className=" text-sm-start text-md-start mt-5 ">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="gem"
                  className="me-3"
                />
                Ipark
              </h6>
              <p style={{ fontSize: "1.1rem" }}>
                Ipark is one of the best platforms that guarantees you access at
                any time and anywhere in Egypt to a garage and other services
                for the vehicle while it parking.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Helpful Links</h6>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/how-it-works">How it works</Link>
              </p>
              <p>
                <Link to="/plan">Pricing</Link>
              </p>
              <p>
                <Link to="/about-us">About us</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Other links</h6>
              <p>
                <a href="https://www.google.com/maps/">Google maps</a>
              </p>
              <p>
                <a href="https://www.chevroletarabia.com/eg-ar">
                  Chevrolet Egypt
                </a>
              </p>
              <p>
                <a href="https://www.mercedes-benz.com.eg/en/passengercars.html">
                  Mercedes Egypt
                </a>
              </p>
              <p>
                <a href="#!">Complaint / Inquiry</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="home"
                  className="me-2"
                />
                ITI Cairo University, Dokki
              </p>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="envelope"
                  className="me-3"
                />
                ITIinfo@iti.gov.eg
              </p>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="phone"
                  className="me-3"
                />
                (+202) 353-55656
              </p>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="print"
                  className="me-3"
                />
                (+202) 353-55656
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="container-fluid  text-white pb-3">
        <div className="row">
          <div className="col text-center">
            <div className={classes["partner-container"]}>
              <div className={classes["partner-info"]}>
                <p>payment partners</p>
              </div>
              <div className={classes["partner-icons"]}>
                <MasterCard className={classes.partner} />
                <Visa className={`${classes.partner} ${classes.visa}`} />
                <Vodafone
                  className={`${classes.partner} ${classes.Vodafone}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <LanguageDropdown />
      </div>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "#0978BD", fontSize: "1.3rem" }}
      >
        © 2023 Copyright:
        <span
          className="text-reset fw-bold"
          style={{ letterSpacing: "0.3rem" }}
        >
          {" "}
          Ipark
        </span>
      </div>
    </MDBFooter>
  );
};
export default Footer;
