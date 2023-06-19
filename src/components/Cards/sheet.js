import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Slide from "@mui/material/Slide";
import svg1 from '../../assets/images/how_to_park_step_1.svg'
import svg2 from '../../assets/images/how_to_park_step_2.svg'
import svg3 from '../../assets/images/how_to_park_step_3.svg'
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import style from "./cards.module.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSelectedGarage } from "../../redux/slices/selectedGarage";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Sheet = ({duration , garage, open, close})=> {
    const dispatch = useDispatch();
    
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  
    return <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    sx={{
      width: 530,
      top: 0,
    }}
    style={{ width: 450 }}
    onClose={close}
    BackdropComponent={CustomBackdrop}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>
      <div className="d-flex justify-content-between">
        <p className="m-0"> {garage.garage["name"]}</p>
        <Button onClick={close}>
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
              defaultValue={garage.garage["reviews"].reduce((total, next) => total + next.rating, 0) / garage.garage["reviews"].length}
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
              ({garage.garage["reviews"].length})
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
        <div className="col-4 text-center border-end border-secondary px-2">
          <p className="m-0" style={{ fontWeight: 600 }}>
            {/* {duration["minutes"]
              ? duration["hours"] + ":" + duration["minutes"]
              : duration["hours"]} */}
              {duration}
            h
          </p>
          <p className="m-0">Total duration</p>
        </div>
        <div className="col-4 text-center border-end border-secondary px-2">
          <p className="m-0" style={{ fontWeight: 600 }}>
          {duration * garage.garage["pricePerHour"]}
          {/* {duration["days"]?garage.garage["pricePerHour"] * ((duration["days"] * 24) + duration["hours"]) :garage.garage["pricePerHour"] * duration["hours"]} L.E */}
          </p>
          <p className="m-0">Parking fee</p>
        </div>
        <div className="col-4 text-center px-2">
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
            <TabPanel value="2">
              {garage.garage["reviews"].map(rev=>(

                <div key={rev.id} className="border-bottom py-2 mb-2">
                <div className="d-flex align-items-center">
                  <p className="fw-bold me-2 mb-0 fs-6">
                    {rev.userName}
                  </p>
                  <p style={{fontSize:10, color:'gray', margin:0}}>
                    {rev.date}
                  </p>
                </div>
                <Rating
            className={`${style.stars_size} p-0 mb-3`}
            name="half-rating-read"
            defaultValue={rev.rating}
            precision={0.5}
            readOnly
          />
          <p>{rev.review}</p>
              </div>
              ))}
              
            </TabPanel>
            <TabPanel value="3">
              <div className="d-flex flex-column">
              <div className="d-flex mb-3">
                <img src={svg1} alt="img1"></img>
                <div className="ms-4">
                  <p className="fw-bold mb-2">Once you've paid</p>
                  <p>You'll receive directions to the space and information on how to access it</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                
                <img src={svg2} alt="img2"></img>
                <div className="ms-4">
                  <p>The space owner/car park is notified of your booking</p>
                </div>
              </div>
              <div className="d-flex">
                <img src={svg3} alt="img3"></img>
                <div className="ms-4">
                  <p>Just turn up, park your vehicle and get on with your day!</p>
                </div>
              </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </TabContext>
    </DialogContent>
    <Link style={{ width: "80%", margin: "auto" }} to={`/checkout}`}>
      <Button
        onClick={() => {
          const garageObj = garage;
          const price = duration * garage.garage["pricePerHour"]
          // duration["days"]?garage.garage["pricePerHour"] * ((duration["days"] * 24) + duration["hours"]) :garage.garage["pricePerHour"] * duration["hours"];
          dispatch(getSelectedGarage({ garageObj, price }));
        }}
        style={{
          backgroundColor: "#AA23B6",
          width: "100%",
          margin: "10px auto",
        }}
        variant="contained"
      >
        {/* {localStorage.setItem(`price`, `${duration["days"]?garage.garage["pricePerHour"] * ((duration["days"] * 24) + duration["hours"]) :garage.garage["pricePerHour"] * duration["hours"]}`)} */}
        Reserve for{" "}
        {duration * garage.garage["pricePerHour"]}
        {/* {duration["days"]?garage.garage["pricePerHour"] * ((duration["days"] * 24) + duration["hours"]) :garage.garage["pricePerHour"] * duration["hours"]} L.E */}
      </Button>
    </Link>
    <DialogActions></DialogActions>
  </Dialog>
}
const CustomBackdrop = styled("div")({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "none",
  });
export default Sheet;