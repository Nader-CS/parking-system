import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import {
  kCalculatePrice,
  kFormatDate,
  kFormatDuration,
} from "../../utilities/Constants";
import { useDispatch, useSelector } from "react-redux";
import { reserveGarage } from "../../redux/slices/reservationSlice";
import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";

export default function ReserveDialog({
  additionalData,
  open,
  handleClose,
}) {
  const reservation = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.selectedGarage);
  const garage = data.garage.garage;
  const garageId = garage.id;
  const availableSpots = garage.availableSpots;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: { xs: "90%", md: "60%" },
          height: "42%",
          position: "fixed",
          top: "20%",
          left: { xs: "5%", md: "25%" },
          m: 0,
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h6" fontWeight="bold">
          Reservation
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography fontSize={16} fontWeight="bold">
          {garage.address}
        </Typography>
        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Typography variant="subtitle2" fontWeight="bold">
            Arriving on:
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold">
            {kFormatDate(additionalData.parkingFrom)}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" fontWeight="bold">
            Leaving on:
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold">
            {kFormatDate(additionalData.parkingUntil)}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" fontWeight="bold">
            Duration:
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold">
            {kFormatDuration(additionalData.duration)}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" fontWeight="bold">
            Price:
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold">
            EGP {kCalculatePrice(additionalData.duration, garage.pricePerHour)}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleClose}
          sx={{
            textTransform: "capitalize",

            padding: "0.5rem 2rem",
            borderRadius: "0.2rem",
            backgroundColor: "red",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ed8590",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          onClick={() => {
            handleClose();
            console.log(garageId, availableSpots);
            dispatch(reserveGarage({ garageId, availableSpots }));
            // navigate("/signup");
            console.log(reservation);
            // if (reservation.successMessage) {
            //   toast.success(reservation.successMessage, {
            //     autoClose: 2000,
            //   });
            // }

            // if (reservation.errorMessage !== null) {
            //   toast.error(reservation.errorMessage);
            // }
            setTimeout(() => {
              navigate("/");
            }, 1500);
          }}
          sx={{
            textTransform: "capitalize",

            padding: "0.5rem 2rem",
            borderRadius: "0.2rem",
            backgroundColor: "#7926c1",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#9f53db",
            },
          }}
        >
          Confirm
        </Button>
      </DialogActions>
      {/* <ToastContainer /> */}
    </Dialog>
  );
}
