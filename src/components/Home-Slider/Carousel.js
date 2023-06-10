import React from "react";
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

export default function Carousel() {
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

  return (
    <>
      <Container align="center" style={{ marginTop: "7rem" }}>
        <Typography
          variant="h6"
          sx={{ mt: "1rem", pb: "1rem" }}
          className={`${style.headerLine}`}
        >
          What<span className="fw-semibold"> users </span>are saying
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: "1rem" }}>
          Don’t just take our word for it – check out some of the latest
          customer reviews for our London parking spaces
        </Typography>
      </Container>
      <OwlCarousel className="owl-theme" loop margin={0} {...options}>
        <div className={`item`}>
          <Card className={`${style.crd}`}>
            <CardContent sx={{ height: 150 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                Simple and easy-to-use app, perfect for my commute into work.
                Saves on stress of having to find a space in the morning in such
                a difficult area to find parking.
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
              <Typography variant="body2" align="center" sx={{ mt: "1rem" }}>
                Gemma T
              </Typography>
              <Typography align="center" sx={{ my: 1 }}>
                Car park on Whiteladies Road, Bristol
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
              >
                The convenient parking made our stay all the more enjoyable.
                Cheaper than the train and cheaper than other car parks too.
                Easy booking system and pre-payment takes the stress out of
                finding cash.
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
              <Typography variant="body2" align="center" sx={{ mt: "1rem" }}>
                Richard B
              </Typography>
              <Typography align="center" sx={{ my: 1 }}>
                Car park on High Holborn, London
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
              >
                I used this space for a hospital appointment in London. The
                whole JustPark experience has been great! So easy to find and
                book a space - at a brilliant price too! Saved us a bundle of
                money and stress.
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
              <Typography variant="body2" align="center" sx={{ mt: "1rem" }}>
                Jennifier M
              </Typography>
              <Typography align="center" sx={{ my: 1 }}>
                Car park on Melton Street, London
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
              >
                Not used to reviewing parking spaces, but have to say this one
                was perfect! We used it as away supporters attending a Fulham
                game. So much easier than the other alternatives.
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
              <Typography variant="body2" align="center" sx={{ mt: "1rem" }}>
                Marcus F
              </Typography>
              <Typography align="center" sx={{ my: 1 }}>
                Driveway, Vicarage Road, Birmingham
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
              <Typography variant="body2" color="text.secondary" align="center">
                Such a higher quality than other places nearby! Really easy to
                find and the staff are very professional and friendly. It was
                also very easy to book using the app, there are spaces all over
                Bristol.
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
              <Typography variant="body2" align="center" sx={{ mt: "1rem" }}>
                Carol N
              </Typography>
              <Typography align="center" sx={{ my: 1 }}>
                Marriott Bristol Royal Car Park, Bristol
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
      ;
    </>
  );
}
