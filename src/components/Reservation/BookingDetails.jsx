import { CalendarMonth, TimerOutlined } from "@mui/icons-material";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthCard from "./AuthCard";
import BookingTimer from "./BookingTimer";
import CardBox from "./CardBox";
import Payment from "./Payment-Stripe/Payment";
import {
  isNotSigned,
  // isNotSigned,
  kCalculatePrice,
  kFormatDate,
  kFormatDuration,
} from "../../utilities/Constants";
import PaymentMethod from "./PaymentMethod";
import ReserveDialog from "./ReserveDialog";
import { useSelector } from "react-redux";
import TermsDialog from "./TermsDialog";
// import Payment from "./Payment-Stripe/Payment";

export default function BookingDetails() {
  const [open, setOpen] = React.useState(false);
  const [termsOpen, setTermsOpen] = React.useState(false);
  const data = useSelector((state) => state.dateGeocode);
  const garageData = useSelector((state) => state.selectedGarage);
  const [selectedOption, setSelectedOption] = useState("cash");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box width={{ xs: "100%", md: "60%" }} order={{ xs: 2, md: 1 }}>
      <CardBox>
        <Typography fontSize={22} fontWeight="bold">
          Booking details
        </Typography>
        <BookingTimer
          icon={<CalendarMonth />}
          text="Arriving on"
          value={kFormatDate(data.parkingFrom)}
          isUnderLine={true}
        />
        <BookingTimer
          icon={<CalendarMonth />}
          text="Leaving on"
          value={kFormatDate(data.parkingUntil)}
          isUnderLine={true}
        />
        <BookingTimer
          icon={<TimerOutlined />}
          text="Duration"
          value={kFormatDuration(data.duration)}
          isUnderLine={false}
        />
      </CardBox>
      {isNotSigned && <AuthCard />}

      <PaymentMethod
        isNotSigned={isNotSigned}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      {selectedOption !== "cash" && (
        <Payment
          isDisabled={false}
          amount={kCalculatePrice(
            data.duration,
            garageData.garage.garage.pricePerHour
          )}
        />
      )}
      <Stack direction="row" justifyContent="center">
        <Typography fontSize={14}>
          Clicking below indicates that you have read and accept the
        </Typography>
        <Typography
          marginLeft={0.25}
          fontSize={14}
          color="#7926c1"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            setTermsOpen(true);
          }}
        >
          Terms & Conditions
        </Typography>
      </Stack>
      <TermsDialog
        open={termsOpen}
        handleClose={() => {
          setTermsOpen(false);
        }}
      />
      {selectedOption === "cash" && !isNotSigned && (
        <PayButton onClick={handleClickOpen} disabled={isNotSigned}>
          EGP{" "}
          {kCalculatePrice(
            data.duration,
            garageData.garage.garage.pricePerHour
          )}{" "}
          - Reserve
        </PayButton>
      )}

      <ReserveDialog
        garage={garageData.garage.garage}
        additionalData={data}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
}

const PayButton = styled(Button)`
  text-transform: capitalize;
  margin-top: 2rem;
  padding: 0.7rem 0;
  width: 100%;
  border-radius: 0.2rem;
  background-color: #7926c1;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  &:hover {
    background-color: #9f53db;
  }
`;
