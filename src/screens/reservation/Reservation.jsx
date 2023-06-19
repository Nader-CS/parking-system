import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookingDetails from "../../components/Reservation/BookingDetails";
import PickedGarageDetails from "../../components/Reservation/PickedGarageDetails";
import { toast } from "react-toastify";

export default function Reservation() {
  const garageData = useSelector((state) => state.selectedGarage);
  const reservation = useSelector((state) => state.reservation);
  const isGarageEmpty = Object.keys(garageData.garage).length === 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (reservation.successMessage !== null) {
      toast.success(reservation.successMessage, {
        onClose: () => {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
        autoClose: 2000,
      });
    }

    if (reservation.errorMessage !== null) {
      toast.error(reservation.errorMessage);
    }
  }, [reservation.successMessage, reservation.errorMessage, navigate]);
  // console.log(`garage ${isGarageEmpty}`);
  if (isGarageEmpty) {
    console.log("null");
    return (
      <Box
        height="60vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={{ xs: 2, md: 8.5 }}
        paddingY={4}
        sx={{ backgroundColor: "#f3f7f9" }}
      >
        <Typography variant="body1" fontWeight="bold" align="center">
          You Cannot Access This Page. GET OUT!
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box
        height="100%"
        paddingX={{ xs: 2, md: 8.5 }}
        paddingY={4}
        sx={{ backgroundColor: "#f3f7f9" }}
      >
        <Typography fontSize={30} fontWeight="bold">
          Confirm your booking and pay
        </Typography>
        {reservation.isLoading ? (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Stack direction={{ xs: "column", md: "row" }}>
            <BookingDetails />
            <PickedGarageDetails />
          </Stack>
        )}
      </Box>
    );
  }
}
