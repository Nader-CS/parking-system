import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { ReactComponent as MasterCard } from "../../assets/icons/mastercard.svg";
import { ReactComponent as Visa } from "../../assets/icons/visa-10.svg";
import { ReactComponent as Vodafone } from "../../assets/icons/Vodafone_Logo_2017.svg";
import classes from "./Footer.module.css";
import LanguageDropdown from "../Languages/LanguagesDropdown";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <MDBFooter
      className="text-md-center text-lg-start text-sm-start pt-2"
      style={{ backgroundColor: "#1c1b1b", color: "white", textAlign: "left" }}
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom align-items-baseline"
        style={{ fontSize: "1.3rem" }}
      >
        <div
          className="me-5 d-none d-lg-block"
          style={{
            fontFamily:
              i18n.language === "ar"
                ? "'Noto Kufi Arabic', sans-serif"
                : "'Nunito', sans-serif",
          }}
        >
          <span>{t("get-connected")}</span>
        </div>

        <div>
          <a href="#" className="me-4" style={{ fontSize: "1.5rem", }} > <MDBIcon fab icon="facebook-f" /> </a>
          <a href="#" className="me-4" style={{ color: "#1DA1F2", fontSize: "1.5rem", }} > <MDBIcon fab icon="twitter" /> </a>
          <a href="#" className="me-4" style={{ color: "#FF5733", fontSize: "1.5rem", }} > <MDBIcon fab icon="google" /> </a>
          <a href="#" className="me-4" style={{ color: "#e95950", fontSize: "1.5rem", }} > <MDBIcon fab icon="instagram" /> </a>
          <a href="#" className="me-4" style={{ color: "#0077b5", fontSize: "1.5rem", }} > <MDBIcon fab icon="linkedin" /> </a>
          <a href="#" className="me-4" style={{ color: "#f5f5f5", fontSize: "1.5rem", }} > <MDBIcon fab icon="github" /> </a>
        </div>
      </section>

      <section style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
        <MDBContainer className="  mt-5 ">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="gem"
                  className="me-3"
                />
                {i18n.language === "ar" && "\u00A0\u00A0\u00A0\u00A0"}Ipark
              </h6>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontFamily:
                    i18n.language === "ar"
                      ? "'Noto Kufi Arabic', sans-serif"
                      : "'Nunito', sans-serif",
                }}
              >
                {t("ipark-is-one-of-the-best")}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{
                  fontFamily:
                    i18n.language === "ar"
                      ? "'Noto Kufi Arabic', sans-serif"
                      : "'Nunito', sans-serif",
                }}
              >
                {t("helpful-links")}
              </h6>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif", }} >
                <Link style={{textDecoration: 'none'}} to="/">{t("home")}</Link>
              </p>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif", }}>
                <Link style={{textDecoration: 'none'}} to="/how-it-works">{t("how-it-works")}</Link>
              </p>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif", }} >
                <Link style={{textDecoration: 'none'}} to="/contact">{t("complaint-inquiry")}</Link>
              </p>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif", }}>
                <Link style={{textDecoration: 'none'}} to="/about-us">{t("about-us")}</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4" style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif", }}
              >
                {t("other-links")}
              </h6>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif",}} >
                <a style={{textDecoration: 'none'}} href="https://www.google.com/maps/">{t("google-maps")}</a>
              </p>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif",}} >
                <a style={{textDecoration: 'none'}} href="https://www.chevroletarabia.com/eg-ar">
                  {t("chevrolet-egypt")}
                </a>
              </p>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif",}} >
                <a style={{textDecoration: 'none'}} href="https://www.mercedes-benz.com.eg/en/passengercars.html">
                  {t("mercedes-egypt")}
                </a>
              </p>
              <p style={{ fontFamily: i18n.language === "ar" ? "'Noto Kufi Arabic', sans-serif" : "'Nunito', sans-serif",}}>
                <a style={{textDecoration: 'none'}} href="#!">{t("plan")}</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{
                  fontFamily:
                    i18n.language === "ar"
                      ? "'Noto Kufi Arabic', sans-serif"
                      : "'Nunito', sans-serif",
                }}
              >
                {t("contact")}
              </h6>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="home"
                  className={`${i18n.language === "ar" ? "ms-2" : "me-2"}`}
                />
                ITI Cairo University, Dokki
              </p>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="envelope"
                  className={`${i18n.language === "ar" ? "ms-2" : "me-2"}`}
                />
                ITIinfo@iti.gov.eg
              </p>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="phone"
                  className={`${i18n.language === "ar" ? "ms-2" : "me-2"}`}
                />
                <span
                  style={{
                    display: "inline-block",
                    direction: "ltr",
                  }}
                >
                  (+202) 353-55656
                </span>
              </p>
              <p>
                <MDBIcon
                  style={{ color: "#C146D4" }}
                  icon="print"
                  className={`${i18n.language === "ar" ? "ms-2" : "me-2"}`}
                />
                <span
                  style={{
                    display: "inline-block",
                    direction: "ltr",
                  }}
                >
                  (+202) 353-55656
                </span>
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
                <p
                  style={{
                    fontFamily:
                      i18n.language === "ar"
                        ? "'Noto Kufi Arabic', sans-serif"
                        : "'Nunito', sans-serif",
                  }}
                >
                  {t("payment-partners")}
                </p>
                <div
                  style={{
                    height: "0.3rem",
                    background: "#7A26C1",
                    width: "4rem",
                    margin: "0.2rem auto 0 auto",
                  }}
                ></div>
              </div>
              <div className={classes["partner-icons"]}>
                <MasterCard className={classes.partner} />
                <Visa className={`${classes.partner} ${classes.visa}`} />
                <Vodafone className={`${classes.partner} ${classes.Vodafone}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <LanguageDropdown />
      </div>
      <div
        className="text-center py-2"
        style={{
          backgroundColor: "#0978BD",
          fontSize: "1rem",
          fontFamily:
            i18n.language === "ar"
              ? "'Noto Kufi Arabic', sans-serif"
              : "'Nunito', sans-serif",
        }}
      >
        {t("copyright")}
        <span
          className="text-reset fw-bold"
          style={{ letterSpacing: "0.3rem" }}
        >
          &nbsp;Ipark
        </span>
      </div>
    </MDBFooter>
  );
};
export default Footer;
