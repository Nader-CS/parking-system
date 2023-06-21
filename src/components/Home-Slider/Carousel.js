import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import style from "./carousel.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";

export default function Carousel() {
  const { t, i18n } = useTranslation();
  const [forceUpdate, setForceUpdate] = useState(false); //used to force re-render OwlCarousel component

  const options = {
    nav: false,
    items: 3,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 1000,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 4 } },
    autoplayHoverPause: true,
    dots: true,
    dotsEach: true,
    dotClass: `${style.dotClass}`,
    dotsClass: `${style.dotsClass}`,
  };
  useEffect(() => {
    setForceUpdate((prev) => !prev);
  }, [t]);
  return (
    <>
      <Container align="center" style={{ marginTop: "7rem" }}>
        <Typography
          variant="h6"
          sx={{ mt: "1rem", pb: "1rem" }}
          className={`${style.headerLine}`}
          fontFamily={
            i18n.language === "ar"
              ? "'Noto Kufi Arabic', sans-serif"
              : "'Nunito', sans-serif"
          }
        >
          {t("what")}
          <span className="fw-semibold"> {t("users")} </span>
          {t("are-saying")}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: "1rem" }}
          fontFamily={
            i18n.language === "ar"
              ? "'Noto Kufi Arabic', sans-serif"
              : "'Nunito', sans-serif"
          }
          fontSize={15}
        >
          {t("don’t-just-take-our-word-for-it")}
        </Typography>
      </Container>
      <OwlCarousel className="owl-theme" loop margin={0} {...options} dir="ltr">
        <div className={`item`}>
          <Card className={`${style.crd}`}>
            <CardContent sx={{ height: 150 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("simple-and-easy-to-use-app")}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container className={`${style.imgLineThrow}`}>
                <Avatar
                  aria-label="review"
                  sx={{ width: 75, height: 75, margin: "auto" }}
                  src={require("../../assets/images/Home~Slider/user_1.jpg")}
                ></Avatar>
              </Container>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: "1rem" }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("gemma-t")}
              </Typography>
              <Typography
                align="center"
                sx={{ my: 1 }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("whiteladies-road")}
              </Typography>
              <Typography align="center">
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarHalfIcon sx={{ color: "gold" }} />
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={`item`}>
          <Card className={`${style.crd}`}>
            <CardContent sx={{ height: 150 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                className={``}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("sheaper-than-other-car-parks")}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container className={`${style.imgLineThrow}`}>
                <Avatar
                  aria-label="review"
                  sx={{ width: 75, height: 75, margin: "auto" }}
                  src={require("../../assets/images/Home~Slider/user_2.jpg")}
                ></Avatar>
              </Container>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: "1rem" }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("richard-b")}
              </Typography>
              <Typography
                align="center"
                sx={{ my: 1 }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("high-holborn")}
              </Typography>
              <Typography align="center">
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarHalfIcon sx={{ color: "gold" }} />
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={`item`}>
          <Card className={`${style.crd}`}>
            <CardContent sx={{ height: 150 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                className={``}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("space-for-a-hospital-appointment-in-London")}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container className={`${style.imgLineThrow}`}>
                <Avatar
                  aria-label="review"
                  sx={{ width: 75, height: 75, margin: "auto" }}
                  src={require("../../assets/images/Home~Slider/user_3.jpg")}
                ></Avatar>
              </Container>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: "1rem" }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("jennifier-m")}
              </Typography>
              <Typography
                align="center"
                sx={{ my: 1 }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("melton-street")}
              </Typography>
              <Typography align="center">
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarHalfIcon sx={{ color: "gold" }} />
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={`item`}>
          <Card className={`${style.crd}`}>
            <CardContent sx={{ height: 150 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                className={``}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("away-supporters-attending-a-fulham-game")}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container className={`${style.imgLineThrow}`}>
                <Avatar
                  aria-label="review"
                  sx={{ width: 75, height: 75, margin: "auto" }}
                  src={require("../../assets/images/Home~Slider/user_4.jpg")}
                ></Avatar>
              </Container>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: "1rem" }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("marcus-f")}
              </Typography>
              <Typography
                align="center"
                sx={{ my: 1 }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("vicarage-road")}
              </Typography>
              <Typography align="center">
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarHalfIcon sx={{ color: "gold" }} />
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={`item`}>
          <Card className={`${style.crd}`}>
            <CardContent sx={{ height: 150 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("higher quality")}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container className={`${style.imgLineThrow}`}>
                <Avatar
                  aria-label="review"
                  sx={{ width: 75, height: 75, margin: "auto" }}
                  src={require("../../assets/images/Home~Slider/user_5.jpg")}
                ></Avatar>
              </Container>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: "1rem" }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("carol-n")}
              </Typography>
              <Typography
                align="center"
                sx={{ my: 1 }}
                fontFamily={
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif"
                }
                fontSize={15}
              >
                {t("royal-car-park")}
              </Typography>
              <Typography align="center">
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarHalfIcon sx={{ color: "gold" }} />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </OwlCarousel>
    </>
  );
}
