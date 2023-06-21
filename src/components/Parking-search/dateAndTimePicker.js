import * as React from "react";
import { setParkingFrom, setParkingUntil, setDuration,} 
from "../../redux/slices/geoCodeSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { styled } from "@mui/system";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import style from './ParkingSearch.module.css'
import './ParkingSearch.css'

const StyledDateTimePicker = styled(DateTimePicker)`
  label.Mui-focused {
    color: #851fbf;
    font-weight: bold;
    font-size: 18px;
  }

  & + & {
    margin-top: 8px;
  }

  background-color: white;
  border: 2px solid #851fbf;
  border-radius: 8px;
  z-index: 0;
`;

dayjs.extend(duration);

export default function DateTimePickerValue() {
  const parkingFrom = useSelector((state) => state.dateGeocode.parkingFrom);
  const parkingUntil = useSelector((state) => state.dateGeocode.parkingUntil);
  const dispatch = useDispatch();

  const handleParkingFromChange = (date) => {
    const isoDate = date.toISOString();
    dispatch(setParkingFrom(isoDate));
  };

  const handleParkingUntilChange = (date) => {
    const isoDate = date.toISOString();
    dispatch(setParkingUntil(isoDate));
  };

  useEffect(() => {
    if (parkingFrom && parkingUntil) {
      const parsedParkingFrom = dayjs(parkingFrom);
      const parsedParkingUntil = dayjs(parkingUntil);
      const difference = calculateDuration(
        parsedParkingFrom,
        parsedParkingUntil
      );
      dispatch(setDuration(difference));
    }
  }, [parkingFrom, parkingUntil]);

  const calculateDuration = (dateFrom, dateUntil) => {
    const duration = dayjs.duration(dateUntil.diff(dateFrom));
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();

    return {
      days,
      hours,
      minutes,
    };
  };

  const disableDate = (date) => {
    if (!parkingFrom) {
      return false;
    }
    const selectedDate = dayjs(parkingFrom).startOf("day");
    return date.isBefore(selectedDate, "day");
  };

  const getMinimumTime = () => {
    if (dayjs(parkingFrom).isSame(dayjs(parkingUntil), "day")) {
      return dayjs(parkingFrom).add(1, "hour");
    }
    return null;
  };
  const parkingFromValue = dayjs(parkingFrom);
  const parkingUntilValue = dayjs(parkingUntil);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <StyledDateTimePicker
          label="Parking From"
          value={parkingFrom == null ? null : parkingFromValue}
          onChange={handleParkingFromChange}
          disablePast
          className={`${style.DateTimePicker}`}
        />
        <StyledDateTimePicker
          label="Parking Until"
          value={parkingUntil == null ? null : parkingUntilValue}
          onChange={handleParkingUntilChange}
          disablePast
          shouldDisableDate={disableDate}
          minTime={getMinimumTime()}
          className={`${style.DateTimePicker}`}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
