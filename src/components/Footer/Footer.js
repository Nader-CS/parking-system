import React from "react";
import classes from "./Footer.module.css";
import { ReactComponent as MasterCard } from "../../assets/icons/mastercard.svg";
import { ReactComponent as Visa } from "../../assets/icons/visa-10.svg";
import { ReactComponent as Vodafone } from "../../assets/icons/Vodafone_Logo_2017.svg";
import { ReactComponent as Logo } from "../../assets/icons/favicon.svg";
import { ReactComponent as Ipark } from "../../assets/icons/logo-no-background.svg";
import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from "react-icons/bs";
import LanguageDropdown from "../Languages/LanguagesDropdown";
const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className="container-fluid  text-white">
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
        <hr className="hr" />
        <div className="row ps-md-3 pe-md-3 mb-2">
          <div className="col d-flex gap-2">
            <div className={classes.logoContainer}>
              <Logo className={classes.logo} />
            </div>
            <div className={classes.logoContainer}>
              <Ipark className={classes["logo-text"]} />
            </div>
            <LanguageDropdown />
          </div>

          <div
            className={`${classes.icons} col d-flex align-items-center justify-content-around`}
          >
            <div className="icons-container d-flex gap-3">
              <a href="#">
                <BsFacebook
                  style={{ fontSize: "2rem" }}
                  className={classes.facebook}
                />
              </a>
              <a href="#">
                <BsTwitter
                  style={{ fontSize: "2rem" }}
                  className={classes.twitter}
                />
              </a>
              <a href="#">
                <BsInstagram
                  style={{ fontSize: "2rem" }}
                  className={classes.instagram}
                />
              </a>
              <a href="#">
                <BsGoogle
                  style={{ fontSize: "2rem" }}
                  className={classes.google}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
