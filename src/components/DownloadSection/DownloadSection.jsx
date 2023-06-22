import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import StoreButton from "./StoreButton";
import AppImage from "../../assets/images/Download/IPark-app.png";
import { useTranslation } from "react-i18next";

export default function DownloadSection() {
  const { t, i18n } = useTranslation();
  return (
    <Box
      style={{
        marginTop: "7rem",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          flex={{ md: 2, lg: 1 }}
          order={{ xs: 2, md: 1 }}
          marginTop={{ xs: 1, md: 5 }}
          marginLeft={{ xs: 1, md: 4.5 }}
          style={{ paddingRight: i18n.language === "ar" ? "1rem" : "0" }}
        >
          <Typography
            component="span"
            fontSize={32}
            fontFamily={
              i18n.language === "ar"
                ? "'Noto Kufi Arabic', sans-serif"
                : "'Nunito', sans-serif"
            }
          >
            {t("download")}
            <Box component="span" style={{ fontWeight: "bold" }}>
              {" "}
              {t("egypts-first")}{" "}
            </Box>
            {t("parking-app")}
          </Typography>
          <Box
            marginY={2}
            width={50}
            height={5}
            sx={{ backgroundColor: "#AA23B6" }}
          ></Box>
          <Typography
            display={{ xs: "none", md: "block" }}
            color="#999999"
            lineHeight={1.5}
            fontSize={16}
            fontFamily={
              i18n.language === "ar"
                ? "'Noto Kufi Arabic', sans-serif"
                : "'Nunito', sans-serif"
            }
          >
            {t("rated-5-stars")}
          </Typography>
          <Stack
            direction="row"
            gap={2}
            marginTop={3}
            justifyContent={i18n.language === "ar" ? "space-evenly" : ""}
          >
            <StoreButton text="App Store" />
            <StoreButton text="Google Play" isGoogle={true} />
          </Stack>
        </Box>
        <Box
          sx={{ textAlign: "right" }}
          flex={1}
          order={{ xs: 1, md: 2 }}
          marginLeft={{ md: 2 }}
        >
          <Box
            component="img"
            sx={{
              height: {
                xs: "100%",
                md: "auto",
                lg: "auto",
              },
              width: {
                xs: "100%",
                sm: "28rem",
                md: "35rem",
                lg: "40rem",
              },
            }}
            src={AppImage}
            alt="App Image"
          ></Box>
        </Box>
      </Stack>
    </Box>
  );
}
