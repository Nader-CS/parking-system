import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./cards.module.css";
import "./cards.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import { useDispatch, useSelector } from "react-redux";
import closestGarage from "../../utilities/closestGarage";
import {
  checkIsFilled,
  getNearbyGarageSpaces,
} from "../../redux/slices/garageSpacesSlice";
import { Link, useNavigate } from "react-router-dom";
import { getSelectedGarage } from "../../redux/slices/selectedGarage";
import { kCalculatePrice } from "../../utilities/Constants";
import Skeleton from "@mui/material/Skeleton";
import Sheet from "./sheet";

const GarageCards = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.garageSpaces);
  // const { duration } = useSelector((state) => state.dateGeocode);
  const dutrationString = sessionStorage.getItem("duration");
  const duration = JSON.parse(dutrationString);
  // const { geocode } = useSelector((state) => state.dateGeocode);
  const geoString = sessionStorage.getItem("geocode");
  const geocode = JSON.parse(geoString);
  const [open, setOpen] = React.useState(false);
  const [id, setID] = React.useState("");
  const { isFilled } = useSelector((state) => state.garageSpaces);
  const handleClickOpen = (id) => {
    setOpen(true);
    setID(id);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    closestGarage(geocode.lat, geocode.lng)
      .then((res) => {
        dispatch(getNearbyGarageSpaces(res));
      })
      .then(() => dispatch(checkIsFilled(true)));
  }, [dispatch]);

  let isGarageOwner = localStorage.getItem("garageOwner");
  console.log(`isGarageOwner ${isGarageOwner}`);

  if (!isFilled)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Stack spacing={1}>
          <Skeleton
            style={{ margin: "20 auto" }}
            variant="rounded"
            width={400}
            height={120}
          />
          <Skeleton variant="rounded" width={400} height={120} />
          <Skeleton variant="rounded" width={400} height={120} />
          {console.log(data)}
        </Stack>
      </div>
    );
  if (data.length === 0) return "";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {data.map((garage) => (
        <div
          style={{ padding: "2%" }}
          className={style.card}
          key={garage.garage["id"]}
        >
          {console.log(data)}
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea
              onClick={() => {
                handleClickOpen(garage.garage["id"]);
              }}
              className="d-flex ps-2"
              style={{ height: "150px" }}
            >
              <CardMedia
                style={{ width: "30%" }}
                component="img"
                height="140"
                image={garage.garage["imagesURL"][0]}
                alt="green iguana"
              />
              <CardContent style={{ width: "70%" }}>
                <Typography
                  gutterBottom
                  fontSize={16}
                  fontWeight="bold"
                  component="div"
                >
                  {garage.garage["address"]}
                </Typography>
                <div className="d-flex align-items-center mb-2">
                  {garage.garage["reviews"] && (
                    <div className="d-flex align-items-center">
                      <Rating
                        className={`${style.stars_size} p-0 m-0`}
                        name="half-rating-read"
                        defaultValue={
                          garage.garage["reviews"].reduce(
                            (total, next) => total + next.rating,
                            0
                          ) / garage.garage["reviews"].length
                        }
                        precision={0.5}
                        readOnly
                      />

                      <p
                        className="ps-1 pe-5 m-0"
                        style={{
                          fontSize: "12px",
                          color: "rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        ({garage.garage["reviews"].length})
                      </p>
                    </div>
                  )}
                  <div className="d-flex align-items-center">
                    <DirectionsCarIcon
                      style={{ fontSize: "18px" }}
                    ></DirectionsCarIcon>
                    <p
                      className="ps-1 m-0"
                      style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.6)" }}
                    >
                      +100 bookings
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <DirectionsWalkIcon
                    style={{ fontSize: "18px" }}
                  ></DirectionsWalkIcon>
                  <p
                    className="ps-1 m-0"
                    style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    {garage.duration.slice(0, 6)} to destination
                  </p>
                </div>
                <Link to={`/reservation`}>
                <Button
                  // disabled={isGarageOwner === true}
                  onClick={() => {
                    const garageObj = garage;
                    const price = kCalculatePrice(
                      duration,
                      garage.garage["pricePerHour"]
                    );
                    dispatch(getSelectedGarage({ garageObj, price }));
                    // if (isGarageOwner === false) {
                    //   console.log(`yes`);
                    //   navigate("/reservation");
                    // }
                  }}
                  style={{
                    backgroundColor: "#AA23B6",
                    width: "100%",
                    marginTop: "10px",
                    zIndex: 2,
                  }}
                  variant="contained"
                >
                  Reserve for{" "}
                  {kCalculatePrice(duration, garage.garage["pricePerHour"])} LE
                </Button>
                </Link>
              </CardContent>
            </CardActionArea>
            <Sheet
              filled={isFilled}
              id={id}
              open={open}
              close={handleClose}
            ></Sheet>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default GarageCards;
