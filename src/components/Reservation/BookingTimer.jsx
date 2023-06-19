import { Stack, Typography } from "@mui/material";
import React from "react";

export default function BookingTimer({ icon, text, value, isUnderLine }) {
  return (
    <Stack marginY={3} direction="row" justifyContent="space-between">
      <Stack direction="row">
        {icon}
        <Typography marginLeft={0.7}>{text}</Typography>
      </Stack>
      <Typography
        fontWeight="bold"
        sx={{ textDecorationLine: isUnderLine ? "underline" : "none" }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
