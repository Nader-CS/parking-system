import * as React from "react";
import {
  setParkingFrom,
  setParkingUntil,
  setDuration,
} from "../../redux/slices/geoCodeSlice";
import { useEffect } from "react";
import classes from "./dateAndTimePicker.module.css";
import { useSelector, useDispatch } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { styled } from "@mui/system";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/ar";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
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
    console.log(date.isBefore(selectedDate, "day"));
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
  // console.log(parkingFromValue);
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={i18n.language === "ar" ? "ar" : "en"}
    >
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <StyledDateTimePicker
          className={
            i18n.language === "ar"
              ? classes["ar-custom-styled-date-time-picker"]
              : ""
          }
          label={t("parking-from")}
          value={parkingFrom == null ? null : parkingFromValue}
          onChange={handleParkingFromChange}
          disablePast
        />
        <StyledDateTimePicker
          className={
            i18n.language === "ar"
              ? classes["ar-custom-styled-date-time-picker"]
              : ""
          }
          label={t("parking-until")}
          value={parkingUntil == null ? null : parkingUntilValue}
          onChange={handleParkingUntilChange}
          disablePast
          shouldDisableDate={disableDate}
          minTime={getMinimumTime()}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
