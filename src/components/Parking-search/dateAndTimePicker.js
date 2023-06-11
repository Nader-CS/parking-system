import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { styled } from "@mui/system";

const StyledDateTimePicker = styled(DateTimePicker)`
  label.Mui-focused {
    color: #851fbf;
    font-weight: bold;
    font-size: 18px;
    background-color: white;
    padding: 5px;
  }

  & + & {
    margin-top: 8px; /* Adjust the margin as per your requirements */
  }
`;

export default function DateTimePickerValue() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <StyledDateTimePicker
          label="PARKING FROM"
          sx={{
            backgroundColor: "white",
            border: "1px solid #851fbf",
            borderRadius: "8px",
          }}
        />
        <StyledDateTimePicker
          label="PARKING UNTIL"
          sx={{
            backgroundColor: "white",
            border: "1px solid #851fbf",
            borderRadius: "8px",
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
