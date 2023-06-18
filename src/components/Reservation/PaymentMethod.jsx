import { CreditCard, Money } from "@mui/icons-material";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CardBox from "./CardBox";

export default function PaymentMethod({ isNotSigned }) {
  const [selectedOption, setSelectedOption] = useState("cash");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <CardBox backgroundColor={isNotSigned ? "#e3e3e3" : "white"}>
      <Typography fontSize={22} marginBottom={3} fontWeight="bold">
        Payment methods
      </Typography>
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        <FormControlLabel
          disabled={isNotSigned}
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
          disabled={true}
          control={<Radio />}
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
