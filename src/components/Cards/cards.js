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
import img from "../../assets/images/park.jpg";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GarageCards = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const {data} = useSelector(state => state.garageSpaces)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

   return (<div style={{display:'flex', justifyContent:'flex-start', gap:'20px', flexWrap:'wrap'}}>
    
    {data&&data.map(garage => (
      <div style={{ padding: "2%" }}>
        <div>dfdsfdsfds</div>
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
            image={img}
            alt="green iguana"
          />
          <CardContent style={{ width: "70%" }}>
            <Typography gutterBottom variant="h5" component="div">
              {garage.distance}
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
                19 mins to destination
              </p>
            </div>
            <Button
              onClick={handleClick}
              style={{
                backgroundColor: "#AA23B6",
                width: "100%",
                marginTop: "10px",
                zIndex: 2,
              }}
              variant="contained"
            >
              Reserve for 10.00
            </Button>
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
              <p className="m-0"> Q-Park Victoria</p>
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
            </DialogContentText>
            <div
              className="row px-0 mx-0 mb-3 py-3"
              style={{ backgroundColor: "#bfbcbc38" }}
            >
              <div className="col-4 text-center border-right border-secondary px-2">
                <p className="m-0" style={{ fontWeight: 600 }}>
                  4h
                </p>
                <p className="m-0">Total duration</p>
              </div>
              <div className="col-4 text-center border-right border-secondary px-2">
                <p className="m-0" style={{ fontWeight: 600 }}>
                  10.00
                </p>
                <p className="m-0">Parking fee</p>
              </div>
              <div className="col-4 text-center border-right border-secondary px-2">
                <p className="m-0" style={{ fontWeight: 600 }}>
                  <DirectionsWalkIcon
                    style={{ fontSize: "18px" }}
                  ></DirectionsWalkIcon>
                  19 min
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
                    <p>
                      Fantastic secure underground parking spaces available at
                      Q-Park Victoria, London. This car park is located close to
                      Lambeth Bridge, and just a short walk from Victoria
                      Station, Tate Britain, and the Palace of Westminster. This
                      car park is open 24/7. There is a height restriction of
                      2.1m. Drivers will only be able to enter once. Please
                      ensure to enter your vehicle registration when booking.
                      Extensions are not available through JustPark at this
                      location, please ensure you book for the total time you
                      need. You will be required to use the kiosks at the
                      carpark to validate your booking, instructions can be
                      found in your access instructions.
                    </p>
                    <Button
              onClick={handleClick}
              style={{
                backgroundColor: "#AA23B6",
                width: "100%",
                marginTop: "10px",
                zIndex: 2,
              }}
              variant="contained"
            >
              Reserve for 10.00
            </Button>
                  </TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box>
            </TabContext>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Card>
    </div>
    ))}
  </div>);
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
