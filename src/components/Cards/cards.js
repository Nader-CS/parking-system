import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./cards.module.css";
import "./cards.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import closestGarage from "../../utilities/closestGarage";
import { getNearbyGarageSpaces } from "../../redux/slices/garageSpacesSlice";
import { Link } from "react-router-dom";
import { getSelectedGarage } from "../../redux/slices/selectedGarage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GarageCards = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.garageSpaces);
  const { duration } = useSelector((state) => state.dateGeocode);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(getSelectedGarage());
  };
  React.useEffect(() => {
    console.log(duration);
    closestGarage().then((res) => {
      dispatch(getNearbyGarageSpaces(res));
    });
  }, [dispatch, duration]);
  if (!data) return <div>Loading</div>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {data.map((garage) => (
        <div style={{ padding: "2%" }}>
          <Card sx={{ maxWidth: 450 }} className={style.card}>
            <CardActionArea
              onClick={handleClickOpen}
              className="d-flex ps-2"
              style={{ height: "150px" }}
            >
              <CardMedia
                style={{ width: "30%" }}
                component="img"
                height="140"
                image={garage.garage["images"][0]}
                alt="green iguana"
              />
              <CardContent style={{ width: "70%" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {garage.garage["name"]}
                </Typography>
                <div className="d-flex align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <Rating
                      className={`${style.stars_size} p-0 m-0`}
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    <p
                      className="ps-1 pe-5 m-0"
                      style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.6)" }}
                    >
                      (9)
                    </p>
                  </div>
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
                <Link to={`/checkout}`}>
                  <Button
                    onClick={() => {
                      const garageObj = garage;
                      const price =
                        garage.garage["pricePerHour"] * duration["hours"];
                      dispatch(getSelectedGarage({ garageObj, price }));
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
                    {garage.garage["pricePerHour"] * duration["hours"]} L.E
                  </Button>
                </Link>
              </CardContent>
            </CardActionArea>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              sx={{
                width: 530,
                top: 0,
              }}
              style={{ width: 450 }}
              onClose={handleClose}
              BackdropComponent={CustomBackdrop}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>
                <div className="d-flex justify-content-between">
                  <p className="m-0"> {garage.garage["name"]}</p>
                  <Button onClick={handleClose}>
                    <CloseIcon />
                  </Button>
                </div>
              </DialogTitle>
              <DialogContent style={{ padding: 0, margin: 0 }}>
                <DialogContentText
                  className="px-3 mb-5"
                  id="alert-dialog-slide-description"
                >
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <Rating
                        className={`${style.stars_size} p-0 m-0`}
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      />
                      <p
                        className="ps-1 pe-2 m-0"
                        style={{
                          fontSize: "12px",
                          color: "rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        (9)
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <DirectionsCarIcon
                        style={{ fontSize: "18px" }}
                      ></DirectionsCarIcon>
                      <p
                        className="ps-1 m-0"
                        style={{
                          fontSize: "12px",
                          color: "rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        +100 bookings
                      </p>
                    </div>
                  </div>
                </DialogContentText>
                <div
                  className="row px-0 mx-0 mb-3 py-3"
                  style={{ backgroundColor: "#bfbcbc38" }}
                >
                  <div className="col-4 text-center border-right border-secondary px-2">
                    <p className="m-0" style={{ fontWeight: 600 }}>
                      {duration["minutes"]
                        ? duration["hours"] + ":" + duration["minutes"]
                        : duration["hours"]}
                      h
                    </p>
                    <p className="m-0">Total duration</p>
                  </div>
                  <div className="col-4 text-center border-right border-secondary px-2">
                    <p className="m-0" style={{ fontWeight: 600 }}>
                      {garage.garage["pricePerHour"] * duration["hours"]} L.E
                    </p>
                    <p className="m-0">Parking fee</p>
                  </div>
                  <div className="col-4 text-center border-right border-secondary px-2">
                    <p className="m-0" style={{ fontWeight: 600 }}>
                      <DirectionsWalkIcon
                        style={{ fontSize: "18px" }}
                      ></DirectionsWalkIcon>
                      {garage.duration.slice(0, 6)}
                    </p>
                    <p className="m-0">To destination</p>
                  </div>
                </div>
                <TabContext value={value}>
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="Information" value="1" />
                          <Tab label="Reviews" value="2" />
                          <Tab label="How to park" value="3" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <p
                          className="p-2 mb-3 border border-seconary w-50 rounded"
                          style={{ backgroundColor: "#bfbcbc38" }}
                        >
                          Suitable for tall vehicles
                        </p>
                        <p
                          className="p-2 border border-seconary w-50 rounded"
                          style={{ backgroundColor: "#bfbcbc38" }}
                        >
                          Overnight parking allowed
                        </p>
                        <p>{garage.garage["description"]}</p>
                        <div className="row">
                          <img
                            className="col-6"
                            src={garage.garage["images"][0]}
                            alt="garage pic1"
                          ></img>
                          <img
                            className="col-6"
                            src={garage.garage["images"][1]}
                            alt="garage pic2"
                          ></img>
                        </div>
                      </TabPanel>
                      <TabPanel value="2">Item Two</TabPanel>
                      <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                  </Box>
                </TabContext>
              </DialogContent>
              <Link style={{ width: "80%", margin: "auto" }} to={`/checkout}`}>
                <Button
                  onClick={() => {
                    const garageObj = garage;
                    const price =
                      garage.garage["pricePerHour"] * duration["hours"];
                    dispatch(getSelectedGarage({ garageObj, price }));
                  }}
                  style={{
                    backgroundColor: "#AA23B6",
                    width: "100%",
                    margin: "10px auto",
                  }}
                  variant="contained"
                >
                  Reserve for{" "}
                  {garage.garage["pricePerHour"] * duration["hours"]} L.E
                </Button>
              </Link>
              <DialogActions></DialogActions>
            </Dialog>
          </Card>
        </div>
      ))}
    </div>
  );
};
const CustomBackdrop = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "none",
});
export default GarageCards;
