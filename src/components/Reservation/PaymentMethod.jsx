import { CreditCard, Money } from "@mui/icons-material";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CardBox from "./CardBox";
import { useSelector } from "react-redux";

export default function PaymentMethod({
  isNotSigned,
  selectedOption,
  handleOptionChange,
}) {
  const { validUser } = useSelector((state) => state.loginReducer);
  return (
    <CardBox backgroundColor={!validUser ? "#e3e3e3" : "white"}>
      <Typography fontSize={22} marginBottom={3} fontWeight="bold">
        Payment methods
      </Typography>
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        <FormControlLabel
          disabled={!validUser}
          value="cash"
          control={
            <Radio
              sx={{ color: "black", "&.Mui-checked": { color: "#AA23B6" } }}
            />
          }
          color="black"
          label={
            <Stack direction="row" alignItems="center">
              <Money />
              <Typography marginLeft={0.7} fontSize={14} fontWeight="bold">
                Pay in cash
              </Typography>
            </Stack>
          }
        />
        <FormControlLabel
          value="card"
          disabled={!validUser}
          control={
            <Radio
              sx={{ color: "black", "&.Mui-checked": { color: "#AA23B6" } }}
            />
          }
          label={
            <Stack direction="row" alignItems="center">
              <CreditCard />
              <Typography marginLeft={0.7} fontSize={14} fontWeight="bold">
                Pay with card
              </Typography>
            </Stack>
          }
        />
      </RadioGroup>
    </CardBox>
  );
}
